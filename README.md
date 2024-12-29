# Dicoding Node.js Basic

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green) ![License](https://img.shields.io/badge/license-MIT-brightgreen)

This project is a basic Node.js application that introduces fundamental concepts such as creating a simple server, handling HTTP requests, working with modules, and managing asynchronous operations. This project is part of the Dicoding "Belajar Membuat Aplikasi Back-End untuk Pemula" course.

---

## Features

- Create a basic HTTP server
- Handle routing and HTTP methods (GET, POST, PUT, DELETE)
- Understand Node.js built-in modules
- Implement basic file operations and asynchronous handling

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yorizpra/dicoding_nodejs-basic.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dicoding_nodejs-basic
   ```

3. Install dependencies (if applicable):
   ```bash
   npm install
   ```

---

## Running the Application

1. Start the server:
   ```bash
   node server.js
   ```

2. The server will run at:
   ```
   http://localhost:5000
   ```

---

## API Endpoints

### 1. Home Route
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Welcome message.

### 2. Add Data
- **URL**: `/data`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "key": "value"
  }
  ```
- **Response**:
  - `201 Created`: Data successfully added.

### 3. Get Data
- **URL**: `/data`
- **Method**: `GET`
- **Response**:
  - `200 OK`: List of data.

### 4. Update Data
- **URL**: `/data/{id}`
- **Method**: `PUT`
- **Request Body**: Same as Add Data.
- **Response**:
  - `200 OK`: Data successfully updated.
  - `404 Not Found`: Data ID not found.

### 5. Delete Data
- **URL**: `/data/{id}`
- **Method**: `DELETE`
- **Response**:
  - `200 OK`: Data successfully deleted.
  - `404 Not Found`: Data ID not found.

---

## Project Structure

```
├── src
│   ├── modules            # Custom modules
│   ├── server.js          # Main server file
├── data                   # Example data storage
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Dicoding](https://www.dicoding.com/) for providing the learning platform.
- [Node.js](https://nodejs.org/) for its powerful runtime environment.

---

Feel free to contribute to this project by submitting issues or pull requests!
