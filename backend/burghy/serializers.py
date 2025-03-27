from rest_framework import serializers
from .models import User, FoodShare, FoodMenu, FoodItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'banner')

class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodShare
        fields = ('id', 'title', 'image', 'text')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodMenu
        fields = ('id', 'loc')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ('id', 'menu', 'name', 'image')