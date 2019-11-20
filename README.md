Building the Docker image: 

`docker image build -t lpp-api-gateway:1.0.0 .`

Running the Docker image:

`docker container run --publish 8000:8080 --detach --name lpp-api-gateway lpp-api-gateway:1.0.0`

Removing the Docker image:

`docker container remove --force lpp-api-gateway`