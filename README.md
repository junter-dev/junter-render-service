![logo](logo.svg)
# Junter render service
[![website](https://img.shields.io/badge/website-junter.dev-cb92e5)](https://junter.dev)

![pipeline_status](https://github.com/junter-dev/junter-render-service/actions/workflows/ci.yaml/badge.svg)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
![contributors](https://img.shields.io/badge/contributors-4-yellow)

The Junter Render Service expands the capabilities of the
[Junter library](https://github.com/junter-dev/junter) by introducing a server interface to the library
using the gRPC protocol. This service allows users to interact with the Junter library as if it were a server,
thus enhancing its utility and scope. The service is written in Typescript and is tailored to fit seamlessly
into modern development environments.

### Features
- #### gRPC interface
  Treat the Junter library as a server using the gRPC protocol

- #### Component Registration
  Register components from the Junter library and save them to a database

- #### Database Flexibility
  While MongoDB is the default choice, developers can
  integrate any database using the internal IRepository interface

- #### Monitoring with Prometheus
  Monitor service metrics using Prometheus via the HTTP /metrics endpoint.

- #### Kubernetes-ready
  The service is optimized for deployment in a Kubernetes
  environment. It includes a readiness probe available at the HTTP /ready endpoint,
  and configurations can be made using environment variables.

### How to run the Service
#### Locally
  To run the Junter Render Service locally, follow the steps:
  
  ```shell
  npm install --omit=dev
  export DB_URL=localhost:1234
  tsnode .src/service.ts
  ```

#### Docker
Use the following command

  ```shell
  docker run \
      ghrc.io/junter-dev/junter-render-service:v1.0.0 \
    --env DB_URL=localhost:1234
  ```

### Configuration
Service configuration can be achieved using environment variables:

* ```DB_URL```: (Required) Address of MongoDB.
* ```HTTP_HOST```: HTTP host address (default is 127.0.0.1).
* ```HTTP_PORT```: Port for Prometheus metrics (default is 8000).
* ```GRPC_HOST```: gRPC host address (default is 127.0.0.1).
* ```GRPC_PORT```: gRPC port (default is 8001).
* ```COMPONENT_PROCESS_INTRVAL```: Period of synchronization with the database
  (default is 2000ms)

### Proto contract details
For developers and integrators interested in interfacing with our rendering service,
a comprehensive Proto Contract provides detailed insights into the API’s structure and functionality.

### Accessing the Proto Contract

The Proto Contract for Junter's render service can be accessed and reviewed directly on our GitHub repository.
This contract delineates the service methods, message formats, and the expected interaction patterns.

Proto Contract for [Junter Render Service](https://github.com/junter-dev/render-service/blob/main/api/render/v1/render_service.proto)

### Highlights
* Service Definitions: Gain an understanding of available RPC methods and their specifications.
* Message Structures: Delve into the exact message formats for requests and responses, ensuring seamless integration.
* Documentation Comments: Within the Proto Contract, annotations provide additional context and guidance for each defined method and message type.
* Recommendations for Developers: Before integrating or making API calls to the Junter rendering service, we highly advise thoroughly reviewing this Proto Contract. It is a foundational document that can help preempt potential issues and streamline the integration process.
