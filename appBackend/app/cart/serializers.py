from rest_framework import serializers
from .models import CartItem


class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    picture = serializers.ImageField(source='product.picture', read_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'product_name', 'quantity','picture']
  