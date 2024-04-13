FROM node:lts

WORKDIR /back

COPY . /back

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]