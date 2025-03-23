# Use the Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 8000

# Start the app
CMD ["node", "app.js"]