# openzeppelin-mcp
 A MCP server for using OpenZeppelin products. 

## Usage

// TODO Add configurations explain how can be used 

## Local Development

### Prerequisites
   - Node.js v22.x
   - Bun
   - Git

### Run locally

1. Clone the repository:
```bash
git clone https://github.com/openzeppelin/openzeppelin-mcp.git
cd openzeppelin-mcp
```

2. Install dependencies:
```bash
bun install
```

3. Start development server:
```bash
bun run dev
```

## Production Build

// TODO Add production bundle commands
### Bundle and run server

1. Build production bundle:

```bash
bun run build
```

2. Start production server:

```bash
bun run start
```

### Docker

1. Build image:

```bash
docker build -t openzeppelin-mcp .
```

2. Run container:

```bash
docker run -it -p 3000:3000 openzeppelin-mcp
```
