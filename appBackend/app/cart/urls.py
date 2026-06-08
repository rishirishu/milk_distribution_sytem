from django.urls import path,include
from .views import CartItemViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CartItemViewset)

urlpatterns = [
    path('', include(router.urls)),
]




