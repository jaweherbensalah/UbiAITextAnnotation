## Overview
This is the backend of the application, built with Django. It handles the server-side logic, database interactions, and API endpoints.

## Prerequisites
- Docker
- Docker Compose

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/jaweherbensalah/UbiAITextAnnotation.git
cd UbiAITextAnnotation/ubiaiback
```

### 2. Build and run the Docker containers
```
docker-compose up --build
```

### 3. Access the application
Once the containers are up and running, you can access the Django application at:

```
http://localhost:8000/
```

### 4. Run migrations

```
docker-compose exec web python manage.py migrate
```

### 6. Create a superuser
To create an admin user, run:

```
docker-compose exec web python manage.py createsuperuser
```

### 7. Run tests
To run the tests, use:

```
docker-compose exec web python manage.py test
```

