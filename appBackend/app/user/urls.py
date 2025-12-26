from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter
from django.urls import path,include

router = DefaultRouter()

router.register('',UserViewset)
urlpatterns = [
    path('signup',SignUpViewset.as_view(),name="signup"),
    path('login',LoginViewset.as_view(),name="login"),
    path('logout',LogoutViewset.as_view(),name="logout"),
    path('test',testAPi),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("users/",include(router.urls))
]