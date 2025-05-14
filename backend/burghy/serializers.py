from django.contrib.auth.models import User
from rest_framework import serializers
from .models import FoodShare, FoodMenu, FoodItem, MenuPleaseWork

# class CreateUserSerializer(serializers.ModelSerializer):
#     username = serializers.CharField()
#     password = serializers.CharField(write_only=True, style={'input_type','password'})

#     class Meta:
#         model = get_user_model()
#         fields = ('username','password','email')
#         write_only_fields = ('password')
#         read_only_fields = ('is_staff','is_superuser','is_active')

#     def create(self, validated_data):
#         user = super(CreateUserSerializer, self).create(validated_data)
#         user.setpassword(validated_data['password'])
#         user.save()
#         return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodShare
        fields = ('pfp','username','postedAt','image','desc','likes','comments')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodMenu
        fields = ('id', 'image', 'name', 'loc', 'status', 'hours')

class MenuWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuPleaseWork
        fields = ('id','image', 'name', 'loc', 'status', 'hours')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ('id', 'menu', 'name', 'image')