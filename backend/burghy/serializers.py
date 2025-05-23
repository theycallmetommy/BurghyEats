from rest_framework import serializers
from .models import User, UserPost, FoodLocation, MenuItem, MenuOption, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'pfp', 'name', 'username', 'password', 'banner')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    likes = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all(), required=False)

    class Meta:
        model = UserPost
        fields = ['id', 'user', 'image', 'content', 'posted_at', 'likes']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodLocation
        fields = ('id', 'image', 'name', 'loc', 'opens_at', 'closes_at')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('id', 'name', 'description', 'image', 'price', 'location', 'meal_swipe_elegible')

class MenuOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuOption
        fields = ('id', 'item', 'category', 'choices')

