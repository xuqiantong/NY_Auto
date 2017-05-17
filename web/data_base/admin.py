from django.contrib import admin

from .models import *
# Register your models here.
admin.site.register(Vehicle)
admin.site.register(Customer)
admin.site.register(Favorite)
#admin.site.register(Image)
admin.site.register(Has_image)
admin.site.register(Sell)