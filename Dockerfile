# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy .env file to the working directory
COPY .env .env

# Expose port 3000 to the outside world
EXPOSE 3000

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]
