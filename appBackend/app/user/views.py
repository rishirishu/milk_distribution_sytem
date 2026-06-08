from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.status import HTTP_201_CREATED,HTTP_401_UNAUTHORIZED,HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from app.customer.serializers import CustomerSerializers
from app.user.serializers import UserSerializers, SignupSerializers
from django.db import transaction
from django.contrib.auth import authenticate
from django.http import HttpResponse
from app.utils.jwtToken import delete_token_for_user, get_tokens_for_user
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated



class SignUpViewset(APIView):
    @transaction.atomic
    def post(self,request):
        seriliser = SignupSerializers(data = request.data)
        seriliser.is_valid(raise_exception=True)
        seriliser.save()
        return Response({"data" : seriliser.data,"message":"user created successfully" }, status=HTTP_201_CREATED)


class LoginViewset(APIView):
    def post(self,request):
        username = request.data["username"]
        password = request.data["password"]
        user = authenticate(username = username,password = password)
        if user:
            token  = get_tokens_for_user(user)
            serialised_data = UserSerializers(user).data
            serialised_data.update(**token)
            return Response(serialised_data)
        return Response("Invalid credentials",status=HTTP_401_UNAUTHORIZED)


class LogoutViewset(APIView):
    def post(self,request):
        try:
            refresh_token = request.data["refresh_token"]
            if refresh_token:
                return Response(delete_token_for_user(refresh_token))
            return Response("user is not valid",status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response("User logout successfully")
        
class UserViewset(ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializers
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        user_data = {
            "name": request.data.pop("name"),
            "email": request.data.pop("email"),
        }
         # Update user serializer
        serializer = self.get_serializer(instance,data=user_data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        if request.data:
            request.data["user"] = request.user.id
            customer_serializer = CustomerSerializers(data=request.data)
            customer_serializer.is_valid(raise_exception=True)
            customer_serializer.save() 

        return Response(serializer.data)
def testAPi(request):
    return HttpResponse("hellodssf")
    
