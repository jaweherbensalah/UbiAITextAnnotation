# Use an official Python runtime as a parent image
FROM python:3.11-slim

WORKDIR /app

COPY . /app/

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000


ENV PYTHONUNBUFFERED=1

# Run migrations and start the Django server
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
