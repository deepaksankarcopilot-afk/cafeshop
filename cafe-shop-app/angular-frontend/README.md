# Cafe Shop Application - Angular Frontend

This is the Angular frontend for the Cafe Shop application, which is designed to work in conjunction with a .NET Web API backend and an SQLite database. The application provides a user-friendly interface for managing various aspects of a cafe shop, including user authentication, user and role management, inventory management, and billing.

## Features

- **Login Screen**: A standalone component for user authentication.
- **User Management**: Create new users, assign roles, and manage user details.
- **Role Management**: Create and manage user roles.
- **Inventory Management**: Add and manage item inventory.
- **Billing Screen**: Handle billing processes for items, including price calculations.

## Project Structure

The project is organized as follows:

```
angular-frontend
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── login
│   │   │   ├── user-management
│   │   │   ├── role-management
│   │   │   ├── inventory
│   │   │   └── billing
│   │   │
│   │   ├── services
│   │   └── models
│   └── assets
├── angular.json
├── package.json
└── README.md
```

## Technologies Used

- **Angular 19**: Frontend framework for building the application.
- **Bootstrap 5**: For responsive and touch-friendly UI design.
- **TypeScript**: For type-safe JavaScript development.
- **RxJS**: For reactive programming with observables.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd cafe-shop-app/angular-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Unit Testing

Unit tests are included to ensure the functionality of the application. To run the tests, use the following command:
```
ng test
```

## Future Enhancements

- Implement additional features based on user feedback.
- Optimize performance and enhance security measures.

## License

This project is licensed under the MIT License. See the LICENSE file for details.