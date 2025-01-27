# FireKit Example

This is an example of how to use the FireKit SDK to develop a simple integration for the FireStart Cloud platform.

## Prerequisites

- [FireStart Cloud](https://www.firestart.com/) instance with system access
- [Node.js](https://nodejs.org/en/download/) 20+
- [pnpm](https://pnpm.io/installation)

## Getting Started

1. Clone the repository
2. Run `pnpm install` to install the dependencies
3. Run `pnpm start` to start the development server

## Deployment

1. Build and push the Docker image to a container registry
2. Deploy the Docker image to Kubernetes - there is a sample helm chart in the `chart` directory
3. Update the FireStart Cloud deployment `values.yaml` with the URL of the deployed integration (add service to the `integrations.additionalEndpoints` list)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
