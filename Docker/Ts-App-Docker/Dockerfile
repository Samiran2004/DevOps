#Base image
FROM node:20-alpine3.18

#Set working directory
WORKDIR /app

#Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

#Install dependency
RUN npm install

#Copy rest of the code
COPY . .

EXPOSE 8000 3000 3001

#Run the application
CMD [ "npm", "start" ]