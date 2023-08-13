current_dir = $(shell pwd)

include tools/Makefile.container

#@ GENERATE PROTOBUF
.PHONY: gen
gen: gen.ts

# generate image with protobuf tools for codegen
.PHONY: proto-tools
proto-tools: build.proto-tools

#@ CODE QUALITY
.PHONY: lint.js
lint.js:
	@eslint --fix 'src/**/*.ts'

#@ BUILD
export PLATFORMS="linux/arm64"

export VERSION?="v1.0.0"
export IMAGE_NAME?="junter-render-service"

export LOAD_TARGET="docker"
export PUSH_TO_REGISTRY=

.PHONY: build
build:
	@docker buildx build . \
    		--platform $(PLATFORMS) \
    		--tag ghcr.io/$(IMAGE_NAME):$(VERSION) \
    		--tag ghcr.io/$(IMAGE_NAME):latest \
    		-o type=$(LOAD_TARGET) \
    		$(PUSH_TO_REGISTRY)
