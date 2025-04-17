from django.contrib import admin
from .models import User, FoodShare, FoodMenu, FoodItem, MenuPleaseWork

class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "password", "banner")

class ShareAdmin(admin.ModelAdmin):
    list_display = ('pfp', 'name', 'title', 'image', 'desc')

class MenuAdmin(admin.ModelAdmin):
    list_display = ('image', 'name', 'loc', 'status', 'hours')

class ItemAdmin(admin.ModelAdmin):
    list_display = ('menu', 'name', 'image')

class WorkAdmin(admin.ModelAdmin):
    list_display = ('name', 'loc', 'status', 'hours')

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(FoodShare, ShareAdmin)
admin.site.register(FoodMenu, MenuAdmin)
admin.site.register(FoodItem, ItemAdmin)
admin.site.register(MenuPleaseWork, WorkAdmin)