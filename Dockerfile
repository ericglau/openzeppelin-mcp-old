# Build stage
FROM imbios/bun-node:23-debian AS builder
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app

# Install dependencies
COPY bun.lock package.json ./
RUN bun install

# Build the Next.js app
COPY next-env.d.ts next.config.js tsconfig.json ./
COPY app/ ./app/
COPY public/ ./public/
COPY types/ ./types/
RUN bun run build

# Runtime stage
FROM imbios/bun-node:23-debian AS runner
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/bun.lock ./
COPY --from=builder /app/next.config.js ./

# Install production dependencies
RUN bun install --production

# Start production Next.js server
EXPOSE 3000
CMD ["bun", "run", "start"]