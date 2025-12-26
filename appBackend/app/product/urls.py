from django.urls import path,include
from .views import ProductViewset
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'', ProductViewset)


urlpatterns = [
    path("",include(router.urls))
]