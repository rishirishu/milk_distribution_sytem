from django.contrib import admin
from .models import Order
# Register your models here.

admin.site.site_header = "Order Admin"
admin.site.site_title = "Order Admin Portal"
admin.site.index_title = "Welcome to Order Admin Portal"
admin.site.register(Order)
