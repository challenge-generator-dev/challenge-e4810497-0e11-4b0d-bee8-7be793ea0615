# Implementación de API para consumir eventos en tiempo real desde Kafka

El sistema debe publicar y consumir eventos en un topic Kafka y mostrar el estado de las órdenes en tiempo real. El objetivo es desarrollar la API y la lógica de negocio necesaria para procesar y mostrar los eventos recibidos desde Kafka en la interfaz de usuario.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Consumo de eventos en tiempo real con Kafka |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial y consumo de eventos

**Objetivo:** Configurar el sistema para consumir eventos desde Kafka y mostrar el estado inicial de las órdenes.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar la conexión con Kafka.
- Consumir eventos desde el topic Kafka y almacenar los datos en memoria.
- Implementar un endpoint para mostrar el estado actual de las órdenes.

**Entregable:** API funcional que consume eventos desde Kafka y muestra el estado de las órdenes.

<details>
<summary>Pistas de conocimiento</summary>

- Conocer los conceptos básicos de Kafka y su uso en sistemas distribuidos.
- Entender cómo configurar y consumir eventos desde un topic Kafka.

</details>

### Fase 2: Procesamiento y actualización de órdenes

**Objetivo:** Procesar los eventos recibidos y actualizar el estado de las órdenes en tiempo real.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la lógica para procesar los eventos recibidos desde Kafka.
- Actualizar el estado de las órdenes en memoria según los eventos procesados.
- Asegurar que los cambios en el estado de las órdenes se reflejen en la interfaz de usuario en tiempo real.

**Entregable:** API actualizada que procesa eventos y actualiza el estado de las órdenes en tiempo real.

<details>
<summary>Pistas de conocimiento</summary>

- Entender los diferentes tipos de eventos que pueden recibirse desde Kafka.
- Conocer las mejores prácticas para procesar y almacenar datos en memoria.

</details>

### Fase 3: Optimización y manejo de errores

**Objetivo:** Optimizar el rendimiento del sistema y manejar posibles errores en el consumo y procesamiento de eventos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Identificar y optimizar las partes críticas del código para mejorar el rendimiento.
- Implementar mecanismos para manejar errores en el consumo y procesamiento de eventos.
- Asegurar que el sistema pueda recuperarse de posibles fallos y continuar operando correctamente.

**Entregable:** API optimizada y robusta que maneja errores y continúa operando correctamente.

<details>
<summary>Pistas de conocimiento</summary>

- Conocer técnicas de optimización de rendimiento en sistemas distribuidos.
- Entender los diferentes tipos de errores que pueden ocurrir al consumir y procesar eventos desde Kafka.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es Kafka y cómo se utiliza en sistemas distribuidos?
- **paraQueSirve**: ¿Para qué sirve consumir eventos desde Kafka en este sistema?
- **comoSeUsa**: ¿Cómo se consumen y procesan eventos desde Kafka en este sistema?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al consumir y procesar eventos desde Kafka y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización y el manejo de errores en este sistema?

## Criterios de Evaluacion

- Configurar correctamente la conexión con Kafka.
- Consumir y almacenar eventos desde Kafka en memoria.
- Implementar un endpoint para mostrar el estado de las órdenes.
- Procesar eventos y actualizar el estado de las órdenes en tiempo real.
- Optimizar el rendimiento del sistema.
- Manejar errores en el consumo y procesamiento de eventos.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

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

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
