# Staff Management System - Frontend

A Next.js and TypeScript application for managing staff members across multiple businesses, using a mock API with `json-server`.

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Mock API](#mock-api)
- [Application Features](#application-features)
- [Component Documentation](#component-documentation)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Development Scripts](#development-scripts)

## Project Structure
```
staff-management-system/
├── src/
│   ├── app/                  # Next.js page routes
│   ├── components/           # Reusable UI components
│   ├── context/              # React context providers
│   ├── lib/                  # Utility functions and helpers
│   ├── middleware/           # Next.js middleware
│   ├── types/                # TypeScript type definitions
│   └── api/                  # Mock API data (db.json)
├── public/                   # Static assets
├── package.json
└── README.md

```
## Technologies Used

### Core
- **Next.js 15.2.4** - React framework for server-side rendering
- **TypeScript** - Static typing for JavaScript
- **React 19** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **React Query (TanStack) 5.72.1** - Data fetching and caching
- **React Context** - Global state management

### UI Components
- **React Table (TanStack) 8.21.2** - Data tables
- **React Icons 5.5.0** - Icon library
- **React Toastify 11.0.5** - Notifications

### Forms
- **Formik 2.4.6** - Form management

### API Client
- **Axios 1.8.4** - HTTP requests

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/smyrn96/staff-management-app.git
   cd staff-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the mock API**
   ```bash
   # In a separate terminal
   npx json-server --port 8000 --watch src/api/db.json
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: `http://localhost:3000`
   - Mock API: `http://localhost:8000`

## Mock API

The mock API provides the following endpoints:

### Resources
- `GET /users` - Authentication data
- `GET /business` - Business listings
- `GET /staff` - Staff members

### Sample Data Structure
```json
{
  "users": [
    {
      "id": "1",
      "email": "admin@example.com",
      "password": "password123",
      "role": "admin"
    }
  ],
  "business": [
    {
      "id": "1",
      "name": "The Rusty Spoon",
      "location": "126 Main St, New York",
      "type": "restaurant"
    }
  ],
  "staff": [
    {
      "id": "1",
      "email": "john.doe@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "position": "garden",
      "businessId": "1",
      "phoneNumber": "+1234567890"
    }
  ]
}
```

## Application Features

### Core Functionality
- Staff member management (CRUD operations)
- Business listing management
- User authentication
- Responsive design

### Key Pages
- Dashboard overview
- Staff directory
- Business listings
- Staff detail views
- Forms for adding/editing records

## Component Documentation

### Main Components
1. **StaffTable** - Displays staff members in a sortable/filterable table
2. **BusinessCard** - Presents business information in card format
3. **StaffForm** - Form for adding/editing staff members
4. **AuthProvider** - Handles user authentication state
5. **ToastContainer** - Displays notification messages

### Props and Types
All component props are strictly typed using TypeScript interfaces defined in `src/types/`.

## State Management

### React Query
Used for:
- Data fetching and caching
- Automatic refetching
- Mutation handling

### Context API
Used for:
- Global application state
- User authentication
- Theme management (if applicable)

## API Integration

### API Client
- Configured in `src/lib/apiClient.ts`
- Uses Axios with base URL `http://localhost:8000`

### Example Query
```typescript
import { useQuery } from '@tanstack/react-query';

 const { data: businessData } = useQuery({
    queryKey: [],
    refetchOnMount: "always",
    queryFn: () => api.business.getBusinesses().then((res) => res.data),
});
```

## Development Scripts

- `npm run dev` - Starts Next.js development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint
- `npm run type-check` - Verifies TypeScript types

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

## Known Issues
- Currently no authentication middleware for API endpoints
- Mock API doesn't enforce data relationships
- Limited error handling in forms
```

This documentation provides a comprehensive overview of your Staff Management System. You may want to add specific sections for:
- Detailed component API references
- Screenshots of the UI
- Roadmap for future features
- Contribution guidelines if it's an open-source project

