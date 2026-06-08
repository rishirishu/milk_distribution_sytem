from urllib import request

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from app.cart.serializers import CartItemSerializer
from .models import CartItem

class CartItemViewset(ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs ):
        print(request.user, "usrdetaiodsd")
        user_cart_items = self.queryset.filter(user=request.user)
        serializer = self.get_serializer(user_cart_items, many=True)
        return Response(serializer.data)
    

    def update(self, request, *args, **kwargs):
        cart_item = self.get_object()  
        quantity = int(request.data.get("quantity", cart_item.quantity))
        if quantity < 1:
            cart_item.delete()
            return Response({
                "status": "item removed from cart"
            })
        
        cart_item.quantity = quantity
        cart_item.save()

        return Response({
            "status": "item updated in cart"
        })