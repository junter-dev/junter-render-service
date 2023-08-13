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
