"""
Django settings for root project.

Generated by 'django-admin startproject' using Django 5.1.4.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from root.env_config import BASE_DIR, env
from root.jazzmin import JAZZMIN_SETTINGS_CONFIG

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env.str("DJANGO_SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool("DJANGO_DEBUG", default=False)
ALLOWED_HOSTS = env("ALLOWED_HOSTS").split(",")

# Application definition

DJANGO_APPS = [
    "jazzmin",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

THIRD_PARTY_APPS = [
    "rest_framework",
    "drf_yasg",
    "django_filters",
]

LOCAL_APPS = [
    "root",
    "company",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "root.middleware.FileRenameMiddleware",
]

ROOT_URLCONF = "root.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "root.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "en-us"

# Configure local timezone
TIME_ZONE = env("TIMEZONE")

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / env.path("STATIC_ROOT")
STORAGES = {
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
        "OPTIONS": {},
    },
}


# Media files (Images)
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / env.path("MEDIA_ROOT")

# Jazzmin settings
JAZZMIN_SETTINGS = JAZZMIN_SETTINGS_CONFIG

# Django Rest Framework
REST_FRAMEWORK = {
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 12,
}

CSRF_TRUSTED_ORIGINS = env("CSRF_TRUSTED_ORIGINS").split(",")

if DEBUG:
    CSRF_TRUSTED_ORIGINS = [
        "http://localhost:8000",
    ]

# Logging settings
LOG_DIR = BASE_DIR / env.path("LOG_DIR", default="logs")
LOG_DIR.mkdir(exist_ok=True, parents=True)

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
        },
        "file_sync": {
            "level": "DEBUG",
            "class": "logging.handlers.TimedRotatingFileHandler",
            "filename": str(LOG_DIR / "custom.log"),
            "when": "D",
            "interval": 1,
            "backupCount": 5,
            "formatter": "verbose",
        },
        "file_sql": {
            "level": "DEBUG",
            "class": "logging.handlers.TimedRotatingFileHandler",
            "filename": str(LOG_DIR / "sql.log"),
            "when": "D",
            "interval": 1,
            "backupCount": 5,
            "formatter": "verbose",
        },
        "file_django_error": {
            "level": "ERROR",
            "class": "logging.handlers.TimedRotatingFileHandler",
            "filename": str(LOG_DIR / "django_error.log"),
            "when": "D",
            "interval": 1,
            "backupCount": 5,
            "formatter": "django.server",
        },
    },
    "formatters": {
        "verbose": {
            "format": "%(asctime)s [%(levelname)s] %(message)s",
        },
        "django.server": {
            "()": "django.utils.log.ServerFormatter",
            "format": "[{server_time}] {message}",
            "style": "{",
        },
    },
    "loggers": {
        "CUSTOM_LOG": {
            "handlers": ["file_sync", "console"] if DEBUG else ["file_sync"],
            "level": "INFO" if DEBUG else "CRITICAL",
            "propagate": False,
        },
        "django.db.backends": {
            "handlers": ["file_sql"],
            "level": "DEBUG",
            "propagate": False,
        },
        "django.request": {
            "handlers": ["file_django_error"],
            "level": "ERROR",
            "propagate": False,
        },
    },
}

SWAGGER_SETTINGS = {
    "SECURITY_DEFINITIONS": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
        }
    },
    "USE_SESSION_AUTH": False,
}
