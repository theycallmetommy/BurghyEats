from rest_framework import serializers
from .models import User, FoodShare, FoodMenu, FoodItem, MenuPleaseWork

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'banner')

class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodShare
        fields = ('id', 'pfp', 'name', 'title', 'image', 'desc')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodMenu
        fields = ('id', 'image', 'name', 'loc', 'status', 'hours')

class MenuWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuPleaseWork
        fields = ('id', 'name', 'loc', 'status', 'hours')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ('id', 'menu', 'name', 'image')