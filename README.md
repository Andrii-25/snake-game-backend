# Nodejs Expressjs PostgreSQL Snake game server

## How to install

### Using Git

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Andrii-25/snake-game-backend.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`

    ```bash
    cp .env.example .env
    ```

3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.

### Running migration

Run migration to create database schema.

```bash
cd myproject
npx sequelize db:migrate
```

## How to run

### Running API server locally

```bash
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
App is running...
```

## Routes

### GET Routes

- /api/users - to get all users
- /api/score/all - to all scores
- /api/score/:userId - to get score by user id
- /api/refresh - to refresh token

### POST Routes

- /api/registration - to register
- /api/login - to login
- /api/logout - to logout
- /api/score - to create new score

### PUT Routes

- /api/score/:userId - to update score by user id

### DELETE Routes

- /api/score/:id - to remove score by id
