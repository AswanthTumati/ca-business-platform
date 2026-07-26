FROM node:22-alpine

WORKDIR /app

# Copy dependency files first for better Docker layer caching
COPY --chown=node:node package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application code with node user ownership
COPY --chown=node:node . .

# Run application as non-root user
USER node

EXPOSE 5000

CMD ["node", "src/server.js"]
