# Laravel + React + Inertia + Breeze with Docker

This project is a full-stack web application using **Laravel** as the backend, **React** as the frontend, **Inertia.js** for single-page app navigation, and **Breeze** for authentication. The application is containerized using **Docker**.

## Requirements

Before running this project, make sure you have the following installed on your machine:

- **Docker**: [Download Docker](https://www.docker.com/products/docker-desktop)
- **Docker Compose**: Included with Docker Desktop
- **Node.js**: Required for React development (`npm` or `yarn` can be used)
- **Composer**: For managing Laravel dependencies
- **PHP**: The backend is built with Laravel which requires PHP

## Getting Started

### Clone the repository

First, clone this repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>

Set up Docker containers

This project uses Docker to manage both the Laravel backend and the React frontend. To build and start the containers, run the following command:

docker-compose up --build

This command will:

    Build the Docker images for both the Laravel app (PHP, MySQL) and the React app.

    Start the services on the following ports:

        Port 80 for the Laravel backend (accessible via http://localhost:8000)

        Port 5173 for the React development server (accessible via http://localhost:5173)

Environment Configuration

After setting up the Docker containers, make sure to configure the .env file for both the backend and frontend.

    Backend (.env)

        Copy the .env.example file to .env if it doesn't already exist:

cp .env.example .env

Update the database configuration:

        DB_CONNECTION=mysql
        DB_HOST=mysql
        DB_PORT=3306
        DB_DATABASE=laravel
        DB_USERNAME=root
        DB_PASSWORD=root

    Frontend (React)

        By default, the React app will communicate with the Laravel API at http://localhost:8000. Ensure that the Inertia.js adapter in your React app is configured accordingly.

Running the Application

Once everything is set up, you can visit the following URLs:

    Backend (Laravel API): http://localhost:8000

Frontend (React): http://localhost:5173

The backend is configured to run on port 8000 (for API), and the React frontend will run on port 5173 (for development).
Authentikasi dengan Breeze

Laravel Breeze menyediakan scaffolding untuk login dan registrasi. Anda bisa mengakses fitur autentikasi di URL berikut:

    Login: http://localhost:8000/login

Register: http://localhost:8000/register

Jika Anda ingin menggunakan autentikasi berbasis API, Anda dapat menggunakan Inertia dengan React untuk menghubungkan antarmuka frontend dengan backend Laravel.
Development Workflow
1. Backend Development

For backend development (Laravel), you can use Docker to run PHP and Artisan commands. To run the application inside the container, execute:

docker-compose exec app bash

Inside the container, you can run typical Laravel commands like:

    To migrate the database:

php artisan migrate

To create a controller or model:

    php artisan make:controller ExampleController

2. Frontend Development

For frontend development (React), the React development server is running on port 5173. To make changes, you can modify the React components, and the changes will automatically reload in your browser.

To run the React development environment inside the container, execute:

docker-compose exec frontend bash
npm run dev

This will start the React development server on http://localhost:5173.
Stopping the Containers

To stop the Docker containers, run:

docker-compose down

This will stop all running containers but will keep the volumes intact. If you want to remove the volumes as well, use:

docker-compose down --volumes

Docker Compose Services

This project includes the following Docker services:

    app: PHP, Laravel application

    mysql: MySQL database for Laravel

    frontend: React development server

You can view the logs for any of the services using:

docker-compose logs <service-name>

For example, to view logs for the Laravel app:

docker-compose logs app

Troubleshooting

    Port conflicts: If ports 8000 or 5173 are already in use, you can modify the docker-compose.yml file to bind the containers to different ports.

    Permissions issues: Make sure Docker has the correct permissions to run on your system, especially if you're on Linux or macOS.

Additional Resources

    Laravel Documentation

React Documentation

Inertia.js Documentation

Laravel Breeze Documentation
License

This project is licensed under the MIT License - see the LICENSE

file for details.


Pastikan untuk mengganti `<repository-url>` dengan URL repositori Anda jika perlu, dan sesuaikan instruksi dengan pengaturan proyek Anda.

Semoga ini membantu! Let me know if you need further adjustments!
