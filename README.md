
# Eric Fiegehen Dev EX Challenge

Items creados en AWS en us-east-2

Recursos en AWS
-
ECR generado en la consola de administracion
EKS generado con eksctl
 -> eksctl create cluster --spot --instance-types=t3.small,t3.medium

La idea es poder generar un cluster utilizando spot instances para disminuir el valor del billing.

Se genera un usuario IAM llamado pipeline para ser utilizado en el Proceso CI/CD

Se agrega usuario IAM para administración del EKS

El pipeline consta de 3 pasos

CI -> Test de 2 pruebas unitarias
-
Esta pequeña app consiste en 2 endpoints

/ (raiz)

/earth 

Las pryebas unitarias constan de verificar si la app responde correctamente un HTTP GET en los endpoints mencionados anteriormente.

Docker build y push al ECR
-
CD : Deploy en EKS editando un simple archivo deployment.yaml

Endpoints
-
Puede consumir la app en la siguiente URL 

http://a5975ac8bdeed4125be05160dbae291b-1652162827.us-east-2.elb.amazonaws.com

http://a5975ac8bdeed4125be05160dbae291b-1652162827.us-east-2.elb.amazonaws.com/earth

Monitoreo
-
Se instalo el agente de cloudwatch en el cluster siguiendo la documentación oficial de AWS
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-logs-FluentBit.html#Container-Insights-FluentBit-setup 

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html

Mejoras a futuro
- 
Agregar Lint al código y validación de dependencias.

Monitoreo mas preciso de los recursos, esto enfocado en optimizar costos de cloudwatch.

Realizar un CD mas inteligente a la hora de seleccionar una estrategia de release.