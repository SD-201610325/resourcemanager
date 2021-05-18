FROM node:14-alpine

RUN mkdir -p /resourcemanager
WORKDIR /resourcemanager

COPY . .
RUN npm install -g

EXPOSE 3000

CMD ["npm", "start"]