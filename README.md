# Nepal Software Companies

**Nepal Software Companies** is a directory designed for students to explore leading IT and software companies in Nepal. The platform provides easy access to essential information, including contact details, career pages, official websites, and LinkedIn profiles of top tech firms. Whether you're looking for internships, job openings, or just exploring career opportunities in Nepal's tech industry, this platform connects you to the right companies.

## Features
- **Company Directory:** List of IT and software companies in Nepal.
- **Contact Information:** Access email addresses, phone numbers, and office addresses.
- **Career Pages:** Direct links to job openings and internship opportunities.
- **Official Websites & LinkedIn:** Visit company websites and LinkedIn profiles for more insights.

## Technologies Used
- **Backend:** Django (Python)
- **Frontend:** HTML, Bootstrap
- **Database:** SQLite (or as per your setup)

## Manual Installation

### Clone the repository

```bash
git clone git@github.com:PublisherName/Nepal-Software-Companies.git
```

### Create and activate a virtual environment

```bash
cd Nepal-Software-Companies/app
python3 -m venv env
source env/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Apply Migration

```bash
python manage.py migrate
```

### Create Superuser

```bash
python manage.py make_admin
```

### Load Fixtures

```bash
make load-companies
```

### Run the server

```bash
python manage.py runserver
```

## Installation using Docker

### Build and run the Docker container

```bash
docker-compose up --build
```
