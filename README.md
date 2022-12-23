<h1 align="center"> Movie Rating Application </h1>

<p align="center">
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Project</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
</p>

## Project Structure

- database directory contains the database connection file and the migration and seed files.

- src directory contains the controllers, database, routes and utils, for the application. It also contains the main entry point for the application (server.js).
- .gitignore file is used to ignore the node_modules directory when pushing to Git.
- knexfile.js file contains the configuration for the knex library.
- package.json file contains the project dependencies and scripts.
- README.md file is this file, which contains information about the project.

## How to run the project

### Clone the repository

1. Clone the repository using the following command:

```bash
$ git clone https://github.com/user/repo.git
```

2. Navigate to the project directory:

```bash
$ cd movie-rating-application
```

3. Install the project dependencies:

```bash
$ npm install
```

4. Run the migrations:

```bash
$ npm run knex:migrate
```

5. Start the application:

```bash
$ npm start
```

6. Open the application in your browser:

```bash
http://localhost:3333
```

## Project Features

### This project has the following features:

- User creation.
- Movie creation and rating
- Tag creation and assignment to movies
- Password hashing for security
- Email validation
- Cascade delete to ensure that a tag is deleted when a movie is deleted

## Future improvements

- Implement a front-end using a framework such as React or Vue.js
- Add ability for users to edit and delete their movies and tags
- Implement pagination for movie and tag lists
- Add a search feature to search for movies by name or tag

## 🚀 Dependencies

### This project uses the following dependencies:

<br>

- bcryptjs: used for hashing user passwords
- express: a web framework for Node.js
- express-async-errors: a middleware that allows express to handle async errors
- knex: a SQL query builder
- sqlite: a database library for Node.js
- sqlite3: a database library for Node.js

## 💻 Project

This is a Node.js application that allows users to create and rate movies. Users can enter movie information such as name, description, and rating, as well as create tags related to the movie. The application uses a SQLite database to store movie and tag information.

---

Made with ♥ by Gustavo Batista :wave: [LinkedIn](https://www.linkedin.com/in/gustavo-h-batista/) e [GitHub](https://github.com/gustavohdab)
