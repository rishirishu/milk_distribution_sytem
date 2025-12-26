from rest_framework import serializers

from app.customer.models import Customer

class CustomerSerializers(serializers.ModelSerializer):
    serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Customer
        fields= "__all__"