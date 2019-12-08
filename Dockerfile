# what the parent image should be
# node 9.4.0
FROM node:alpine

# create a directory for our app
RUN mkdir -p /usr/src/app
# switch the working directory
WORKDIR /usr/src/app

# copy package.json and get all the
# dependencies
COPY package.json /usr/src/app 

RUN npm install

# copy the application files
# everything except that is ignored in the
# docker ignore file
COPY . /usr/src/app

# default express port
EXPOSE 3000

# start the application
CMD [ "npm", "start" ]

