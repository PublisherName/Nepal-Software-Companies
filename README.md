# Nepal Software Companies

**Nepal Software Companies** is a directory designed for students to explore leading IT and software companies in Nepal. The platform provides easy access to essential information, including contact details, career pages, official websites, and LinkedIn profiles of top tech firms. Whether you're looking for internships, job openings, or just exploring career opportunities in Nepal's tech industry, this platform connects you to the right companies.

## 🌐 Live Services

- **Preview** is live at [Koyeb](https://intimate-martha-publishername-f92d3741.koyeb.app/) 🚀

## ✨ Features

- 📂 **Company Directory:** List of IT and software companies in Nepal.
- 📧 **Contact Information:** Access email addresses, phone numbers, and office addresses.
- 💼 **Career Pages:** Direct links to job openings and internship opportunities.
- 🌐 **Official Websites & LinkedIn:** Visit company websites and LinkedIn profiles for more insights.

## 🛠️ Technologies Used

- 🐍 **Backend:** Django (Python)
- 🗄️ **Database:** SQLite

## Manual Installation

### Clone the repository

```bash
git clone git@github.com:PublisherName/Nepal-Software-Companies.git
```

## For Django Backend

Make sure you have uv installed. If not, install it reading the [documentation](https://docs.astral.sh/uv/getting-started/installation/).

1. **Create and activate a virtual environment**

```bash
cd Nepal-Software-Companies
uv venv
source env/bin/activate
```

2. **Install dependencies**

```bash
uv sync
```

3. **Copy .env.example file to .env and update the environment variables**

```bash
cp .env.example .env
```

4. **Apply Migration**

```bash
python manage.py migrate
```

5. **Create Superuser**

```bash
python manage.py make_admin
```

6. **Load Fixtures**

```bash
make load-companies
```

7. **Run the server**

```bash
python manage.py runserver
```

# Docker Installation

1. **Build the Docker image**

```bash
docker build -t software-companies .
```

2. Run the Docker container

```bash
docker run -d -p 8000:8000 --name software-companies-app software-companies
```

3. Browse the application at `http://127.0.0.1:8000`
