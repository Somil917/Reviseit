# User Registration API

## Endpoint: `/user/register`

### **Description**
This endpoint allows users to register by providing their name, email, and password. The password is securely hashed before storing it in the database, and a JWT token is generated upon successful registration.

---

## **Request Method**
**POST** `/user/register`

---

## **Request Body (JSON Format)**
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

---

## **Response**
### **Success Response** (201 Created)
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

### **Error Responses**
| Status Code | Error Message |
|------------|--------------|
| 400 Bad Request | "Name must be at least 3 characters long" |
| 400 Bad Request | "Invalid Email" |
| 400 Bad Request | "Password must be at least 6 characters long" |
| 400 Bad Request | "All fields are required" |

---

## **Validation & Security Features**
- **Validation**: `express-validator` ensures input meets the required format.
- **Password Hashing**: Uses `bcrypt` to securely hash passwords before storing.
- **JWT Authentication**: Generates a token for the user to use in future authenticated requests.

---

## **Implementation Details**
- **Routes File**: `user.routes.js` handles the `/register` route.
- **Controller**: `user.controller.js` processes the request, validates input, and calls the service.
- **Service Layer**: `user.service.js` creates the user in the database.
- **Model**: `user.model.js` defines the user schema, password hashing, and token generation.

---

## **How to Use**
1. **Start the Server**: Ensure your backend is running.
2. **Send a POST Request**: Use Postman, cURL, or frontend code to send data to `/user/register`.
3. **Receive Token**: If successful, the response includes a JWT token for authentication.

---

📌 **Note**: Ensure `process.env.JWT_SECRET` is set in your `.env` file for token generation.

---

🚀 **Ready to integrate authentication? Use the generated JWT token for protected routes!**

