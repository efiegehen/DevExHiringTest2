# DevExHiringTest2

# Desafío de Contratación DevEx

Gracias por tu interés en nuestra posición de Experiencia del Desarrollador (DevEx). Como parte del proceso de entrevista, te pedimos que completes el siguiente desafío técnico.

## Objetivo del Desafío

Diseña y desarrolla la aplicación utilizando un lenguaje de programación y un framework con los que estés familiarizado (de preferencia node o java). La aplicación deberá exponer al menos un endpoint que responda a una solicitud HTTP GET con un mensaje de "¡Hola Mundo!". Posteriormente, despliega esta aplicación en un cluster de Kubernetes o ECS y establece un pipeline de CI/CD. 

Este servicio debe poder accederse desde internet.

## Requerimientos

1. Desarrollo de la Aplicación: Diseña y desarrolla la aplicación utilizando un framework que prefieras. La aplicación debe responder a una solicitud HTTP GET en un endpoint de tu elección con un mensaje de "¡Hola Mundo!".

2. Despliegue de la Aplicación: Despliega la aplicación en un cluster de Kubernetes o ECS. La aplicación deberá ser accesible desde internet.

3. Creación del Pipeline de CI/CD: Configura un pipeline de CI/CD que automatice el proceso de prueba y despliegue de la aplicación. El pipeline deberá incluir las siguientes etapas:
- Pruebas: Ejecuta un conjunto de pruebas básicas para la aplicación.
- Construcción: Construye la aplicación a una imagen docker, la cual debe subirse a un ECR privado.
- Despliegue: Despliega la aplicación en el cluster de Kubernetes o ECS.

4. Monitoreo y Logging: Configura un sistema básico de monitoreo y logging para la aplicación.

5. Documentación: Crea una documentación que explique cómo desplegar y operar la aplicación, cómo funciona el pipeline de CI/CD y cómo monitorear la aplicación.

## Entrega

1. Haz un fork del repositorio GitHub actual.
2. Clona el repositorio a tu máquina local.
3. Crea una nueva rama con tu nombre en tu versión local del repositorio, donde podrás almacenar todos los archivos relacionados con el proyecto.
4. Realiza los cambios necesarios y haz commit de tus cambios en tu rama local.
5. Haz push de la rama a tu repositorio GitHub forked.
6. Comparte tu repositorio por correo.
7. Reunión de revisión.
- ~~Desde tu repositorio GitHub, crea un Pull Request dirigido al repositorio original. Asegúrate de seleccionar la rama correcta en la que trabajaste y proporciona una descripción detallada de los cambios y del proyecto~~

### Plazo

Te pedimos que completes el desafío dentro de una semana después de haberlo recibido. Sin embargo, entendemos que puedes tener otras responsabilidades y compromisos. Si necesitas más tiempo, por favor, háznoslo saber.

### Evaluación

Evaluaremos tu desafío basándonos en los siguientes criterios:

- Funcionalidad de la aplicación y del flujo de trabajo de CI/CD
- Cobertura y calidad de las pruebas
- Claridad y utilidad de la documentación
- Elección y uso de herramientas y tecnologías
- Calidad del código

Gracias nuevamente por tu interés en nuestra posición de DevEx. ¡Esperamos ver tu solución al desafío!
