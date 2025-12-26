from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime

from app.utils.all_enums import ROLE_CHOICES

# Create your models here.

class AuditTable(models.Model):
    created_by = models.CharField(max_length=10,blank=True)
    updated_by = models.CharField(max_length=10,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 
    class Meta:
        abstract = True


class User(AbstractUser,AuditTable):
    mobile_no = models.CharField(max_length=13,unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')


