from rest_framework.views import APIView
from app.order.models import Order
from app.order.serializers import OrderSerializer
from app.utils.pagination import DefaultPagination
from rest_framework.response import Response
from rest_framework import status


class OrderViewset(APIView):
    def get(self, request):
        orders = Order.objects.all().order_by('-created_at')
        paginator = DefaultPagination()
        paginated_orders = paginator.paginate_queryset(orders, request)
        serializer = OrderSerializer(paginated_orders, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        order = Order.objects.get_object_or_404(pk=pk)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def update(self, request, pk):
        order = Order.objects.get_object_or_404(pk=pk)
        serializer = OrderSerializer(order, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

