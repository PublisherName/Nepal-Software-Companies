# Use an official Python runtime as a parent image
FROM python:3.11-slim

RUN apt-get update -qq \
  && apt-get install -y curl make \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /code/

# Copy .env file
RUN cp .env.example .env

COPY Makefile /code/
RUN chmod +x /code/Makefile


# Collect static files
RUN python manage.py collectstatic --noinput

# Start server
CMD python manage.py migrate && python manage.py make_admin && make load-companies && gunicorn root.wsgi:application --bind 0.0.0.0:8000
