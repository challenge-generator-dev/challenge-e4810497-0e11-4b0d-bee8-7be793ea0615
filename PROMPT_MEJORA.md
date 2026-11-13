# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/infrastructure/kafka/kafka.consumer.ts` — La fase "Configuración inicial y consumo de eventos" se implementa aqui: este archivo es el ejercicio.
- `api/src/application/services/order.service.ts` — La fase "Procesamiento y actualización de órdenes" se implementa aqui: este archivo es el ejercicio.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | Apache Kafka |
| `client` | `client/` | chapter, support | client | Angular | Angular |
| `infra-local` | (raiz) | support | infra | Compose local | Apache Kafka |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `GET /orders`
  - `GET /orders/:id`

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced L2

### Brecha de conocimiento
Publicar y consumir eventos en un topic Kafka y mostrarlos en tiempo real, Publica y consume eventos de un topic Kafka y refleja los mensajes en la interfaz

### Misión / candidato
Mostrar en vivo el estado de las ordenes

### Reto
- Tema: Consumo de eventos en tiempo real con Kafka
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de API para consumir eventos en tiempo real desde Kafka
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración inicial y consumo de eventos — objetivo: Configurar el sistema para consumir eventos desde Kafka y mostrar el estado inicial de las órdenes. — entregable (NO resolver): API funcional que consume eventos desde Kafka y muestra el estado de las órdenes.
- Fase 2: Procesamiento y actualización de órdenes — objetivo: Procesar los eventos recibidos y actualizar el estado de las órdenes en tiempo real. — entregable (NO resolver): API actualizada que procesa eventos y actualiza el estado de las órdenes en tiempo real.
- Fase 3: Optimización y manejo de errores — objetivo: Optimizar el rendimiento del sistema y manejar posibles errores en el consumo y procesamiento de eventos. — entregable (NO resolver): API optimizada y robusta que maneja errores y continúa operando correctamente.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/config": "4.0.4",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "kafkajs": "2.2.4",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/entities/order.entity.ts ===
import { OrderStatus } from './order-status.entity';
import { OrderItem } from './order-item.entity';
import { validateOrReject } from 'class-validator';

export class Order {
  private readonly _id: string;
  private _status: OrderStatus;
  private readonly _items: OrderItem[];
  private readonly _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    status: OrderStatus,
    items: OrderItem[],
    createdAt: Date = new Date(),
    updatedAt: Date = new Date()
  ) {
    this._id = id;
    this._status = status;
    this._items = items;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this.validateInvariants();
  }

  get id(): string {
    return this._id;
  }

  get status(): OrderStatus {
    return this._status;
  }

  get items(): OrderItem[] {
    return [...this._items];
  }

  get createdAt(): Date {
    return new Date(this._createdAt);
  }

  get updatedAt(): Date {
    return new Date(this._updatedAt);
  }

  updateStatus(newStatus: OrderStatus): void {
    if (!newStatus) {
      throw new Error('Order status cannot be null or undefined');
    }
    this._status = newStatus;
    this._updatedAt = new Date();
    this.validateInvariants();
  }

  calculateTotal(): number {
    return this._items.reduce((total, item) => total + item.calculateSubtotal(), 0);
  }

  private async validateInvariants(): Promise<void> {
    if (!this._id || this._id.trim().length === 0) {
      throw new Error('Order ID cannot be empty');
    }
    if (!this._status) {
      throw new Error('Order status cannot be null');
    }
    if (!this._items || this._items.length === 0) {
      throw new Error('Order must have at least one item');
    }
    await validateOrReject(this);
  }

  toDTO(): OrderDTO {
    return {
      id: this._id,
      status: this._status.toDTO(),
      items: this._items.map(item => item.toDTO()),
      createdAt: this._createdAt,
      updatedAt: this._updatedAt
    };
  }
}

export interface OrderDTO {
  id: string;
  status: OrderStatusDTO;
  items: OrderItemDTO[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderStatusDTO {
  value: string;
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}

// === ARCHIVO: api/src/domain/entities/order-status.entity.ts ===
import { validate } from 'class-validator';

export class OrderStatus {
  private readonly _value: string;

  private static readonly ALLOWED_STATUSES = [
    'PENDING',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED'
  ];

  constructor(value: string) {
    if (!OrderStatus.ALLOWED_STATUSES.includes(value)) {
      throw new Error(`Invalid order status: ${value}`);
    }
    this._value = value;
    this.validate();
  }

  get value(): string {
    return this._value;
  }

  private async validate(): Promise<void> {
    const errors = await validate(this);
    if (errors.length > 0) {
      throw new Error(`OrderStatus validation failed: ${errors.join(', ')}`);
    }
  }

  isTerminal(): boolean {
    return ['DELIVERED', 'CANCELLED'].includes(this._value);
  }

  canTransitionTo(newStatus: OrderStatus): boolean {
    const transitions: Record<string, string[]> = {
      PENDING: ['PROCESSING', 'CANCELLED'],
      PROCESSING: ['SHIPPED', 'CANCELLED'],
      SHIPPED: ['DELIVERED'],
      DELIVERED: [],
      CANCELLED: []
    };
    return transitions[this._value].includes(newStatus.value);
  }

  toDTO(): OrderStatusDTO {
    return {
      value: this._value
    };
  }
}

export interface OrderStatusDTO {
  value: string;
}

// === ARCHIVO: api/src/domain/entities/order-item.entity.ts ===
import { validateOrReject } from 'class-validator';

export class OrderItem {
  private readonly _productId: string;
  private _quantity: number;
  private readonly _price: number;

  constructor(productId: string, quantity: number, price: number) {
    if (!productId || productId.trim().length === 0) {
      throw new Error('Product ID cannot be empty');
    }
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }
    if (price <= 0) {
      throw new Error('Price must be greater than 0');
    }

    this._productId = productId;
    this._quantity = quantity;
    this._price = price;
    this.validateInvariants();
  }

  get productId(): string {
    return this._productId;
  }

  get quantity(): number {
    return this._quantity;
  }

  get price(): number {
    return this._price;
  }

  set quantity(newQuantity: number) {
    if (newQuantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }
    this._quantity = newQuantity;
    this.validateInvariants();
  }

  calculateSubtotal(): number {
    return this._quantity * this._price;
  }

  private async validateInvariants(): Promise<void> {
    await validateOrReject(this);
  }

  toDTO(): OrderItemDTO {
    return {
      productId: this._productId,
      quantity: this._quantity,
      price: this._price
    };
  }
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}

// === ARCHIVO: api/src/domain/ports/order.repository.port.ts ===
import { Order } from '../entities/order.entity';
import { Observable } from 'rxjs';

export interface OrderRepositoryPort {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  save(order: Order): Promise<Order>;
  update(order: Order): Promise<Order>;
  delete(id: string): Promise<void>;
  findByStatus(status: string): Promise<Order[]>;
  watchOrders(): Observable<Order>;
}

// === ARCHIVO: api/src/domain/ports/event.publisher.port.ts ===
import { Observable } from 'rxjs';

export interface EventPublisherPort {
  publish<T>(topic: string, event: T): Promise<void>;
  subscribe<T>(topic: string): Observable<T>;
}

// === ARCHIVO: api/src/application/services/order.service.ts ===
import { Injectable, Inject } from '@nestjs/common';
import { OrderRepositoryPort } from '../../domain/ports/order.repository.port';
import { EventPublisherPort } from '../../domain/ports/event.publisher.port';
import { Order } from '../../domain/entities/order.entity';
import { OrderStatus } from '../../domain/entities/order-status.entity';
import { OrderDTO } from '../../domain/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepositoryPort') private readonly orderRepository: OrderRepositoryPort,
    @Inject('EventPublisherPort') private readonly eventPublisher: EventPublisherPort,
  ) {}

  async getOrders(): Promise<OrderDTO[]> {
    // TODO(reto): Implementar la lógica para obtener todas las órdenes
    // Debe usar orderRepository.findAll() y mapear a DTOs
    return [];
  }

  async getOrderById(id: string): Promise<OrderDTO | null> {
    // TODO(reto): Implementar la lógica para obtener una orden por ID
    // Debe usar orderRepository.findById(id) y manejar el caso null
    return null;
  }

  async updateOrderStatus(id: string, newStatus: string): Promise<OrderDTO> {
    // TODO(reto): Implementar la lógica para actualizar el estado de una orden
    // Debe:
    // 1. Obtener la orden existente
    // 2. Validar la transición de estado
    // 3. Actualizar el estado
    // 4. Publicar evento de actualización usando eventPublisher
    // 5. Retornar el DTO actualizado
    throw new Error('Method not implemented');
  }

  async processOrderEvent(event: any): Promise<void> {
    // TODO(reto): Implementar la lógica para procesar eventos de órdenes
    // Debe manejar diferentes tipos de eventos y actualizar el estado de las órdenes
    throw new Error('Method not implemented');
  }
}

// === ARCHIVO: api/src/infrastructure/repositories/order.repository.ts ===
import { Injectable } from '@nestjs/common';
import { OrderRepositoryPort } from '../../domain/ports/order.repository.port';
import { Order } from '../../domain/entities/order.entity';
import { OrderStatus } from '../../domain/entities/order-status.entity';
import { OrderItem } from '../../domain/entities/order-item.entity';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class OrderRepository implements OrderRepositoryPort {
  private readonly orders: Map<string, Order> = new Map();
  private readonly orderSubject: Subject<Order> = new Subject();

  constructor() {
    this.seedInitialData();
  }

  private seedInitialData(): void {
    const order1 = new Order(
      'order-1',
      new OrderStatus('PENDING'),
      [
        new OrderItem('product-1', 2, 10.99),
        new OrderItem('product-2', 1, 5.99)
      ]
    );

    const order2 = new Order(
      'order-2',
      new OrderStatus('PROCESSING'),
      [
        new OrderItem('product-3', 3, 7.50)
      ]
    );

    this.orders.set(order1.id, order1);
    this.orders.set(order2.id, order2);
  }

  async findAll(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.get(id) || null;
  }

  async save(order: Order): Promise<Order> {
    this.orders.set(order.id, order);
    this.orderSubject.next(order);
    return order;
  }

  async update(order: Order): Promise<Order> {
    if (!this.orders.has(order.id)) {
      throw new Error(`Order with ID ${order.id} not found`);
    }
    this.orders.set(order.id, order);
    this.orderSubject.next(order);
    return order;
  }

  async delete(id: string): Promise<void> {
    this.orders.delete(id);
  }

  async findByStatus(status: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(order =>
      order.status.value === status
    );
  }

  watchOrders(): Observable<Order> {
    return this.orderSubject.asObservable();
  }
}

// === ARCHIVO: api/src/infrastructure/kafka/kafka.publisher.ts ===
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

// === ARCHIVO: api/src/infrastructure/kafka/kafka.consumer.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Kafka, Consumer, EachMessagePayload, SASLOptions } from 'kafkajs';
import { ConfigService } from '@nestjs/config';
import { OrderService } from '../../application/services/order.service';

@Injectable()
export class KafkaConsumer implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(KafkaConsumer.name);
  private readonly kafka: Kafka;
  private readonly consumer: Consumer;
  private isConnected = false;

  constructor(
    private readonly configService: ConfigService,
    private readonly orderService: OrderService,
  ) {
    const sslEnabled = this.configService.get<boolean>('KAFKA_SSL', false) ?? false;
    const saslEnabled = this.configService.get<boolean>('KAFKA_SASL_ENABLED', false) ?? false;
    
    let saslConfig: SASLOptions | undefined;
    if (saslEnabled) {
      saslConfig = {
        mechanism: this.configService.get<string>('KAFKA_SASL_MECHANISM', 'plain') ?? 'plain',
        username: this.configService.get<string>('KAFKA_SASL_USERNAME', '') ?? '',
        password: this.configService.get<string>('KAFKA_SASL_PASSWORD', '') ?? '',
      };
    }

    this.kafka = new Kafka({
      clientId: this.configService.get<string>('KAFKA_CLIENT_ID', 'order-consumer') ?? 'order-consumer',
      brokers: this.parseBrokers(),
      ssl: sslEnabled,
      sasl: saslConfig,
    });

    this.consumer = this.kafka.consumer({
      groupId: this.configService.get<string>('KAFKA_GROUP_ID', 'order-consumer-group') ?? 'order-consumer-group',
      sessionTimeout: this.configService.get<number>('KAFKA_SESSION_TIMEOUT', 30000) ?? 30000,
      heartbeatInterval: this.configService.get<number>('KAFKA_HEARTBEAT_INTERVAL', 3000) ?? 3000,
    });
  }

  private parseBrokers(): string[] {
    throw new Error('TODO(reto): parseBrokers');
  }

  async onModuleInit(): Promise<void> {
    throw new Error('TODO(reto): onModuleInit');
  }

  async onModuleDestroy(): Promise<void> {
    throw new Error('TODO(reto): onModuleDestroy');
  }

  private async connect(): Promise<void> {
    throw new Error('TODO(reto): connect');
  }

  private async disconnect(): Promise<void> {
    throw new Error('TODO(reto): disconnect');
  }

  private async subscribeToTopics(): Promise<void> {
    throw new Error('TODO(reto): subscribeToTopics');
  }

  private async handleMessage(payload: EachMessagePayload): Promise<void> {
    throw new Error('TODO(reto): handleMessage');
  }

  isHealthy(): boolean {
    return this.isConnected;
  }
}

// === ARCHIVO: api/src/config/app.config.ts ===
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

// === ARCHIVO: api/src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const appConfig = app.get(AppConfig);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  
  app.enableCors({
    origin: appConfig.corsOrigin,
    credentials: true,
  });
  
  const port = appConfig.appPort;
  const host = appConfig.appHost;
  
  await app.listen(port, host);
  
  console.log(`Aplicación corriendo en http://${host}:${port}`);
  console.log(`Entorno: ${appConfig.nodeEnv}`);
  console.log(`Kafka brokers: ${appConfig.kafkaBrokers.join(', ')}`);
}

bootstrap();

// === ARCHIVO: api/src/app.module.ts ===
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

// === ARCHIVO: api/src/infrastructure/controllers/orders.controller.ts ===
import { Controller, Get, Param, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { OrderService } from '../../application/services/order.service';
import { OrderDTO } from '../../domain/entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getOrders(): Promise<OrderDTO[]> {
    const orders = await this.orderService.getOrders();
    return orders;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOrderById(@Param('id') id: string): Promise<OrderDTO> {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }
}

// === ARCHIVO: client/src/app/app.component.ts ===
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'order-management';
}

// === ARCHIVO: client/package.json ===
{
  "name": "reto-angular",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "ng": "ng",
    "build": "ng build"
  },
  "dependencies": {
    "@angular/animations": "19.2.25",
    "@angular/common": "19.2.25",
    "@angular/compiler": "19.2.25",
    "@angular/core": "19.2.25",
    "@angular/forms": "19.2.25",
    "@angular/platform-browser": "19.2.25",
    "@angular/platform-browser-dynamic": "19.2.25",
    "@angular/router": "19.2.25",
    "rxjs": "7.8.2",
    "tslib": "2.9.1",
    "zone.js": "0.15.1"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "19.2.27",
    "@angular/cli": "19.2.27",
    "@angular/compiler-cli": "19.2.25",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: client/angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "reto": {
      "projectType": "application",
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/reto",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "1MB",
                  "maximumError": "2MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "16kB",
                  "maximumError": "32kB"
                }
              ],
              "outputHashing": "all"
            }
          },
          "defaultConfiguration": "production"
        }
      }
    }
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "strictPropertyInitialization": false,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": false,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: client/tsconfig.app.json ===
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: client/src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Reto</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>

// === ARCHIVO: client/src/styles.css ===
/* estilos globales */

// === ARCHIVO: client/src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// === ARCHIVO: client/src/app/core/models/order.model.ts ===
import { OrderDTO, OrderStatusDTO, OrderItemDTO } from '../dtos/order.dto';

export interface Order {
  id: string;
  status: OrderStatus;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderStatus {
  value: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export function mapOrderDtoToOrder(dto: OrderDTO): Order {
  return {
    id: dto.id,
    status: { value: dto.status.value },
    items: dto.items.map((item: OrderItemDTO) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    })),
    createdAt: new Date(dto.createdAt),
    updatedAt: new Date(dto.updatedAt)
  };
}

export type { OrderDTO, OrderStatusDTO, OrderItemDTO } from '../dtos/order.dto';

// === ARCHIVO: client/src/app/core/services/order.service.ts ===
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Order, mapOrderDtoToOrder } from '../models/order.model';
import { OrderDTO } from '../dtos/order.dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiUrl = 'http://localhost:3000/orders';
  private ordersSignal = signal<Order[]>([]);
  private selectedOrderSignal = signal<Order | null>(null);

  constructor(private http: HttpClient) {}

  get orders() {
    return this.ordersSignal.asReadonly();
  }

  get selectedOrder() {
    return this.selectedOrderSignal.asReadonly();
  }

  fetchOrders(): Observable<Order[]> {
    return this.http.get<OrderDTO[]>(this.apiUrl).pipe(
      map(dtos => dtos.map(mapOrderDtoToOrder)),
      tap(orders => {
        this.ordersSignal.set(orders);
      }),
      catchError(error => {
        console.error('Error fetching orders:', error);
        return throwError(() => new Error('Failed to fetch orders'));
      })
    );
  }

  fetchOrderById(id: string): Observable<Order> {
    return this.http.get<OrderDTO>(`${this.apiUrl}/${id}`).pipe(
      map(dto => mapOrderDtoToOrder(dto)),
      tap(order => {
        this.selectedOrderSignal.set(order);
      }),
      catchError(error => {
        console.error(`Error fetching order with id ${id}:`, error);
        return throwError(() => new Error(`Failed to fetch order with id ${id}`));
      })
    );
  }

  updateOrderStatus(orderId: string, newStatus: string): void {
    const currentOrders = this.ordersSignal();
    const updatedOrders = currentOrders.map(order =>
      order.id === orderId ? { ...order, status: { value: newStatus } } : order
    );
    this.ordersSignal.set(updatedOrders);

    const currentSelectedOrder = this.selectedOrderSignal();
    if (currentSelectedOrder?.id === orderId) {
      this.selectedOrderSignal.set({
        ...currentSelectedOrder,
        status: { value: newStatus }
      });
    }
  }
}

// === ARCHIVO: client/src/app/core/dtos/order.dto.ts ===
export interface OrderDTO {
  id: string;
  status: OrderStatusDTO;
  items: OrderItemDTO[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderStatusDTO {
  value: string;
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}

// === ARCHIVO: client/src/app/features/orders/orders.component.ts ===
import { Component, OnInit, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';
import { OrderStatusComponent } from '../../shared/components/order-status/order-status.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, OrderStatusComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private readonly orderService = inject(OrderService);
  
  readonly orders = this.orderService.orders;
  readonly selectedOrder = this.orderService.selectedOrder;
  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  
  readonly hasOrders = computed(() => this.orders().length > 0);
  readonly orderCount = computed(() => this.orders().length);
  
  readonly pendingOrders = computed(() => 
    this.orders().filter(order => order.status.value === 'PENDING')
  );
  
  readonly completedOrders = computed(() => 
    this.orders().filter(order => order.status.value === 'COMPLETED')
  );

  constructor() {
    effect(() => {
      const currentOrders = this.orders();
      if (currentOrders.length > 0) {
        console.log(`[OrdersComponent] Órdenes cargadas: ${currentOrders.length}`);
      }
    });
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    
    this.orderService.fetchOrders().subscribe({
      next: (orders: Order[]) => {
        this.isLoading.set(false);
        console.log(`[OrdersComponent] Se cargaron ${orders.length} órdenes`);
      },
      error: (error: Error) => {
        this.isLoading.set(false);
        this.errorMessage.set('Error al cargar las órdenes. Por favor, intente de nuevo.');
        console.error('[OrdersComponent] Error cargando órdenes:', error);
      }
    });
  }

  selectOrder(order: Order): void {
    this.orderService.fetchOrderById(order.id).subscribe({
      next: (selectedOrder: Order) => {
        console.log(`[OrdersComponent] Orden seleccionada: ${selectedOrder.id}`);
      },
      error: (error: Error) => {
        console.error('[OrdersComponent] Error al seleccionar orden:', error);
      }
    });
  }

  updateStatus(orderId: string, newStatus: string): void {
    this.orderService.updateOrderStatus(orderId, newStatus);
  }

  getTotalItems(order: Order): number {
    return order.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(order: Order): number {
    return order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  trackByOrderId(index: number, order: Order): string {
    return order.id;
  }

  onRefresh(): void {
    this.loadOrders();
  }

  clearError(): void {
    this.errorMessage.set(null);
  }
}

// === ARCHIVO: client/src/app/features/orders/orders.component.html ===
<div class="orders-container">
  <header class="orders-header">
    <h1 class="orders-title">Gestión de Órdenes</h1>
    <div class="orders-actions">
      <button 
        class="btn-refresh" 
        (click)="onRefresh()"
        [disabled]="isLoading()"
        aria-label="Actualizar lista de órdenes">
        <span class="btn-icon" aria-hidden="true">↻</span>
        Actualizar
      </button>
    </div>
  </header>

  @if (errorMessage()) {
    <div class="error-banner" role="alert">
      <p class="error-text">{{ errorMessage() }}</p>
      <button class="btn-close" (click)="clearError()" aria-label="Cerrar mensaje de error">
        ×
      </button>
    </div>
  }

  @if (isLoading()) {
    <div class="loading-state" role="status" aria-live="polite">
      <div class="spinner" aria-hidden="true"></div>
      <p class="loading-text">Cargando órdenes...</p>
    </div>
  } @else if (!hasOrders()) {
    <div class="empty-state" role="status">
      <div class="empty-icon" aria-hidden="true">📋</div>
      <p class="empty-text">No hay órdenes disponibles</p>
      <button class="btn-primary" (click)="onRefresh()">
        Cargar órdenes
      </button>
    </div>
  } @else {
    <div class="orders-summary">
      <div class="summary-card">
        <span class="summary-label">Total de órdenes</span>
        <span class="summary-value">{{ orderCount() }}</span>
      </div>
      <div class="summary-card summary-pending">
        <span class="summary-label">Pendientes</span>
        <span class="summary-value">{{ pendingOrders().length }}</span>
      </div>
      <div class="summary-card summary-completed">
        <span class="summary-label">Completadas</span>
        <span class="summary-value">{{ completedOrders().length }}</span>
      </div>
    </div>

    <section class="orders-list" aria-label="Lista de órdenes">
      <table class="orders-table" role="table">
        <thead>
          <tr>
            <th scope="col">ID de Orden</th>
            <th scope="col">Estado</th>
            <th scope="col">Items</th>
            <th scope="col">Total</th>
            <th scope="col">Fecha de Creación</th>
            <th scope="col">Última Actualización</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (order of orders(); track trackByOrderId($index, order)) {
            <tr 
              class="order-row" 
              [class.selected]="selectedOrder()?.id === order.id"
              (click)="selectOrder(order)"
              tabindex="0"
              role="row"
              [attr.aria-selected]="selectedOrder()?.id === order.id">
              <td class="order-id">
                <code>{{ order.id }}</code>
              </td>
              <td class="order-status">
                <app-order-status [status]="order.status"></app-order-status>
              </td>
              <td class="order-items">
                <span class="items-count">{{ getTotalItems(order) }}</span>
                <span class="items-detail">({{ order.items.length }} productos)</span>
              </td>
              <td class="order-total">
                <span class="total-amount">{{ getTotalPrice(order) | currency:'USD':'symbol':'1.2-2' }}</span>
              </td>
              <td class="order-date">
                <time [attr.datetime]="order.createdAt.toISOString()">
                  {{ formatDate(order.createdAt) }}
                </time>
              </td>
              <td class="order-updated">
                <time [attr.datetime]="order.updatedAt.toISOString()">
                  {{ formatDate(order.updatedAt) }}
                </time>
              </td>
              <td class="order-actions">
                <div class="action-buttons">
                  <button 
                    class="btn-action btn-view"
                    (click)="selectOrder(order); $event.stopPropagation()"
                    aria-label="Ver detalles de la orden {{ order.id }}">
                    Ver
                  </button>
                  <button 
                    class="btn-action btn-update"
                    (click)="updateStatus(order.id, 'PROCESSING'); $event.stopPropagation()"
                    aria-label="Actualizar estado de la orden {{ order.id }}">
                    Actualizar
                  </button>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </section>
  }

  @if (selectedOrder()) {
    <aside class="order-detail-panel" role="complementary" aria-label="Detalles de la orden seleccionada">
      <h2 class="detail-title">Detalles de la Orden</h2>
      <div class="detail-content">
        <dl class="detail-list">
          <dt class="detail-label">ID</dt>
          <dd class="detail-value"><code>{{ selectedOrder()!.id }}</code></dd>
          
          <dt class="detail-label">Estado</dt>
          <dd class="detail-value">
            <app-order-status [status]="selectedOrder()!.status"></app-order-status>
          </dd>
          
          <dt class="detail-label">Fecha de Creación</dt>
          <dd class="detail-value">
            <time>{{ formatDate(selectedOrder()!.createdAt) }}</time>
          </dd>
          
          <dt class="detail-label">Última Actualización</dt>
          <dd class="detail-value">
            <time>{{ formatDate(selectedOrder()!.updatedAt) }}</time>
          </dd>
        </dl>
        
        <h3 class="items-title">Productos</h3>
        <ul class="items-list" role="list">
          @for (item of selectedOrder()!.items; track item.productId) {
            <li class="item-row">
              <span class="item-product-id">{{ item.productId }}</span>
              <span class="item-quantity">× {{ item.quantity }}</span>
              <span class="item-price">{{ item.price | currency:'USD':'symbol':'1.2-2' }}</span>
            </li>
          }
        </ul>
        
        <div class="detail-total">
          <span class="total-label">Total:</span>
          <span class="total-value">{{ getTotalPrice(selectedOrder()!) | currency:'USD':'symbol':'1.2-2' }}</span>
        </div>
      </div>
    </aside>
  }
</div>

// === ARCHIVO: client/src/app/features/orders/orders.component.scss ===
.orders-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.orders-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.orders-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
}

.orders-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-refresh {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    background-color: #5a6268;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-icon {
    font-size: 1.125rem;
  }
}

.error-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  color: #721c24;
}

.error-text {
  margin: 0;
  font-size: 0.9375rem;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #721c24;
  cursor: pointer;
  padding: 0 0.5rem;
  line-height: 1;

  &:hover {
    color: #491217;
  }
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e9ecef;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.empty-icon {
  font-size: 3rem;
}

.empty-text {
  color: #6c757d;
  font-size: 1.125rem;
  margin: 0;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
}

.orders-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.summary-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.summary-label {
  font-size: 0.875rem;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.summary-value {
  font-size: 1.75rem;
  font-weight: 600;
  color: #212529;
}

.summary-pending {
  border-left: 4px solid #ffc107;
}

.summary-completed {
  border-left: 4px solid #28a745;
}

.orders-list {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;

  thead {
    background-color: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
  }

  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: #495057;
    white-space: nowrap;
  }

  tbody {
    tr {
      border-bottom: 1px solid #e9ecef;
      cursor: pointer;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: #f8f9fa;
      }

      &.selected {
        background-color: #e7f1ff;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  td {
    padding: 1rem;
    vertical-align: middle;
  }
}

.order-id code {
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  background-color: #f1f3f5;
  border-radius: 4px;
  color: #495057;
}

.order-items {
  .items-count {
    font-weight: 600;
    color: #212529;
  }

  .items-detail {
    color: #6c757d;
    font-size: 0.8125rem;
    margin-left: 0.375rem;
  }
}

.order-total {
  .total-amount {
    font-weight: 600;
    color: #28a745;
  }
}

.order-date,
.order-updated {
  time {
    color: #6c757d;
    font-size: 0.875rem;
  }
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-action {
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &.btn-view {
    background-color: #e9ecef;
    color: #495057;

    &:hover {
      background-color: #dee2e6;
    }
  }

  &.btn-update {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }
}

.order-detail-panel {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: white;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  overflow-y: auto;
  z-index: 100;
}

.detail-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem 1rem;
  margin: 0;
}

.detail-label {
  font-weight: 600;
  color: #6c757d;
  font-size: 0.875rem;
}

.detail-value {
  margin: 0;
  color: #212529;

  code {
    font-family: 'SF Mono', Monaco, 'Courier New', monospace;
    font-size: 0.8125rem;
    padding: 0.125rem 0.375rem;
    background-color: #f1f3f5;
    border-radius: 3px;
  }
}

.items-title {
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0 0 0.75rem 0;
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.item-product-id {
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 0.8125rem;
  color: #495057;
}

.item-quantity {
  color: #6c757d;
  font-size: 0.875rem;
}

.item-price {
  font-weight: 600;
  color: #212529;
}

.detail-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #e9ecef;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.total-label {
  font-weight: 600;
  color: #495057;
}

.total-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #28a745;
}

@media (max-width: 1024px) {
  .orders-table {
    th:nth-child(6),
    td:nth-child(6) {
      display: none;
    }
  }

  .order-detail-panel {
    width: 100%;
    position: relative;
    box-shadow: none;
    border-top: 2px solid #e9ecef;
  }
}

@media (max-width: 768px) {
  .orders-container {
    padding: 1rem;
  }

  .orders-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .orders-title {
    font-size: 1.5rem;
  }

  .orders-table {
    th:nth-child(4),
    td:nth-child(4),
    th:nth-child(5),
    td:nth-child(5) {
      display: none;
    }
  }

  .orders-summary {
    grid-template-columns: 1fr;
  }
}

// === ARCHIVO: client/src/app/shared/components/order-status/order-status.component.ts ===
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatus } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent {
  @Input({ required: true }) status!: OrderStatus;
  @Input() showLabel: boolean = true;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get statusClass(): string {
    if (!this.status?.value) {
      return 'status-unknown';
    }
    const normalizedValue = this.status.value.toLowerCase();
    
    if (normalizedValue.includes('pending') || normalizedValue.includes('pendiente')) {
      return 'status-pending';
    }
    if (normalizedValue.includes('processing') || normalizedValue.includes('procesando')) {
      return 'status-processing';
    }
    if (normalizedValue.includes('completed') || normalizedValue.includes('completado') || normalizedValue.includes('entregado')) {
      return 'status-completed';
    }
    if (normalizedValue.includes('cancelled') || normalizedValue.includes('cancelado')) {
      return 'status-cancelled';
    }
    if (normalizedValue.includes('failed') || normalizedValue.includes('error')) {
      return 'status-failed';
    }
    
    return 'status-default';
  }

  get statusIcon(): string {
    if (!this.status?.value) {
      return 'help_outline';
    }
    const normalizedValue = this.status.value.toLowerCase();
    
    if (normalizedValue.includes('pending') || normalizedValue.includes('pendiente')) {
      return 'schedule';
    }
    if (normalizedValue.includes('processing') || normalizedValue.includes('procesando')) {
      return 'sync';
    }
    if (normalizedValue.includes('completed') || normalizedValue.includes('completado') || normalizedValue.includes('entregado')) {
      return 'check_circle';
    }
    if (normalizedValue.includes('cancelled') || normalizedValue.includes('cancelado')) {
      return 'cancel';
    }
    if (normalizedValue.includes('failed') || normalizedValue.includes('error')) {
      return 'error';
    }
    
    return 'info';
  }

  get displayLabel(): string {
    if (!this.status?.value) {
      return 'Desconocido';
    }
    return this.status.value;
  }

  get ariaLabel(): string {
    return `Estado de la orden: ${this.displayLabel}`;
  }
}

// === ARCHIVO: client/src/app/shared/components/order-status/order-status.component.html ===
<div 
  class="order-status" 
  [ngClass]="[statusClass, 'size-' + size]" 
  [attr.aria-label]="ariaLabel"
  role="status"
  aria-live="polite">
  
  <span class="status-indicator" aria-hidden="true">
    <span class="status-dot"></span>
  </span>
  
  <span class="status-icon" aria-hidden="true">
    <svg *ngIf="statusIcon === 'schedule'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
    <svg *ngIf="statusIcon === 'sync'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    </svg>
    <svg *ngIf="statusIcon === 'check_circle'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
    <svg *ngIf="statusIcon === 'cancel'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
    </svg>
    <svg *ngIf="statusIcon === 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
    <svg *ngIf="statusIcon === 'info'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
    <svg *ngIf="statusIcon === 'help_outline'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
    </svg>
  </span>
  
  <span *ngIf="showLabel" class="status-label">
    {{ displayLabel }}
  </span>
  
  <span class="status-timestamp" *ngIf="status.lastUpdated">
    <time [attr.datetime]="status.lastUpdated.toISOString()">
      Actualizado: {{ status.lastUpdated | date:'short' }}
    </time>
  </span>
</div>

// === ARCHIVO: client/src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { OrderService } from './core/services/order.service';
import { mapOrderDtoToOrder } from './core/models/order.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter([]),
    provideAnimationsAsync(),
    {
      provide: OrderService,
      useFactory: (httpClient: any) => {
        return new OrderService(httpClient);
      },
      deps: []
    }
  ]
};

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  kafka:
    image: "apache/kafka:3.8.0"
    ports:
      - "127.0.0.1:9092:9092"
    environment:
      KAFKA_NODE_ID: "1"
      KAFKA_PROCESS_ROLES: "broker,controller"
      KAFKA_LISTENERS: "PLAINTEXT://:9092,CONTROLLER://:9093"
      KAFKA_ADVERTISED_LISTENERS: "PLAINTEXT://localhost:9092"
      KAFKA_CONTROLLER_LISTENER_NAMES: "CONTROLLER"
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: "CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT"
      KAFKA_CONTROLLER_QUORUM_VOTERS: "1@localhost:9093"
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: "1"
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: "1"
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: "1"
      KAFKA_GROUP_INITIAL_REBALANCE_DELAY_MS: "0"
    healthcheck:
      test: ["CMD-SHELL","/opt/kafka/bin/kafka-broker-api-versions.sh --bootstrap-server localhost:9092 > /dev/null 2>&1"]
      interval: 15s
      timeout: 10s
      retries: 10
      start_period: 30s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| Apache Kafka (KRaft, un nodo) | `apache/kafka:3.8.0` | 9092 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/kafka/create-topics.sh ===
#!/usr/bin/env bash
# Crea los topics en Kafka local (idempotente). Ejecutar con el compose levantado y healthy.
set -euo pipefail

docker compose exec -T kafka /opt/kafka/bin/kafka-topics.sh --bootstrap-server localhost:9092 --create --if-not-exists --topic app-events --partitions 1 --replication-factor 1

```
