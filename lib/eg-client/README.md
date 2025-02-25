# eg-client

A TypeScript client for interacting with Evergreen 

## Prerequisites


### Dependencies
- TypeScript (^5.3.3)
- ts-node (^10.9.2)
- dotenv (^16.4.7)


## Installation

1. within the eg-client directory install the package and its dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your Evergreen instance URL:
```env
EG_BASE_URL=https://your-evergreen-instance.com
```
### interface generation

3. Generate the IDL types:
```bash
npm run generate-types
```

This step is crucial as it:
- Fetches the Evergreen database schema (IDL) from your instance
- Generates TypeScript interfaces for all Evergreen objects
- Enables type safety and autocompletion in your code
- Must be run whenever the Evergreen schema changes

## Usage

### Initialize the Client

```typescript
import { HttpTranslator } from './adapters';

const client = new HttpTranslator({
  baseUrl: process.env.EG_BASE_URL
});
```

### Authentication

```typescript
// Login with credentials
const {data, error} = await client.auth.login({
  username: 'your-username',
  password: 'your-password'
});

if (error) {
  console.error('Login failed:', error);
  
}

const authToken = data.authToken;

// Get session information with timeout
const {data, error} = await client.auth.session.retrieve({
  authToken,
  returnTime: true
});

if (data) {
  const { authtime, userobj } = data;
  console.log('Session timeout:', authtime);
  console.log('User info:', userobj);
}

```

### Using PCRUD Service

```typescript
    //get title, barcode, callnumber, location and status given id or barcode
  const {data, error} = await client.pcrud(authtoken).from("acp").where({
    id: 2502
  }).flesh(2).fleshFields({
    acp: ['location', 'status', "call_number"],
    acn: ['record']
  }).select()
  if (!data || error) {
    return NextResponse.json({error: error}, {status: 500})
  }
  const barcode = data.barcode()
  const callnumber = data.call_number()?.label()
  const title = data.call_number()?.record()?.fingerprint()
  const location = data.location()?.name()
  const status = data.status()?.name()
  
  console.log({title, barcode, callnumber,location, status})
  //{"title":"Title:leconcerto Author:ferchault PartName: PartNumber:","barcode":"CONC40000537","callnumber":"780 B2","location":"Young Adult Fiction","status":"Available"}
```

## Services

The client provides the following core services:

### Auth Service
- Handles authentication with the Evergreen ILS
- Manages authentication tokens
- Provides login/logout functionality
- Session management (retrieve, reset timeout, delete)
- Type-safe responses with error handling

### PCRUD Service
- Permissioned Create, Read, Update, Delete operations
- Search functionality
- Record retrieval and modification

### IDL Service
-  handles the Interface Definition Language (IDL) from evergreen
-  allows the creation of type safe IDL objects from the data returned

