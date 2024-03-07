# Project App-Food

## About the Project
The App-Food project is a basic food application developed in React Native using Expo. The application offers a variety of functionalities that allow users to browse a list of foods, view details of each item, place orders, and check their previous orders.

## Functionalities
The application features the following screens and functionalities:

- **Login Screen:** Allows users to log in to the application.
- **Registration Screen:** Allows new users to register in the application.
- **List Screen:** Displays a list of foods available to users.
- **Details Screen:** Shows details of a selected food item, including an image, name, description, and price. Users can also place an order from this screen.
- **Order Checkout Screen:** Allows users to view their previous orders. Users also have the option to delete an order.
- **Sidebar:** Provides easy navigation between the different screens of the application.

## Technologies Used
The application was developed using the following technologies:

- **React Native:** A JavaScript framework for building native mobile applications.
- **Expo:** An open-source platform for making universal apps for Android, iOS, and web with JavaScript and React.
- **Firebase:** A Google app development platform that provides a variety of tools and services for developers. The following Firebase services were used in the project:
  - **Firestore:** A cloud-based NoSQL database for storing and syncing data in real-time. I used it to store the foods and the orders of the logged-in user and provide them respectively on the 'order checkout' screen.
  - **Authentication:** Provides backend authentication services, easy-to-use SDKs, and ready-made UI libraries for authenticating users in the application. The user registers using name, email, password, and phone. And to log in, it is necessary to use the same email and password.
