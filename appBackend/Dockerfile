FROM python:3.10-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    pkg-config \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*


COPY requirements.txt .


RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

# CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
# CMD ["sh", "-c", " gunicorn appBackend.wsgi:application --bind 0.0.0.0:8000"]
CMD ["gunicorn", "appBackend.wsgi:application", \
    #  "--bind", "0.0.0.0:8000", \
     "--workers", "3", \
     "--threads", "2", \
     "--timeout", "60"]