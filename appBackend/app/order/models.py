from django.db import models
from django.contrib.auth import get_user_model

from app.product.enum import STATUS_CHOICES
from app.product.models import Product
from app.user.models import AuditTable
# Create your models here.

class Order(AuditTable):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders')
    quantity_in_litre = models.DecimalField(max_digits=6, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    order_date = models.DateField(auto_now_add=True)
    delivery_date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='PENDING')
    def save(self, *args, **kwargs):
        if not self.total_price:
            self.total_price = self.quantity_in_litre * self.product.price_per_litre
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username} - {self.product.name} ({self.quantity_in_litre}L)"
