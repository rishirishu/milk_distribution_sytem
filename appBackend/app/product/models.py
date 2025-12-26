from django.db import models

from app.user.models import AuditTable

# Create your models here.

class Product(AuditTable):
    name = models.CharField(max_length=100, unique=True)
    picture = models.ImageField(upload_to='product_images/')
    description = models.TextField(blank=True, null=True)
    price_per_litre = models.DecimalField(max_digits=8, decimal_places=2)
    fat_content = models.DecimalField(max_digits=5, decimal_places=2, help_text="Fat percentage")
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name