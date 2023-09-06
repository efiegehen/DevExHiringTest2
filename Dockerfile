# Use the minimal alpine image with Node.js 18
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Set the container's listening port (if your app listens on another port, update accordingly)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]