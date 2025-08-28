import os
import base64
from pathlib import Path
from decouple import config
from corsheaders.defaults import default_headers


# ------------------ Base Directory ------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# ------------------ Security ------------------
SECRET_KEY = 'django-insecure-1vk*65f)9vy(934#$#ce#f^n7bryy)vkrdjz0#u-mesc--6y79'
DEBUG = True
ALLOWED_HOSTS = ["*"]


# ------------------ Installed Apps ------------------
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party
    'rest_framework',
    'corsheaders',

    # Local apps
    'reactapp',
]

# ------------------ Middleware ------------------
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',   # <- CORS should be before CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# ------------------ CORS ------------------

CORS_ALLOW_ALL_ORIGINS = True   # Dev only, restrict in prod
CORS_ALLOW_HEADERS = list(default_headers) + [
    "X",
]
   # Dev only, restrict in prod

ROOT_URLCONF = 'connectreact.urls'


# ------------------ Templates ------------------
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'connectreact.wsgi.application'


# ------------------ Database ------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# ------------------ Password Validators ------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# ------------------ Internationalization ------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# ------------------ Static & Media ------------------
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


# ------------------ Default Primary Key ------------------
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ------------------ Secure API Key (for signing / encryption) ------------------
SECURE_API_KEY_B64 = os.environ.get("SECURE_API_KEY_B64")

if not SECURE_API_KEY_B64:
    # ⚠️ Development fallback (use env var in production)
    # Example for generating one:
    #   python - <<'PY'
    #   import os, base64
    #   print(base64.b64encode(os.urandom(32)).decode())
    #   PY
    SECURE_API_KEY = base64.b64decode("REPLACE_WITH_REAL_BASE64_32_BYTES")
else:
    SECURE_API_KEY = base64.b64decode(SECURE_API_KEY_B64)


# ------------------ Django REST Framework ------------------
REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": (
        "rest_framework.renderers.JSONRenderer",
    ),
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.AllowAny",
    ],
}

# settings.py ke end me
SECRET_API_KEY = SECRET_API_KEY = "12345-abcdef" # os.getenv("SECRET_API_KEY", "local-test-key-123")
