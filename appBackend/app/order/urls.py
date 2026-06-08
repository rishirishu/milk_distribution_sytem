from django.urls import path
from app.order.views import OrderViewset


urlpatterns = [
    path('', OrderViewset.as_view(), name='orders'),
]