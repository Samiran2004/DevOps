FROM ubuntu:latest

# Set the working directory in the image'
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages
RUN apt-get update && apt-get install -y python3 python3-pip

# Set environment variables
ENV NAME=World

# Run a command
CMD ["python3", "app.py"]