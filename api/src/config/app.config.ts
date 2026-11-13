import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      expandVariables: true,
      cache: true,
    }),
  ],
  providers: [
    {
      provide: 'APP_CONFIG',
      useFactory: (configService: ConfigService): AppConfig => {
        return new AppConfig(configService);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['APP_CONFIG', ConfigService],
})
export class AppConfigModule {}

export class AppConfig {
  private readonly configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development') ?? 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get appPort(): number {
    return this.configService.get<number>('APP_PORT', 3000) ?? 3000;
  }

  get appHost(): string {
    return this.configService.get<string>('APP_HOST', '0.0.0.0') ?? '0.0.0.0';
  }

  get kafkaBrokers(): string[] {
    const brokers = this.configService.get<string>('KAFKA_BROKERS', 'localhost:9092');
    return (brokers ?? 'localhost:9092').split(',').map(b => b.trim());
  }

  get kafkaClientId(): string {
    return this.configService.get<string>('KAFKA_CLIENT_ID', 'order-api') ?? 'order-api';
  }

  get kafkaGroupId(): string {
    return this.configService.get<string>('KAFKA_GROUP_ID', 'order-api-group') ?? 'order-api-group';
  }

  get kafkaTopics(): string[] {
    const topics = this.configService.get<string>('KAFKA_TOPICS', 'order-events');
    return (topics ?? 'order-events').split(',').map(t => t.trim());
  }

  get kafkaSslEnabled(): boolean {
    return this.configService.get<boolean>('KAFKA_SSL', false) ?? false;
  }

  get kafkaSaslEnabled(): boolean {
    return this.configService.get<boolean>('KAFKA_SASL_ENABLED', false) ?? false;
  }

  get kafkaSaslMechanism(): string {
    return this.configService.get<string>('KAFKA_SASL_MECHANISM', 'plain') ?? 'plain';
  }

  get databaseUrl(): string | undefined {
    return this.configService.get<string>('DATABASE_URL');
  }

  get logLevel(): string {
    return this.configService.get<string>('LOG_LEVEL', 'info') ?? 'info';
  }

  get corsOrigin(): string {
    return this.configService.get<string>('CORS_ORIGIN', '*') ?? '*';
  }

  get requestTimeout(): number {
    return this.configService.get<number>('REQUEST_TIMEOUT', 30000) ?? 30000;
  }

  get retryAttempts(): number {
    return this.configService.get<number>('RETRY_ATTEMPTS', 3) ?? 3;
  }

  get retryDelay(): number {
    return this.configService.get<number>('RETRY_DELAY', 1000) ?? 1000;
  }

  getString(key: string, defaultValue?: string): string {
    const value = this.configService.get<string>(key);
    return value ?? defaultValue ?? '';
  }

  getNumber(key: string, defaultValue?: number): number {
    const value = this.configService.get<number>(key);
    return value ?? defaultValue ?? 0;
  }

  getBoolean(key: string, defaultValue?: boolean): boolean {
    const value = this.configService.get<boolean>(key);
    return value ?? defaultValue ?? false;
  }

  getOrThrow(key: string): string {
    const value = this.configService.get<string>(key);
    if (value === undefined || value === null) {
      throw new Error(`Configuration key "${key}" is not defined`);
    }
    return value;
  }
}