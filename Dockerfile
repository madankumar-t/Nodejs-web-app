# Use official Node.js LTS image
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application file
COPY . .

# Expose the app port
EXPOSE 3000

# Command to run the app using server.js
CMD ["node", "server.js"]
