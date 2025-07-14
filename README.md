# Devfolio
Devfolio is a modern platform for developers, freelancers, and agencies to showcase their work, write markdown blogs, and grow their brand. It includes themes, analytics, short links, weather widgets, and custom domains—all built with Django and React.

## 📦 Requirements

- Python 3.10+
- Node.js & npm
- PostgreSQL
- Git

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/devfolio.git
cd devfolio
```

### 2. Setup Backend

#### 2.1 Install necessary dependencies
```bash
cd backend
python -m venv env
source env/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### 2.2 Create posgress database
```bash
sudo -u postgres psql
CREATE DATABASE devfolio_db;
CREATE USER devfolio_user WITH PASSWORD 'yourpassword';
ALTER ROLE devfolio_user SET client_encoding TO 'utf8';
ALTER ROLE devfolio_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE devfolio_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE devfolio_db TO devfolio_user;
\c devfolio_db
GRANT ALL PRIVILEGES ON SCHEMA public TO devfolio_user;
\q
```

#### 2.3 Create a .env file inside backend
```
SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=devfolio_db
DB_USER=devfolio_user
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
```
#### 2.4 Run Migrations
```bash
python manage.py migrate
```
#### 2.5 Start the Backend
```bash
python manage.py runserver
```
### 3. Setup Frontend

#### 3.1 Install necessary dependencies
```bash
cd frontend
npm install
```

#### 3.2 Start the server
```bash
npm run dev
```
It will start the app on http://localhost:5173/
```bash

> frontend@0.0.0 dev
> vite


  VITE v7.0.4  ready in 268 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

#### 3.2 Visit the frontend
copy the url http://localhost:5173/ on your browser

---