from rest_framework import serializers
from django.contrib.auth import get_user_model

from app.customer.serializers import CustomerSerializers


class SignupSerializers(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,min_length = 8)
    class Meta:
        model = get_user_model()
        fields = "__all__"
        extra_kwargs = {'username':{'required':False}}

    def create(self,validated_data):
        validated_data.update(username = validated_data["mobile_no"])
        user = get_user_model().objects.create_user(**validated_data)
        return user

class UserSerializers(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,min_length = 8)
    address = CustomerSerializers(many=True,read_only=True)
    class Meta:
        model = get_user_model()
        fields = "__all__"
        extra_kwargs = {'username':{'required':False}}
    

