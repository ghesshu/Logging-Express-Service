# Logging Service

A logging service built with MongoDB that records and validates log entries. The service uses an API key to authenticate requests and can be integrated into a microservices architecture or adapted for monolithic systems.

## Requirements

The service requires the following environment variables:

- `PORT`: The port number on which the logging service will run.
- `DB_URI`: The MongoDB URI to connect to the database.
- `DB_NAME`: The name of the database used by the service.
- `SHARED_TOKEN`: An API key used to authenticate requests to the service.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the necessary environment variables:
   ```env
   PORT=<your-port>
   DB_URI=<your-mongodb-uri>
   DB_NAME=<your-database-name>
   SHARED_TOKEN=<your-api-key>
   ```

4. Start the service:
   ```bash
   npm start
   ```

## How It Works

This logging service is designed to log entries based on requests received. It authenticates the request using the `SHARED_TOKEN` (API key) sent with the request headers. If the token matches the one provided in the `.env` file, the request is authenticated and processed.

The service is intended to work in a microservices architecture but can also be adapted for monolithic systems.

### Logging Flow

1. A request is made to the logging service with the `SHARED_TOKEN` in the request header.
2. The service verifies that the provided token matches the value stored in the `.env` file.
3. If the token is valid, the service logs the entry to the MongoDB database.
4. If the token is invalid, the service returns an authentication error.

## Customization

You can adjust the service to fit your specific architecture needs:
- **Monolithic System**: Integrate the service directly into your application.
- **Microservices Architecture**: Adjust endpoints and communication methods for your specific microservice setup.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

