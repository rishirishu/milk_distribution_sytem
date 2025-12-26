from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from app.product.models import Product
from app.product.serilizers import ProductSerializer
# Create your views here.

class ProductViewset(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class =  ProductSerializer
    