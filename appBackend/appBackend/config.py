import environ
import os


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
class Config:
    DEBUG=False
    DB_NAME=None
    DB_USER=None
    DB_PASSWORD=None
    DB_HOST=None
    DB_PORT=None

    ACCESS_TOKEN_LIFETIME=1
    REFRESH_TOKEN_LIFETIME=2
    
    def __init__(self):
        self.env = environ.Env(
            DEBUG=(bool, False),
            ACCESS_TOKEN_LIFETIME=(int, 1),
            REFRESH_TOKEN_LIFETIME=(int, 2),
        )
        environ.Env.read_env(os.path.join(BASE_DIR, '.env'))
        self.DEBUG = self.env('DEBUG')
        self.DB_NAME = self.env('DB_NAME')
        self.DB_USER = self.env('DB_USER')
        self.DB_PASSWORD = self.env('DB_PASSWORD')
        self.DB_HOST = self.env('DB_HOST')
        self.DB_PORT = self.env('DB_PORT')

        self.ACCESS_TOKEN_LIFETIME = self.env('ACCESS_TOKEN_LIFETIME')
        self.REFRESH_TOKEN_LIFETIME = self.env('REFRESH_TOKEN_LIFETIME')

config = Config()