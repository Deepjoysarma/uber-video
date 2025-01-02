# Backend API Documentation

## Endpoint: `/users/register`

### HTTP Method: POST

### Description:
Register a new user by creating a user account with the provided information.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

```

## Endpoint: `/users/login`

### HTTP Method: POST

### Description:
Authenticate a user with the provided email and password.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
