# Specify a base image
FROM node:14-alpine

WORKDIR /usr/app

# Install some depenendencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]

# use Dockerfile to build image
# > docker build -t kero/simple-web:latest .

# use image to run(create and start) container
# > docker run -p 5001:8080 simple-web