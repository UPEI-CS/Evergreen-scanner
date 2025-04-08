# Introduction

## Overview

The Evergreen Scanner is a modern web application designed to streamline library resource management through the Evergreen Integrated Library System (ILS). This technical document provides comprehensive information about the application's architecture, installation,  to help developers, administrators, and library staff effectively use and maintain the system.

Developed using Next.js, this app offers a responsive, user-friendly interface that works across desktop and mobile devices. The application leverages modern web technologies to provide barcode scanning capabilities, secure authentication with Evergreen ILS, and efficient item information retrieval—all within a browser-based environment that eliminates the need for specialized hardware.

## Purpose of This Document

This technical documentation serves multiple purposes:

1. To provide a comprehensive understanding of the Evergreen Scanner application's architecture and components
2. To guide developers through the installation, configuration, and deployment processes
3. To explain the application's features and functionality to end users
4. To document the API and integration points for developers extending or maintaining the system
5. To offer troubleshooting guidance and best practices for optimal system performance

Whether you're developing new features, or troubleshooting issues, this document aims to be your definitive resource for technical information about the system.

## Target Audience

This documentation is designed for several audiences the main ones being:

### Developers

Software developers who need to:
- Understand the codebase architecture and organization
- Extend or modify the application's functionality
- Troubleshoot code-level issues


### System Administrators

IT professionals responsible for:
- Installing and configuring the Evergreen Scanner
- Deploying the application in various environments

System administrators should focus on the Installation/Setup Instructions


## Key Features of Evergreen Scanner

The Evergreen Scanner application offers several key features that make it a valuable tool for library resource management:

1. **Modern Web-Based Interface**: A responsive, intuitive UI built with Tailwind CSS that works across devices and screen sizes.

2. **Secure Authentication**: Integration with Evergreen ILS authentication system to ensure secure access to library resources.

3. **Barcode Scanning Capabilities**: Browser-based barcode scanning using device cameras, eliminating the need for dedicated scanning hardware.

4. **Item Information Retrieval**: Quick access to comprehensive information about library items through the Evergreen ILS.

5. **Type-Safe Evergreen Client**: A TypeScript client for Evergreen ILS interaction with full type support and a fluent API for operations.

6. **Dark/Light Mode Support**: Accessibility-friendly interface with theme options to accommodate different user preferences and environments.


# System Overview

## Architecture Overview

The Application is built on a modern web application architecture using Next.js as its foundation. This section provides a comprehensive overview of the application's architecture, key components, and how they interact to deliver the functionality required for library resource management.

### High-Level Architecture

Evergreen Scanner follows a client-server architecture with a clear separation of concerns:

1. **Frontend Layer**: A Next.js application providing the user interface and client-side functionality
2. **API Layer**: An authentication endpoint that handles
3. **Integration Layer**: A custom TypeScript client that interfaces with the Evergreen ILS
4. **External System**: The Evergreen ILS which serves as the data source and authentication provider

This architecture enables the application to provide a responsive, browser-based interface while maintaining secure communication with the Evergreen ILS backend system.

### Next.js Framework Foundation

The application leverages Next.js 15.2.4 (app router), a React framework that provides several important capabilities:

1. **Server-Side Rendering (SSR)**: delivers fully rendered pages to the client before JavaScript hydration, improving initial load performance and SEO
2. **API Routes**: Enables the creation of serverless API endpoints within the application
3. **File-Based Routing**: Creates routes automatically based on the file structure in the app directory, where each file corresponds to a route without requiring manual route configuration
4. **TypeScript Support**: Ensures type safety throughout the application

Next.js serves as the foundation for both the user interface and the server-side components, providing a unified development experience.

## Component Structure

The application follows a well-organized component structure that separates concerns and promotes maintainability:

### Directory Organization

```
upei-cs-evergreen-scanner/
├── app/                      # Next.js application routes and pages
│   ├── (protected)/          # Protected routes requiring authentication
│   ├── api/                  # API routes for server-side operations
│   └── login/                # Authentication pages
├── components/               # React components
│   ├── custom/               # Application-specific components
│   └── ui/                   # Reusable UI components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions and libraries
│   └── eg-client/            # Evergreen ILS TypeScript client
└── types/                    # TypeScript type definitions
```

This organization follows modern React and Next.js best practices, with clear separation between application logic, UI components, and external integrations.

### Key Components

#### Protected Routes (`app/(protected)/`)

The protected routes implement a secure area of the application that requires authentication:

1. **Layout Component**: Provides consistent navigation and structure for authenticated users
2. **Root Page**: The main interface after authentication
3. **Item Detail Pages**: Dynamic routes for viewing specific items by barcode

These routes use Next.js middleware for authentication verification, ensuring that only authenticated users can access protected content.

### Middleware

The middleware plays an important role in session handling for protected routes. It ensures that only authenticated users can access certain parts of the application and handles session timeout management.

**Key Responsibilities:**

1. **Authentication Check**: 
   - The middleware checks for the presence of an `EG_AUTH_TOKEN` and `EG_SERVER` cookie.
   - If either is missing and the user is not on the `/login` page, the middleware redirects the user to the login page.

2. **Session Management**:
   - If the user is authenticated and attempts to access the `/login` page, the middleware resets the session timeout using the `resetTimeout` method from the `HttpTranslator` client.
   - If the session reset fails, the user is redirected to the login page, and the authentication token is deleted.

3. **Route Protection**:
   - For authenticated users accessing routes other than `/login`, the middleware ensures the session is active by resetting the session timeout.
   - If successful, it updates the `EG_AUTH_TOKEN` cookie with a new expiration time.

4. **Configuration**:
   - The middleware is configured to match all routes except for API routes, static files, and the favicon.

This middleware ensures that users have a seamless experience by maintaining active sessions and redirecting unauthenticated users to the login page as needed.

#### API Routes (`app/api/`)

The application currently implements a single API route at `app/api/login`. This endpoint uses the TypeScript client to authenticate users and establish sessions by setting the appropriate authentication token. The route handles all login-related functionality, including credential validation and secure token management.


#### Custom Components (`components/custom/`)

Application-specific components that implement core functionality:

1. **Barcode Scanner** (`barcode-scanner.tsx`): Integrates with device cameras using Quagga2 for real-time barcode scanning and detection.

2. **Item Display** (`item-display.tsx`): Complex component for displaying and managing library item information, with state management handled by a dedicated reducer (`item-display-reducer.ts`).

3. **Login Form** (`login-form.tsx`): Handles user credential collection and authentication with form validation using zod schema.

4. **Settings** (`settings.tsx`): Manages application configuration including theme preferences and scanner settings.

5. **Navbar** (`navbar.tsx`): Layout component providing navigation and application-wide controls in the header.

6. **EG Server Input** (`eg-server-input.tsx`): Manages Evergreen server connection with URL validation and connection state management.

7. **Logout Button** (`logout-button.tsx`): Handles user session termination and cleanup.

These components encapsulate the primary user interactions and business logic of the application, each focusing on a specific aspect of the system.

#### UI Components (`components/ui/`)

Reusable UI components based on the [shadcn/ui](https://ui.shadcn.com/) library, which provides a collection of beautifully designed, accessible components built with Tailwind CSS and Radix UI primitives. These components include buttons, forms, dialogs, popovers, and other common UI elements.
## Authentication Flow

The authentication process in Evergreen Scanner follows a two-step process involving server connection and user authentication:

### Step 1: Server Connection

The first step requires users to connect to a valid Evergreen ILS server using the `EgServerInput` component:

1. **Server URL Entry**: User enters the Evergreen server URL (e.g., "https://your-eg-server.com")
2. **URL Validation**: Client-side validation ensures a valid URL format
3. **Server Verification**: The `validateServer` action tests the server connection
4. **Connection State**:
   - On success: Server URL is saved, input is disabled, "Disconnect" option appears
   - On failure: Error displayed. Note: HTTPS with self-signed certs not supported - use HTTP instead.
5. **Server Management**: Users can disconnect and switch servers using the "Disconnect" button

### Step 2: User Authentication

Only after establishing a valid server connection, users can proceed with authentication via the `LoginForm` component:

1. **User Initiates Login**: User enters credentials in the login form
2. **Client-Side Validation**: Basic validation of input format
3. **API Request**: Credentials sent to the `/api/login` endpoint
4. **Server Authentication**: The API route communicates with Evergreen ILS via the client
5. **Token Generation**: Upon successful authentication, Evergreen ILS returns an auth token
6. **Session Creation**: The token is stored in an HTTP-only cookie for security
7. **Redirection**: User is redirected to the protected dashboard

### Component Interaction

The authentication flow is managed by two key components:

1. **EgServerInput (`components/custom/eg-server-input.tsx`)**:
   - Manages server connection state
   - Provides URL validation and verification
   - Enables server switching functionality
   - Must have valid connection before login is possible

2. **LoginForm (`components/custom/login-form.tsx`)**:
   - Handles user credential collection and validation
   - Manages authentication state and feedback
   - Depends on valid server connection from EgServerInput

This two-step process ensures:
- Explicit server selection for multi-server environments
- Early validation of server connectivity
- Clean separation between server connection and user authentication
- Ability to switch between different Evergreen ILS servers

## Circulation Workflow

This section outlines the user journey from scanning an item to performing circulation actions.

### Workflow Overview

The circulation process follows a sequential flow:

1. **Item Scanning**: User scans inputs item barcode
   - Camera-based scanning with confirmation step to verify decoded barcodes
   - Manual entry option for situations where scanning is impractical or unreliable
2. **Item Information Display**: System retrieves and displays comprehensive item details
3. **Action Selection**: User selects from available circulation actions
4. **Action Confirmation**: User reviews and confirms the selected action
5. **Action Execution**: System performs the requested operation via Evergreen ILS
6. **Result Notification**: User receives confirmation of success or failure


### Step 1: Item Scanning

The scanning process begins on the main protected page (`app/(protected)/page.tsx`), which presents a barcode scanner interface:

```jsx
export default function ScanPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex items-center justify-center w-full max-w-md">
        <BarcodeScanner/>
      </div>
    </div>
  );
}
```

The `BarcodeScanner` component:
- Accesses the device camera using browser APIs
- Processes video frames to detect barcodes using Quagga2
- Redirects to the item detail page when a valid barcode is detected

### Step 2: Item Information Retrieval

When a barcode is successfully scanned, the application navigates to a dynamic route (`app/(protected)/[barcode]/page.tsx`) that:

1. Extracts the barcode from the URL parameters
2. Verifies user authentication via cookies
3. Fetches comprehensive item information using the Evergreen client:
   ```typescript
   const { data: dataArray, error } = await client
     .pcrud(authToken)
     .from("acp")
     .where({ barcode: itemBarcode })
     .flesh(3)
     .fleshFields({
       acp: ["location", "status", "call_number", "circ_lib", "latest_inventory"],
       acn: ["record"],
       bre: ["simple_record"],
     })
     .select();
   ```
4. Retrieves additional information like in-house use count
5. Constructs a `LibraryItem` object with all relevant details
6. Passes the item information to the `ItemDisplay` component

### Step 3: Action Selection and Execution

The `ItemDisplay` component (`components/custom/item-display.tsx`) implements a multi-step interface using a reducer pattern to manage state transitions:

1. **Initial Item Display** (Step 1):
   - Shows comprehensive item information (title, barcode, call number, status, etc.)
   - Provides options to scan a new item or proceed to actions

2. **Action Selection** (Step 2):
   - Presents available actions based on user settings and item status
   - Available actions may include:
     - Record in-house use
     - Update inventory date/time
     - Change item status
     - Check in item (if currently checked out)

3. **Action-Specific Forms** (Steps 3-6):
   - Each action has a dedicated form showing current and new values
   - Provides clear feedback about what will change
   - Includes confirmation and back options

4. **Action Execution**:
   - When confirmed, actions are executed via the `updateItem` server action
   - The component shows loading state during processing
   - Success/failure notifications are displayed using toast messages

### Configuration and Customization

The circulation workflow is customizable through application settings:

1. **Feature Toggles**: Administrators can enable/disable specific circulation actions:
   - In-house use recording
   - Inventory date updating
   - Check-in functionality
   - Status changes

2. **Status Change Permissions**: Specific item statuses can be enabled/disabled for changes

3. **UI Adaptability**: The interface adapts to show only enabled actions, providing a streamlined experience based on configuration



## Evergreen ILS Integration

The integration with Evergreen ILS is a core aspect of the application's architecture the  TypeScript client (`lib/eg-client/`) provides a type-safe interface to the Evergreen ILS. The client follows a service-based architecture that mirrors the Evergreen ILS service structure:

```
lib/eg-client/
├── src/
│   ├── adapters/
│   │   ├── http-translator.ts    # HTTP Translator adapter
│   │   └── index.ts              # Adapter exports
│   ├── services/
│   │   ├── auth.ts               # Authentication service
│   │   ├── circ.ts               # Circulation service
│   │   ├── health.ts             # Health check service
│   │   ├── idl.ts                # IDL schema service
│   │   ├── index.ts              # Service exports
│   │   └── pcrud.ts              # PCRUD (database) service
│   └── types/
│       ├── auth.ts               # Auth service types
│       ├── circ.ts               # Circulation types
│       ├── idl-types-metadata.ts # Type generation metadata
│       ├── index.ts              # Type exports
│       ├── osrf.ts               # OpenSRF protocol types
│       ├── pcrud.ts              # PCRUD types
│       └── generated/
│           ├── idl-definitions.json # Generated IDL schema
│           └── idl-types.ts         # Generated TypeScript types
```

#### Adapter Layer

The adapter layer currently consists of a single implementation:

**HttpTranslator Adapter**
- Implements the OpenSRF-over-HTTP protocol using Evergreen's [HTTP Translator](https://docs.evergreen-ils.org/docs/latest/integrations/web_services.html#_http_translator) component
- Serves as a bridge between HTTP clients and OpenSRF services
- Handles all communication between the client application and Evergreen ILS servers

**Note:** The [OpenSRF Gateway](https://wiki.evergreen-ils.org/doku.php?id=osrfhttp:opensrf_gateway) (`osrf-gateway-v1`) can also be implemented as an alternative adapter by implementing the `IAdapter` interface in `types/osrf.ts`. T

#### Service Layer

The client implements several services:

1. **Authentication Service** (`AuthService`):
   - Handles user login with credential validation
   - Manages session operations (retrieve, delete, reset timeout)
   - Provides type-safe session information access
   - Implements secure token management

2. **PCRUD Service** (`PCrudService`):
   - Implements a fluent interface for database operations
   - Provides type-safe querying with method chaining
   - Supports atomic operations and ID list retrieval
   - Automatically transforms results into typed objects

3. **Circulation Service** (`CircService`):
   - Manages library circulation operations
   - Implements check-in/check-out functionality
   - Handles in-house use recording
   - Provides item status management
   - Supports inventory updates

4. **Health Service** (`HealthService`):
   - Provides a ping method to check if the Evergreen server is operational
   - Verifies connectivity with the Evergreen ILS
   - Useful for testing server availability before performing operations

5. **IDL Service** (`IdlService`):
   - Manages the Interface Definition Language schema
   - Provides type generation from Evergreen's database schema
   - Ensures type safety across all database operations

#### Type Safety and IDL Implementation

The type safety in the Evergreen client is primarily implemented through the IDL (Interface Definition Language) system, which provides runtime type checking and object mapping:

##### IDL Service Implementation

The `IdlService` class (`lib/eg-client/src/services/idl.ts`) is the foundation for the client's type safety:

1. **Object Creation and Mapping**:
   ```typescript
   class IdlService {
     create<T extends IdlObject>(className: IdlClassName, seed?: any[]): T
     fromHash<T extends IdlObject>(className: IdlClassName, hash: Record<string, any>): T
     toHash(obj: IdlObject): Record<string, any>
   }
   ```

2. **Dynamic Property Generation**:
   - Creates getter/setter methods for each field in an Evergreen class
   - Maintains the Fieldmapper pattern used by Evergreen
   - Preserves type information through TypeScript generics

3. **OSRF Object Processing**:
   - Handles nested OpenSRF objects automatically
   - Recursively processes arrays and nested structures
   - Maintains proper typing throughout object transformations

##### Type Generation Process

1. **IDL Definitions**:
   - Generated from Evergreen's database schema
   - Stored in `types/generated/idl-types.ts`
   - Provides TypeScript interfaces for all Evergreen classes

2. **Field Mapping**:
   ```typescript
   // Example of generated field mapping
   export interface ACP extends IdlObject {
    age_protect(): CRAHP | null;
    age_protect(value: CRAHP | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    call_number(): ACN | null; // references returns ACN class
    call_number(value: ACN | null): void;
   ```
   

3. **Return Types and Error Handling**

The type system implements a comprehensive approach to handling both successful responses and errors from the Evergreen ILS:

a. **Service Results**
```typescript
export interface ServiceResult<T = any, E = any> {
  data: T | null;
  error: E | null;
}
```
All service methods return a `ServiceResult` type that encapsulates either successful data or an error message, ensuring type safety throughout the response handling process.

b. **OSRF Message Structure**
```typescript
export type OSRFMessage<T> = {
  __c: 'osrfMessage';
  __p: MessageFields & {
    payload: T;
  };
}
```
Messages from the Evergreen ILS are wrapped in an `OSRFMessage` type that includes metadata about the response and its payload.

c. **Response Status Types**
- `OSRFResult<T>`: Successful responses with typed content
- `OSRFConnectStatus`: Connection status messages
- `OSRFMethodException`: Method execution errors
- `OSRFStatusCode`: Typed status codes ('200', '205', '404', '500')

d. **Type Guards and Narrowing**
The type system includes built-in type guards for response handling:
```typescript
if (response.length === 1) {
  const result = response[0] as OSRFMessage<
    OSRFConnectStatus | OSRFMethodException
  >;
  return {
    data: null,
    error: result.__p.payload.__p.status,
  };
}
```

e. **Generic Type Parameters**
Services use generic type parameters for flexible response typing:
```typescript
async retrieve<T extends boolean>(
  params: AuthParams & { returnTime: T }
): Promise<
  ServiceResult<
    T extends true ? { authtime: number; userobj: AU } : AU,
    string
  >
>
```
This allows for conditional return types based on input parameters while maintaining type safety.

f. **Error Propagation**
Errors are strongly typed and propagated through the type system:
- Network errors are captured as string messages
- Service-specific errors maintain their original structure
- Type conversion errors are caught during the mapping process


## A Candid Note on Implementation

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

# Installation and Setup Instructions

This section provides detailed instructions for installing, configuring, and setting up the Evergreen Scanner application. Following these steps will ensure a proper installation for development, testing, or production use.

## Prerequisites

Before installing the Evergreen Scanner, ensure your environment meets the following requirements:

### System Requirements

- **Operating System**: Any OS that supports Node.js (Windows, macOS, Linux)
- **Memory**: Minimum 2GB RAM (4GB recommended)
- **Disk Space**: At least 1GB of free disk space

### Software Requirements

- **Node.js**: LTS version (16.x or later) recommended
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation with `node --version`

- **npm**: Version 7.x or later (included with Node.js)
  - Verify installation with `npm --version`

- **Git**: For cloning the repository
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation with `git --version`

### Evergreen ILS Access

- Access to an Evergreen ILS instance
- Staff account credentials with appropriate permissions
- Evergreen server URL (e.g., `https://your-evergreen-instance.com`)

## Installation Steps

Follow these step-by-step instructions to install the Evergreen Scanner application:

### 1. Clone the Repository

```bash
git clone https://github.com/upei-cs/evergreen-scanner.git
cd evergreen-scanner
```

> **Note**: you can also download the zip from the repo

### 2. Install Dependencies

```bash
npm install
```

This command installs all required dependencies defined in the `package.json` file, including:
- Next.js framework
- React and React DOM
- TypeScript
- Tailwind CSS
- Radix UI components
- Quagga2 barcode scanning library
- Other utility libraries

The installation process may take several minutes depending on your internet connection and system performance.


### 3. Generate Evergreen Client Types (Optional)

To ensure type safety when interacting with the Evergreen ILS, generate the TypeScript type definitions:

```bash
npm run generate-types
```

This command:
1. Connects to the Evergreen ILS instance specified in your environment
2. Retrieves the IDL (Interface Definition Language) schema
3. Generates TypeScript interfaces based on the schema
4. Saves the generated types in `lib/eg-client/src/types/generated/`

> **Important**: This step requires access to an Evergreen ILS instance. If you don't have access during installation, you can perform this step later when you have the connection details.

### 4. Development Server

Start the development server to run the application locally:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

The development server provides:
- Hot module replacement for instant updates
- Error reporting in the browser
- Source maps for debugging

### 5. Production Build

To build the application:

```bash
npm run build
```

This command:
- Compiles the application with production optimizations
- Generates static HTML files where possible
- Optimizes JavaScript and CSS assets
- Creates a production-ready build in the `.next` directory

### 6. Production Deployment

## Deployment

This application can be deployed using either Docker or traditional Next.js deployment methods.

### Docker Deployment

Docker provides an isolated, consistent environment for running the application across different platforms.

#### Prerequisites
- Docker installed on your system
- Docker Compose (optional, for multi-container deployments)

#### Steps

1. in the root of the project Build the Docker image by running:
```bash
docker build -t your-tag .
```

2. Run the container:
```bash
docker run -p 80:3000 image-name
```

This maps port 80 on the host to port 3000 in the container, where the application is running.
3. Using Docker Compose (optional):
   
   Create a `docker-compose.yml` file:
   ```yaml
   version: '3'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       
   ```

   Then run:
   ```bash
   docker-compose up
   ```

### Traditional Next.js Deployment

#### Standard Build

The standard build process creates optimized production assets in the `.next` directory. in the root of the project:

1. Build the application by running:
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

4. Copy static assets to the standalone directory:

   a. Copy public assets (images, fonts, etc.):
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

```bash
# For Linux/macOS
PORT=8080 HOSTNAME=0.0.0.0 npm start
PORT=8080 HOSTNAME=0.0.0.0 node .next/standalone/server.js  # For standalone builds

# For Windows Command Prompt
set PORT=8080 && set HOSTNAME=0.0.0.0 && npm start
set PORT=8080 && node .next/standalone/server.js  # For standalone builds

# For Windows PowerShell
$env:PORT=8080; $env:HOSTNAME="0.0.0.0"; npm start
$env:PORT=8080; $env:HOSTNAME="0.0.0.0"; node .next/standalone/server.js  # For standalone builds

```

## Configuration Options

### Server URL Configuration

The Evergreen Scanner provides two methods for configuring the Evergreen server URL:

#### Method 1: User Interface Configuration

1. Launch the application
2. Navigate to the settings page
3. Enter the Evergreen server URL in the provided input field
4. Click "Connect" to validate and save the URL
5. The URL will be stored as a cookie for future sessions

This is the recommended approach for most users as it allows for flexible configuration without modifying code or environment variables.

#### Method 2: Environment Variable Configuration

For deployments where the server URL should be fixed:

1. Set the `EG_BASE_URL` environment variable in the `.env` file or deployment environment
2. Modify the application code to use this environment variable instead of the cookie-based approach

Example modification in `components/custom/eg-server-input.tsx`:

```typescript
// Replace cookie-based URL with environment variable
const serverUrl = process.env.EG_BASE_URL || '';
```

### Authentication Configuration

The application currently supports staff login authentication with Evergreen ILS. Configuration options include:

1. **Login Type**: Currently fixed to "staff" login
2. **Session Duration**: Controlled by Evergreen ILS settings
3. **Credentials Storage**: No credentials are stored; session tokens are kept in HTTP-only cookies

### Application Settings

User-configurable settings are managed through the Settings component:

1. **Theme Preferences**: Toggle between light and dark mode
2. **Scanner Settings**: Configure barcode scanner behavior
   - Camera selection
   - Scanning frequency
   - Recognition sensitivity

These settings are stored in the browser's local storage and persist across sessions.

## Verification

After installation, verify that the application is working correctly:

1. Access the application in a web browser
2. Navigate to the login page
3. Enter the Evergreen server URL (if not pre-configured)
4. Log in with valid Evergreen staff credentials
5. Verify that the dashboard (root page) loads correctly
6. Test the barcode scanning functionality (if a camera is available)

## Troubleshooting Installation Issues

### Common Installation Problems

#### Node.js Version Compatibility

**Issue**: Installation fails due to Node.js version incompatibility.
**Solution**: Ensure you're using an LTS version of Node.js (16.x or later).

#### Package Installation Errors

**Issue**: `npm install` fails with dependency conflicts.
**Solution**: Clear npm cache and retry:
```bash
npm cache clean --force
npm install
```

#### Type Generation Failures

**Issue**: The `generate-types` script fails to connect to Evergreen ILS.
**Solution**: 
- Verify the Evergreen server URL is correct
- Ensure the server is accessible from your network
- Check that the Evergreen ILS API is functioning correctly

#### Port Conflicts

**Issue**: The application fails to start because port 3000 is already in use.
use the PORT environment variable:
```bash
PORT=3001 npm run dev
```

# Testing

Testing was a critical part of this project to ensure that all interactions with the Evergreen backend are handled correctly, edge cases are accounted for, and user actions result in predictable system behavior. The project uses Vitest, a modern JavaScript testing framework, to perform unit and integration-level testing across service modules.

## Test Plan

The goal of the testing plan was to validate the core logic of service functions, particularly those that interact with Evergreen's API (e.g., authentication, circulation, PCrud operations). The focus was placed on:

1. Verifying the correctness of request formatting
2. Ensuring expected handling of typical and malformed responses
3. Testing internal logic and utility transformations (e.g., IDL object conversions)
4. Simulating user interaction workflows, such as scanning and updating book data

Testing was divided into:

- **Unit tests**: Isolated logic testing for methods like `AuthService.login()` and `CircService.checkIn()`
- **Mock-based service tests**: Simulated adapter responses to validate backend integration logic
- **Edge case coverage**: Testing how the system reacts to failures, empty responses, or missing data

## Test Cases

The following test categories were implemented using Vitest:

### AuthService
- Login with valid credentials returns token
- Invalid login returns error
- Empty/malformed response is handled gracefully
- Provisional login is accepted as valid

### CircService
- Check-in operation succeeds or fails based on backend response
- In-house use creation returns expected result or error
- Item status marking handles success/failure flags
- Inventory updates support list-based ID operations

### PCrudService
- Select operation maps to correct IDL objects
- Handles IDL list flag correctly
- Fails gracefully on malformed backend data
- Generates dynamic method names using model class

### IdlService
- Creates objects from seed arrays or hashes
- Converts IDL objects to plain hashes
- Handles nested objects and arrays recursively
- Gracefully handles missing seeds or partial data

Each test isolates service logic from UI elements, using mock functions (`vi.fn()` and `vi.spyOn()`) to simulate realistic backend responses from Evergreen.

## Test Results

All tests were executed using `npm run test` and passed in a consistent development environment using Node.js v20 and Vitest.

Summary:
- 100% of core service functions were tested
- All high-priority edge cases covered (empty, malformed, unauthorized responses)
- Test coverage achieved across all Evergreen service integration points
- No critical regressions detected during testing cycles

Vitest's fast feedback loop and isolated mocks allowed efficient development and continuous validation during the project.

Future improvements may include:
- More End-to-end testing with a live Evergreen test server
- Code coverage reporting for long-term maintainability

## Additional Notes

While the application is stable and functional, a few known limitations are noted in this version:

- **No Offline Mode**: The app currently requires a stable connection to the Evergreen server; offline fallback is not yet supported.

- **Barcode Scanner Compatibility**: Mobile camera scanning can be hit-or-miss, especially in bad lighting conditions. Users should verify scanned barcodes as the scanner may occasionally misinterpret codes or detect incorrect barcodes in the camera's field of view.


These issues are under consideration for future updates and will be addressed based on user feedback and deployment testing.

# Troubleshooting

This section provides solutions to common issues you might encounter when using the Evergreen Scanner application.

## Common Runtime Issues

### Camera Access Problems

**Issue**: Unable to access device camera for barcode scanning.
**Solution**: 
- Ensure your browser has permission to access the camera
- Try using a different browser if problems persist
- Check that no other applications are currently using the camera

### Authentication Failures

**Issue**: Unable to log in despite correct credentials.
**Solution**:
- Verify the Evergreen server URL is correct
- Ensure your account has the necessary permissions
- Check if your Evergreen session has expired on the server side
- Try clearing browser cookies and cache

### Barcode Scanning Issues

**Issue**: Scanner fails to detect or incorrectly reads barcodes.
**Solution**:
- Ensure adequate lighting conditions
- Hold the barcode steady and centered in the camera view
- Try adjusting the distance between the camera and barcode
- Consider using manual entry for problematic barcodes


# Appendix

## Glossary of Terms

- **Evergreen ILS**: Integrated Library System, an open-source library management software
- **OpenSRF**: Open Scalable Request Framework (OpenSRF), pronounced "open surf" is a message routing network, built on XMPP
- **PCRUD**: Permissioned Create, Read, Update, Delete - Evergreen's database access service
- **IDL**: Interface Definition Language, defines the structure of Evergreen's database objects
- **Next.js**: A React framework that enables server-side rendering and static web application generation.
- **Quagga2**: A barcode-scanning library that uses the device camera to detect and decode barcodes.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without leaving your HTML.
- **Radix UI**: A library of accessible, unstyled components and primitives for building high-quality design systems and web apps.
- **HTTP Translator**: A component of Evergreen ILS that allows communication between HTTP clients and OpenSRF services.
- **Docker**: A platform for developing, shipping, and running applications in containers, which are lightweight, standalone, and executable software packages.
- **Vitest**: A modern JavaScript testing framework used for unit and integration testing.