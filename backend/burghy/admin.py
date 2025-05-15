from django.contrib import admin
from .models import User, UserPost, FoodLocation, MenuItem, PaymentMethod, AllowedPayment, MenuOption

class UserAdmin(admin.ModelAdmin):
    list_display = ("pfp", "name", "username", "password", "banner")

class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'image', 'content', 'posted_at')

class LocationAdmin(admin.ModelAdmin):
    list_display = ('image', 'name', 'loc', 'opens_at', 'closes_at')

class MenuAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'price', 'location')

class PaymentMethodAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class AllowedPaymentAdmin(admin.ModelAdmin):
    list_display = ('item', 'method')

class MenuOptionAdmin(admin.ModelAdmin):
    list_display = ('item', 'category', 'choices')


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(UserPost, PostAdmin)
admin.site.register(FoodLocation, LocationAdmin)
admin.site.register(MenuItem, MenuAdmin)

admin.site.register(PaymentMethod, PaymentMethodAdmin)
admin.site.register(AllowedPayment, AllowedPaymentAdmin)
admin.site.register(MenuOption, MenuOptionAdmin)