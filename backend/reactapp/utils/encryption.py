# backend/reactapp/utils/encryption.py
import base64
import json
import os
import time
from typing import Dict, Any

from django.conf import settings
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding, hashes
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

SECRET_KEY = settings.SECURE_API_KEY  # bytes
BLOCK_SIZE = 128  # bits for PKCS7


def _derive_key(salt: bytes) -> bytes:
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100_000,
        backend=default_backend(),
    )
    return kdf.derive(SECRET_KEY)


def encrypt_data(data: Dict[str, Any]) -> str:
    raw_json = json.dumps({"payload": data, "timestamp": int(time.time())}).encode("utf-8")
    padder = padding.PKCS7(BLOCK_SIZE).padder()
    padded = padder.update(raw_json) + padder.finalize()
    salt = os.urandom(16)
    iv = os.urandom(16)
    key = _derive_key(salt)
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    ct = encryptor.update(padded) + encryptor.finalize()
    token = base64.urlsafe_b64encode(salt + iv + ct).decode("utf-8")
    return token


def decrypt_data(token: str, max_age: int = 60) -> Dict[str, Any]:
    try:
        raw = base64.urlsafe_b64decode(token.encode("utf-8"))
    except Exception as e:
        raise ValueError("Invalid token encoding") from e

    if len(raw) < 32:
        raise ValueError("Token too short")

    salt, iv, ct = raw[:16], raw[16:32], raw[32:]
    key = _derive_key(salt)
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    padded = decryptor.update(ct) + decryptor.finalize()
    unpadder = padding.PKCS7(BLOCK_SIZE).unpadder()
    data = unpadder.update(padded) + unpadder.finalize()
    obj = json.loads(data.decode("utf-8"))
    ts = int(obj.get("timestamp", 0))
    if int(time.time()) - ts > max_age:
        raise ValueError("Token expired")
    return obj.get("payload", {})
