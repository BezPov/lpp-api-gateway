### Docker

Building the Docker image: 

`docker image build -t lpp-api-gateway:1.0.0 .`

Running the Docker image:

`docker container run --publish 8000:8080 --detach --name lpp-api-gateway lpp-api-gateway:1.0.0`

Removing the Docker image:

`docker container remove --force lpp-api-gateway`


### Travis CI:

Secrets  were created by encrypting using travis (https://docs.travis-ci.com/user/encryption-keys#usage).
They must be created separately for each repository.

`travis encrypt DOCKER_PASSWORD="<your_password>" --add`

`travis encrypt GOOGLE_INTEGRATION_PASSWORD="<your_password>" --add`

`gpg -c ../google-travis-service-account.json` (encrypts the whole file with a passphrase)