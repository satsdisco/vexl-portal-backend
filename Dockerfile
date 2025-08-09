FROM node:20-alpine

# Installing libvips-dev for sharp compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /opt/app

# Copy package files
COPY package*.json ./

# Install dependencies
ENV NODE_ENV=production
RUN npm ci --only=production

# Copy application files
COPY . .

# Build admin panel
RUN npm run build

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]