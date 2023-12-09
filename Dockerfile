FROM node:18-alpine
WORKDIR /code

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --force
COPY . .

CMD ["npm", "run", "build"]
