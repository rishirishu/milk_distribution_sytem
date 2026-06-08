from django.contrib import admin
from .models import CartItem

# Register your models here.
admin.site.site_header = "Cart Admin"
admin.site.site_title = "Cart Admin Portal"
admin.site.index_title = "Welcome to Cart Admin Portal"
admin.site.register(CartItem)