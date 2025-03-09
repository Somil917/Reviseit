# User Authentication API

## **1️⃣ User Registration**

### **Endpoint: `/users/register`**

#### **Description**
This endpoint allows users to register by providing their name, email, and password. The password is securely hashed before storing it in the database, and a JWT token is generated upon successful registration.

### **Request Method**
**POST** `/users/register`

### **Request Body (JSON Format)**
| Field     | Type   | Required | Validation |
|-----------|--------|----------|------------|
| `name`    | String | ✅ Yes  | Must be at least 3 characters long |
| `email`   | String | ✅ Yes  | Must be a valid email format |
| `password` | String | ✅ Yes  | Must be at least 6 characters long |

### **Example Request Body**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### **Response**
#### **Success Response (201 Created)**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "65fd1234abcde56789f0",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```

#### **Error Responses**
| Status Code | Error Message |
|------------|--------------|
| 400 Bad Request | "Name must be at least 3 characters long" |
| 400 Bad Request | "Invalid Email" |
| 400 Bad Request | "Password must be at least 6 characters long" |
| 400 Bad Request | "All fields are required" |

---

## **2️⃣ User Login**

### **Endpoint: `/users/login`**

#### **Description**
This endpoint allows users to log in using their email and password. If the credentials are valid, the server responds with a JWT token.

### **Request Method**
**POST** `/users/login`

### **Request Body (JSON Format)**
| Field     | Type   | Required | Validation |
|-----------|--------|----------|------------|
| `email`   | String | ✅ Yes  | Must be a valid email format |
| `password` | String | ✅ Yes  | Must be at least 6 characters long |

### **Example Request Body**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### **Response**
#### **Success Response (200 OK)**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "65fd1234abcde56789f0",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```

#### **Error Responses**
| Status Code | Error Message |
|------------|--------------|
| 400 Bad Request | "Invalid Email" |
| 400 Bad Request | "Password must be at least 6 characters long" |
| 401 Unauthorized | "Invalid email or password" |

---

## **3️⃣ User Profile**

### **Endpoint: `/users/profile`**

#### **Description**
This endpoint allows authenticated users to retrieve their profile details.

### **Request Method**
**GET** `/users/profile`

### **Headers**
| Header | Type   | Required | Description |
|--------|--------|----------|-------------|
| `Authorization` | String | ✅ Yes  | Bearer token obtained during login |

### **Example Request**
```sh
GET /users/profile
Authorization: Bearer <JWT_TOKEN>
```

### **Response**
#### **Success Response (200 OK)**
```json
{
  "_id": "65fd1234abcde56789f0",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

#### **Error Responses**
| Status Code | Error Message |
|------------|--------------|
| 401 Unauthorized | "Unauthorized: No token provided" |
| 403 Forbidden | "Invalid or expired token" |

---

## **4️⃣ User Logout**

### **Endpoint: `/users/logout`**

#### **Description**
This endpoint allows users to log out by clearing the authentication token and adding it to a blacklist.

### **Request Method**
**GET** `/users/logout`

### **Headers**
| Header | Type   | Required | Description |
|--------|--------|----------|-------------|
| `Authorization` | String | ✅ Yes  | Bearer token obtained during login |

### **Example Request**
```sh
GET /users/logout
Authorization: Bearer <JWT_TOKEN>
```

### **Response**
#### **Success Response (200 OK)**
```json
{
  "message": "Logged out"
}
```

#### **Error Responses**
| Status Code | Error Message |
|------------|--------------|
| 401 Unauthorized | "Unauthorized: No token provided" |
| 403 Forbidden | "Invalid or expired token" |

---

## **Validation & Security Features**
- **Validation**: `express-validator` ensures input meets the required format.
- **Password Hashing**: Uses `bcrypt` to securely hash passwords before storing.
- **JWT Authentication**: Generates a token for the user to use in future authenticated requests.
- **Token Blacklisting**: Logout implementation ensures tokens cannot be reused after logout.

---

## **Implementation Details**
- **Routes File**: `user.routes.js` handles the `/register`, `/login`, `/profile`, and `/logout` routes.
- **Controller**: `user.controller.js` processes the request, validates input, and calls the service.
- **Service Layer**: `user.service.js` handles database interactions.
- **Model**: `user.model.js` defines the user schema, password hashing, and token generation.

---

## **How to Use**
1. **Start the Server**: Ensure your backend is running.
2. **Send Requests**: Use Postman, cURL, or frontend code to interact with `/users/register`, `/users/login`, `/users/profile`, and `/users/logout`.
3. **Receive Token**: If successful, the response includes a JWT token for authentication.
4. **Use Token for Protected Routes**: Include the token in the `Authorization` header for accessing `/users/profile` and `/users/logout`.

---

📌 **Note**: Ensure `process.env.JWT_SECRET` is set in your `.env` file for token generation.

---

🚀 **Ready to integrate authentication? Use the generated JWT token for protected routes!**

