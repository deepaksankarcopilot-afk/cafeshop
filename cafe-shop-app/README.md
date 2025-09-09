# Cafe Shop Application

## Overview
The Cafe Shop Application is a full-stack solution designed for managing a cafe's operations. It consists of an Angular frontend and a .NET Web API backend, utilizing SQLite as the database. The application provides essential features for user management, role management, inventory management, and billing.

## Features
- **User Authentication**: Secure login functionality for users.
- **User Management**: Create and manage users, assign roles, and update user details.
- **Role Management**: Create and manage user roles for access control.
- **Inventory Management**: Add and manage items in the inventory.
- **Billing**: Process billing for items with price calculations.

## Technology Stack
- **Frontend**: Angular 19, Bootstrap 5
- **Backend**: .NET 6 Web API
- **Database**: SQLite
- **Unit Testing**: xUnit for .NET

## Project Structure
```
cafe-shop-app
├── angular-frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── login
│   │   │   │   ├── user-management
│   │   │   │   ├── role-management
│   │   │   │   ├── inventory
│   │   │   │   └── billing
│   │   │   ├── services
│   │   │   └── models
│   │   └── assets
│   ├── angular.json
│   ├── package.json
│   └── README.md
├── dotnet-backend
│   ├── CafeShop.Api.sln
│   ├── CafeShop.Api
│   │   ├── Controllers
│   │   ├── Models
│   │   ├── Data
│   │   ├── Repositories
│   │   ├── DTOs
│   │   ├── Mappings
│   │   ├── Services
│   │   ├── CafeShop.Api.csproj
│   │   └── appsettings.json
│   ├── CafeShop.Tests
│   │   ├── CafeShop.Tests.csproj
│   │   └── UnitTests
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- .NET SDK
- Node.js and npm
- SQLite

### Installation

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd cafe-shop-app
   ```

2. **Setup the backend**:
   - Navigate to the `dotnet-backend` directory.
   - Restore the dependencies:
     ```
     dotnet restore
     ```
   - Run the application:
     ```
     dotnet run
     ```

3. **Setup the frontend**:
   - Navigate to the `angular-frontend` directory.
   - Install the dependencies:
     ```
     npm install
     ```
   - Run the application:
     ```
     ng serve
     ```

### Unit Testing
- Navigate to the `dotnet-backend/CafeShop.Tests` directory.
- Run the tests:
  ```
  dotnet test
  ```

## Deployment
Once the application is developed and tested, it can be packaged into an APK for Android devices. Use tools like Capacitor or Cordova to facilitate this process.

## Touch Screen Compatibility
The application is designed to be touch screen friendly, ensuring a smooth user experience on tablets and mobile devices.

## License
This project is licensed under the MIT License. See the LICENSE file for details.