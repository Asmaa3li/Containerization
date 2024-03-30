FROM node:alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["npm" , "run" , "dev"]