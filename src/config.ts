export const config = {
    appName: process.env.APP_NAME ?? 'render-service',
    dbURL: process.env.DB_URL,

    httpHost: process.env.HTTP_HOST ?? '127.0.0.1',
    httpPort: parseInt(process.env.HTTP_PORT) ?? 8000,

    gRPCHost: process.env.GRPC_HOST ?? '127.0.0.1',
    gRPCPort: parseInt(process.env.GRPC_PORT) ?? 8001,
    componentUpdateInterval: parseInt(process.env.COMPONENT_PROCESS_INTRVAL) ?? 2000,
}
