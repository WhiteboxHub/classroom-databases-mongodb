
# Use the official MongoDB image
FROM mongo:latest

# Set up the working directory
WORKDIR /app

# Copy the seed JSON file and the initialization script to the container
#COPY students.json /app/students.json
COPY init-mongo.js /docker-entrypoint-initdb.d/init-mongo.js

# Expose MongoDB's default port
EXPOSE 27017
