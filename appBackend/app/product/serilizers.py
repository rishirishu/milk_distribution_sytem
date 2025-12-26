from rest_framework.serializers import ModelSerializer

from app.product.models import Product
from app.utils.getUserDetail import assignUser


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
    
    def create(self,validated_data):
        assignUser(self,validated_data)
        return super().create(validated_data)

