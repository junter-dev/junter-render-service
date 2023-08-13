FROM node:20 AS builder

ENV APP_NAME render-service

WORKDIR /usr/src/${APP_NAME}
COPY --chown=${APP_NAME}:${APP_NAME} . /usr/src/${APP_NAME}

# install all dependencies that required to create js bundle
RUN npm ci \
    --target_arch=x64 \
    --target_platform=linux

RUN npm install -g rollup

RUN rollup -c

# delete node_modules because it contains devDependencies
# that required only for building bundle
RUN rm -rf node_modules

ENV NODE_ENV production

RUN npm ci \
    --omit=dev \
    --target_arch=x64 \
    --target_platform=linux

FROM gcr.io/distroless/nodejs20-debian11

ENV APP_NAME render-service

WORKDIR /usr/src/${APP_NAME}

COPY --from=builder /usr/src/${APP_NAME}/build /usr/src/${APP_NAME}/build
COPY --from=builder /usr/src/${APP_NAME}/node_modules /usr/src/${APP_NAME}/node_modules

EXPOSE 8001

USER nonroot

CMD [ "build/bundle.js" ]
