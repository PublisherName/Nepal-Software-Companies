# Nepal Software Companies

**Nepal Software Companies** is a directory designed for students to explore leading IT and software companies in Nepal. The platform provides easy access to essential information, including contact details, career pages, official websites, and LinkedIn profiles of top tech firms. Whether you're looking for internships, job openings, or just exploring career opportunities in Nepal's tech industry, this platform connects you to the right companies.

## 🌐 Live Services

- **Django Backend** is live at [Koyeb](https://intimate-martha-publishername-f92d3741.koyeb.app/) 🚀
- **Next.js Frontend** is live at [Vercel](https://nepal-software-companies.vercel.app/) 🌟

## ✨ Features

- 📂 **Company Directory:** List of IT and software companies in Nepal.
- 📧 **Contact Information:** Access email addresses, phone numbers, and office addresses.
- 💼 **Career Pages:** Direct links to job openings and internship opportunities.
- 🌐 **Official Websites & LinkedIn:** Visit company websites and LinkedIn profiles for more insights.

## 🛠️ Technologies Used

- 🐍 **Backend:** Django (Python)
- ⚛️ **Frontend:** Next.js (React)
- 🗄️ **Database:** SQLite

## Manual Installation

### Clone the repository

```bash
git clone git@github.com:PublisherName/Nepal-Software-Companies.git
```

## For Backend (Django)

1. **Create and activate a virtual environment**

```bash
cd Nepal-Software-Companies/backend
python3 -m venv env
source env/bin/activate
```

2. **Install dependencies**

```bash
pip install -r requirements.txt
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

## For Frontend (NextJS)

1. **Install Node.js and npm**
2. **Navigate to the frontend directory**

```bash
cd Nepal-Software-Companies/frontend
```

3. Install pnpm globally

```bash
npm install -g pnpm
```

4. **Install dependencies**

```bash
pnpm install
```

4. **Copy the `.env.example` file to `.env.local` and update the environment variables**

```bash
cp .env.example .env.local
```

5. **Run the development server**

```bash
pnpm run dev
```

## Installation using Docker

### Build and run the Docker container

```bash
docker-compose up --build
```
