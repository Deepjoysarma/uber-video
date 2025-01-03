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
```

## Endpoint: `/users/profile`

### HTTP Method: GET

### Description:
Retrieve the profile of the authenticated user.

### Headers:
- `Authorization`: Bearer token (required).

## Endpoint: `/users/logout`

### HTTP Method: GET

### Description:
Logout the authenticated user by clearing the authentication token.

### Headers:
- `Authorization`: Bearer token (required).

## Endpoint: `/captains/register`

### HTTP Method: POST

### Description:
Register a new captain by creating a captain account with the provided information.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: An integer with a minimum value of 1 (required).
  - `vehicleType`: A string that must be one of the following values: `car`, `motorcycle`, `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Endpoint: `/captains/login`

### HTTP Method: POST

### Description:
Authenticate a captain with the provided email and password.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

## Endpoint: `/captains/profile`

### HTTP Method: GET

### Description:
Retrieve the profile of the authenticated captain.

### Headers:
- `Authorization`: Bearer token (required).

## Endpoint: `/captains/logout`

### HTTP Method: GET

### Description:
Logout the authenticated captain by clearing the authentication token.

### Headers:
- `Authorization`: Bearer token (required).