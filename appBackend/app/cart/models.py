from django.db import models
from app.product.models import Product
from django.contrib.auth import get_user_model

# Create your models here.

class CartItem(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
    quantity = models.PositiveIntegerField()

    class Meta:
        unique_together = ('user', 'product')
    
    
