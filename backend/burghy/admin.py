from django.contrib import admin
from .models import User, UserPost, FoodLocation, MenuItem, MenuOption

class UserAdmin(admin.ModelAdmin):
    list_display = ("pfp", "name", "username", "password", "banner")

class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'image', 'content', 'posted_at')

class LocationAdmin(admin.ModelAdmin):
    list_display = ('image', 'name', 'loc', 'opens_at', 'closes_at')

class MenuAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'price', 'location', 'meal_swipe_elegible')

class MenuOptionAdmin(admin.ModelAdmin):
    list_display = ('item', 'category', 'choices')


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(UserPost, PostAdmin)
admin.site.register(FoodLocation, LocationAdmin)
admin.site.register(MenuItem, MenuAdmin)

admin.site.register(MenuOption, MenuOptionAdmin)