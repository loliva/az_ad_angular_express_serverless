# Azure AD Frontend AngularApp + Backend ExpressApp Lambda Authn

PoC para flujo simple entre aplicaciones registradas sobre plataforma Azure AD

Modificado para utilizar en flujo de autenticación sobre AWS en API Gateway con Lambda functions. (Basado en repositorio https://github.com/shammelburg/azure-ad-angular-express)


![alt text](https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2020/03/22/Secure-API-Gateway-b-Figure-1.png)


# Configuración

Configuración para Angular (frontend/src/environments/environment.ts)
```
azure: {
    tenantId: '${AZURE_TENANT_ID}',
    auth: {
      clientId: '${AZURE_FRONTEND_TENANT_ID}',
      redirectUri: 'http://localhost:4200/'
    }
  },
  api: {
    uri: 'http://localhost:3000',
    scope: ['api://${AZURE_BACKEND_CLIENT_ID}/api-access']
  }
```

Configuración para Serverless


```
stage: ${env:AWS_STAGE} -> stage para despliegue ambiente
region: ${env:AWS_REGION} -> region despliegue Lambda
...
environment:
  AZURE_TENANT_ID: '${env:AZURE_TENANT_ID}'
  AZURE_CLIENT_ID: '${env:AZURE_BACKEND_CLIENT_ID}'
```
