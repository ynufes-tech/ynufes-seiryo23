DOCKER_TAG := seiryo23
GAR_LOCATION := asia-northeast1-docker.pkg.dev/ynufes-hp-cloudrun/frontend-service/seiryo23

.PHONY: build

build:
	docker build -t $(DOCKER_TAG) .
	docker tag $(DOCKER_TAG):latest $(GAR_LOCATION)

.PHONY: push

push:
	docker push $(GAR_LOCATION)