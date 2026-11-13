import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './config/app.config';
import { OrderService } from './application/services/order.service';
import { OrderRepository } from './infrastructure/repositories/order.repository';
import { KafkaPublisher } from './infrastructure/kafka/kafka.publisher';
import { KafkaConsumer } from './infrastructure/kafka/kafka.consumer';
import { OrdersController } from './infrastructure/controllers/orders.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AppConfigModule,
  ],
  controllers: [OrdersController],
  providers: [
    {
      provide: 'OrderRepositoryPort',
      useClass: OrderRepository,
    },
    {
      provide: 'EventPublisherPort',
      useClass: KafkaPublisher,
    },
    OrderService,
    KafkaPublisher,
    KafkaConsumer,
  ],
})
export class AppModule {}