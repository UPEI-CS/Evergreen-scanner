# Evergreen Scanner

A Next.js-based web application for scanning and managing library resources using the Evergreen ILS (Integrated Library System).

## Features

- 📱 Modern web-based interface
- 🔒 Secure authentication with Evergreen ILS
- 📷 Barcode scanning capabilities
- 📖 Item information retrieval
- 🎨 Responsive UI with Tailwind CSS
- 🌙 Dark/Light mode support
- 🔄 Type-safe Evergreen client

## Prerequisites

- Node.js (LTS version recommended)
- npm package manager
- Access to an Evergreen ILS instance

## Project Structure

The project is organized into several key components:

### Protected Routes (`app/(protected)/`)
- Secure routes that require authentication
- Protected layout with navigation
- Book management interfaces

### API Routes (`app/api/`)
- Authentication endpoints
- Secure communication with Evergreen ILS

### Evergreen Client (`lib/eg-client/`)
- TypeScript client for Evergreen ILS interaction
- Features:
  - Full TypeScript support with generated IDL types
  - Fluent API for PCRUD, CIRC and AUTH operations
  - Modular service-based architecture
  - Complex query support with relationship traversal

**Implementation Note:**
The TypeScript client was developed through reverse engineering of the Evergreen ILS API, with several key architectural decisions and challenges shaping its current form:

1. **Service-Method Pattern Influence**: 
   - OpenSRF's architecture is built around services (e.g., `open-ils.pcrud`, `open-ils.auth`) that expose methods
   - This naturally led us to adopt a fluent API pattern (e.g., `client.pcrud.from().where().select()`)
   - Initially seemed like an elegant way to mirror the service-method relationship while providing a familiar query interface

2. **framework Challenges**:
   - Limited documentation on expected response structures made type definitions particularly challenging
   - Many assumptions had to be made about response formats, leading to potential edge cases we may not have encountered
   - Type definitions became increasingly complex as we attempted to maintain type safety while handling these variations

3. **Architectural Constraints**:
   - Current implementation couples adapters (like `HttpTranslator`) directly to services
   - A service registry pattern could better decouple adapters from service implementations
   - This would allow for easier addition of new adapters (e.g., `osrf-gateway-v1`) without modifying service code
   - However, restructuring midway through development was risky given we were not entirely sure what new behaviours may arise

4. **Documentation Gaps**:
   - Limited official documentation on OpenSRF's response patterns and edge cases
   - Many implementation decisions were based on observed behavior rather than specification
   - Type definitions and error handling reflect our best understanding of the framework
   - Future opensrf changes might reveal assumptions that don't hold true


## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd evergreen-scanner
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (optional):
```env
EG_BASE_URL=https://your-evergreen-instance.com
```

4. Generate Evergreen client types:
```bash
npm run generate-types
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Using the Evergreen Client

### Authentication

```typescript
import { HttpTranslator } from './lib/eg-client/adapters';

// Initialize client
const client = new HttpTranslator({
  baseUrl: process.env.EG_BASE_URL
});

// Login
const {data, error} = await client.auth.login({
  username: 'your-username',
  password: 'your-password',
  type: 'staff' 
});

// Get session info
const {data: session} = await client.auth.session.retrieve({
  authToken: data.authToken,
});
```

### Querying Items

```typescript
// Example: Get item details by ID
const {data, error} = await client.pcrud(authToken)
  .from("acp")  // Asset Copy
  .where({ id: itemId })
  .flesh(2)  // Depth of related records
  .fleshFields({
    acp: ['location', 'status', "call_number"],
    acn: ['record']
  })
  .select();

if (data) {
  const {
    barcode,
    callnumber,
    title,
    location,
    status
  } = {
    barcode: data.barcode(),
    callnumber: data.call_number()?.label(),
    title: data.call_number()?.record()?.fingerprint(),
    location: data.location()?.name(),
    status: data.status()?.name()
  };
}
```

## Configuration

### Evergreen Server URL

  - The application provides a server input component in the UI
  - Enter your Evergreen server URL and click "Connect"
  - The URL will be validated and stored as a cookie
  - You can disconnect and change the URL at any time

2. **Command Line (For Type Generation)**
   - You can pass the server URL directly when generating types
   - Useful for CI/CD pipelines or initial setup

**Note on Environment Variables:**
While the application currently uses client-side URL configuration, you can modify it to use environment variables instead:
1. Set the `EG_BASE_URL` environment variable with your Evergreen server URL
2. Remove the cookie-based URL checks in the application code
3. pass  the environment variable to the adapter e.g `HttpTranslator` when initializing it

This approach is useful when you want to enforce a specific server URL.

### Client Type Generation
- Run type generation whenever the Evergreen schema changes
- Generated types provide:
  - IDE autocompletion
  - Compile-time type checking
- Types are generated from your Evergreen instance's IDL schema

### Authentication
- Configure authentication settings through the UI
- Supports only staff login
- Ensure proper permissions are set in your Evergreen instance

## Dependencies

### Core Dependencies
- Next.js 15.2.4
- React 19.0.0
- TypeScript 5.7.3

### UI Components
- Radix UI components
- Tailwind CSS
- Lucide React icons

### Scanning
- @ericblade/quagga2

## Deployment

This application can be deployed using either Docker or traditional Next.js deployment methods.

### Docker Deployment

Docker provides an isolated, consistent environment for running the application across different platforms.

#### Prerequisites
- Docker installed on your system
- Docker Compose (optional, for multi-container deployments)

#### Steps

1. Build the Docker image:
```bash
docker build -t your-tag .
```

2. Run the container:
```bash
docker run -p 3000:3000 image-name
```

3. Environment variables (optional):
```bash
docker run -p 3000:3000 -e EG_BASE_URL=https://your-evergreen-instance.com your-tag
```

4. Using Docker Compose (optional):
   
   Create a `docker-compose.yml` file:
   ```yaml
   version: '3'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         - EG_BASE_URL=https://your-evergreen-instance.com
   ```

   Then run:
   ```bash
   docker-compose up
   ```

### Traditional Next.js Deployment

#### Standard Build

The standard build process creates optimized production assets in the `.next` directory:

1. Build the application:
```bash
npm run build
```
2. Start the production server:
```shellscript
npm start
```

This approach requires all dependencies from `node_modules` to be available at runtime i.e the application expects to find all the packages it depends on in the node_modules directory when it runs.

#### Standalone Build

The standalone build creates a self-contained deployment package that includes only the necessary files, making it ideal for containerized deployments and environments where you want to minimize dependencies. 

1. Configure your project for standalone output in `next.config.ts` (already set for this project):


```javascript
module.exports = {
  output: 'standalone'
}
```

2. Build the application:


```shellscript
npm run build
```

3. The standalone output will be available in `.next/standalone`. You can start it directly:


```shellscript
node .next/standalone/server.js
```

4. Copy static assets to the standalone directory:

   a. Copy public assets (images, fonts, etc.) (optionald depends if you have any):
   ```shellscript
   cp -r public .next/standalone/
   ```

   b. Copy compiled JS/CSS assets:
   ```shellscript
   cp -r .next/static .next/standalone/.next/
   ```


Without this step, the application will run but won't have access to any static files or client-side code.

#### Environment Variables

For both build types, you can configure port and hostname settings:

```shellscript
# For standard builds
PORT=8080 HOSTNAME=0.0.0.0 npm start

# For standalone builds
PORT=8080 HOSTNAME=0.0.0.0 node .next/standalone/server.js
```

#### When to Use Each Approach

- **Standard Build**: Best for traditional hosting where you have control over the environment and dependencies.
- **Standalone Build**: Best for Docker containers, serverless deployments, and environments where you want to minimize the deployment size and dependencies. 


The standalone option significantly reduces deployment size by including only the necessary files from `node_modules` that your application actually uses. 

### Fly.io Deployment

This project includes configuration for deploying to Fly.io which we used to stage the app. It is great for quickly testing the application.

1. Install the Fly CLI:
   Follow the instructions at [fly.io/docs/hands-on/install-flyctl/](https://fly.io/docs/hands-on/install-flyctl/)

2. Authenticate with Fly:
```bash
fly auth login
```

3. Deploy the application:
```bash
fly deploy
```

4. Set environment variables (if needed):
```bash
fly secrets set EG_BASE_URL=https://your-evergreen-instance.com
```

### Continuous Deployment

The repository includes GitHub Actions workflows for continuous deployment:

- Pushes to the `main` branch automatically trigger deployment to Fly.io
- The workflow is defined in `.github/workflows/fly-deploy.yml`



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

