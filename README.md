# docker-test-app
An expressjs test application for Docker and Kubernetes which is intended to debug reverse proxy configurations

## Usage
To use it you have to start it and go to /health. This will send you a simple response.
To experiment you can apply headers in the querystring (json encoded) like IP/health?headers={"name":"test"}.
You can also set the http status code with IP/health?status=500