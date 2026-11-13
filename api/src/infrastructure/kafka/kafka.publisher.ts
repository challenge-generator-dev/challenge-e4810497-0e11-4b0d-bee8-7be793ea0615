import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { EventPublisherPort } from '../../domain/ports/event.publisher.port';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { Observable, fromEvent, Subject } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaPublisher implements EventPublisherPort, OnModuleDestroy {
  private readonly kafka: Kafka;
  private readonly producer: Producer;
  private readonly consumers: Map<string, any> = new Map();
  private readonly eventSubjects: Map<string, Subject<any>> = new Map();

  constructor(private readonly configService: ConfigService) {
    this.kafka = new Kafka({
      clientId: 'order-service',
      brokers: [this.configService.get<string>('KAFKA_BROKERS', 'localhost:9092')],
    });
    this.producer = this.kafka.producer();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
    for (const consumer of this.consumers.values()) {
      await consumer.disconnect();
    }
  }

  async publish<T>(topic: string, event: T): Promise<void> {
    await this.producer.connect();
    const record: ProducerRecord = {
      topic,
      messages: [{ value: JSON.stringify(event) }],
    };
    await this.producer.send(record);
  }

  subscribe<T>(topic: string): Observable<T> {
    if (!this.eventSubjects.has(topic)) {
      const subject = new Subject<T>();
      this.eventSubjects.set(topic, subject);

      const consumer = this.kafka.consumer({ groupId: 'order-service-group' });
      this.consumers.set(topic, consumer);

      consumer.connect().then(() => {
        consumer.subscribe({ topic, fromBeginning: true }).then(() => {
          consumer.run({
            eachMessage: async ({ message }) => {
              try {
                const event = JSON.parse(message.value?.toString() || '{}') as T;
                subject.next(event);
              } catch (error) {
                console.error(`Error processing message from topic ${topic}:`, error);
              }
            },
          });
        });
      });
    }
    return this.eventSubjects.get(topic)!.asObservable();
  }
}