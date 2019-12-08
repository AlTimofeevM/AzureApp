FROM ubuntu:14.04

# Install Node.js
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN export AZURE_SUBSCRIPTION_ID="ad6fe0fd-4790-4699-9dc6-1d1f193f680b"
# Install app dependencies
RUN npm install