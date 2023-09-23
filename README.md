# sceditor

Welcome to sceditor (Schedule Editor) project! This web application allows you to create, edit, and manage schedules with ease.

## Getting Started
These instructions will help you set up and run the project on your local machine for development and testing purposes. See the Deployment section for notes on how to deploy the project in production.

### Installation
1. Clone the repository and navigate to the project directory:
    ```bash
    git clone https://github.com/mlpl1/sceditor.git
    cd sceditor
    ```
2. Install the dependencies and build the project:
    ```bash
    comopser install
    npm install && npm run build
    ```
3. Create the `.env` file and configure your database settings:
    ```bash
    cp .env.example .env
    ```
4. Generate an application key:
    ```bash
    php artisan key:generate
    ```
5. Migrate the database
    ```bash
    php artisan migrate
    ```
6. Start the server:
    ```bash
    php artisan serve
    ```

### Running the Tests
To run the tests execute:

```bash
php artisan test
```

### Deployment
To deploy this project in a production environment, please refer to the official Laravel documentation on [deployment](https://laravel.com/docs/10.x/deployment).

## Authors

- [@mlpl1](https://www.github.com/mlpl1)
