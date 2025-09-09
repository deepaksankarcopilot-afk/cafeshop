# Cafe Shop Application - .NET Backend

This repository contains the backend API for the Cafe Shop application, built using .NET. The application is designed to manage various functionalities for a cafe, including user authentication, user and role management, inventory management, and billing.

## Project Structure

- **CafeShop.Api**: The main API project containing controllers, models, data access, and business logic.
  - **Controllers**: Handles incoming HTTP requests and returns responses.
  - **Models**: Represents the data structure used in the application.
  - **Data**: Contains the database context and configuration for the SQLite database.
  - **Repositories**: Implements the user repository pattern for data access.
  - **DTOs**: Data Transfer Objects for transferring data between layers.
  - **Mappings**: AutoMapper profiles for mapping between entities and DTOs.
  - **Services**: Encapsulates business logic and interacts with repositories.

- **CafeShop.Tests**: Contains unit tests for the API to ensure functionality and reliability.

## Features

- User Management: Create new users, assign roles, and manage user details.
- Role Management: Create and manage user roles.
- Inventory Management: Add and manage item inventory.
- Billing: Handle billing processes for items, including price calculations.
- User Repository Pattern: Implements a clean separation of concerns for data access.
- AutoMapper: Simplifies object-to-object mapping between entities and DTOs.
- SQLite Database: Utilizes a lightweight database for data storage.

## Getting Started

### Prerequisites

- .NET SDK (version compatible with the project)
- SQLite Database

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd cafe-shop-app/dotnet-backend
   ```

2. Restore the dependencies:
   ```
   dotnet restore
   ```

3. Update the `appsettings.json` file with your database connection string.

### Running the Application

To run the API, use the following command:
```
dotnet run --project CafeShop.Api/CafeShop.Api.csproj
```

The API will be available at `http://localhost:5000` (or the configured port).

### Running Tests

To run the unit tests, use the following command:
```
dotnet test CafeShop.Tests/CafeShop.Tests.csproj
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.