# Use the official Nginx image from the Docker Hub as the base image
FROM nginx:latest

# Maintainer of the Dockerfile (optional)
LABEL maintainer="adarshpandey022@gmail.com"

# Copy your custom Nginx configuration file to the container
# This step is optional and only needed if you have a custom configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy your static website files to the Nginx document root directory
COPY ./html /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
