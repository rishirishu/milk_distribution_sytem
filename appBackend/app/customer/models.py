from django.db import models
from app.user.models import User

# Create your models here.


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='address')
    address_line = models.TextField()
    landmark = models.CharField(max_length=100, blank=True, null=True)
    pincode = models.CharField(max_length=10)
    communication_phone = models.CharField(max_length=15, default="", blank=True)
    is_default = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-is_default']

