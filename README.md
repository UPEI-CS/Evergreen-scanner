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
  - Fluent API for PCRUD operations
  - Modular service-based architecture
  - Complex query support with relationship traversal

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

3. Create a `.env` file in the root directory:
```env
EG_BASE_URL=https://your-evergreen-instance.com
```

4. Generate Evergreen client types:
```bash
cd lib/eg-client
npm install
npm run generate-types
cd ../..
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
  type: 'staff'  // or 'opac' for public catalog access
});

// Get session info
const {data: session} = await client.auth.session.retrieve({
  authToken: data.authToken,
  returnTime: true
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

There are two ways to configure your Evergreen server URL:

1. **Through the UI**
   - The application provides a server input component in the UI
   - Enter your Evergreen server URL and click "Connect"
   - The URL will be validated and stored as a cookie
   - You can disconnect and change the URL at any time

2. **Command Line (For Type Generation)**
   - You can pass the server URL directly when generating types
   - Useful for CI/CD pipelines or initial setup

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


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

