from rest_framework import serializers
from .models import User, UserPost, FoodLocation, MenuItem, MenuOption, AllowedPayment, PaymentMethod

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'pfp', 'name', 'username', 'password', 'banner')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPost
        fields = ('id', 'user', 'image', 'content', 'posted_at')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodLocation
        fields = ('id', 'image', 'name', 'loc', 'opens_at', 'closes_at')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('id', 'menu', 'name', 'image')

class PaymentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = ('id', 'name')

class AllowedPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllowedPayment
        fields = ('id', 'item', 'method')  # or customize as needed

class MenuOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuOption
        fields = ('id', 'item', 'category', 'choices')
