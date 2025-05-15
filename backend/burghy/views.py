from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, PostSerializer, LocationSerializer, MenuSerializer, MenuOptionSerializer
from .models import User, UserPost, FoodLocation, MenuItem, MenuOption

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = UserPost.objects.all()

class LocationView(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = FoodLocation.objects.all()

class MenuView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer

    def get_queryset(self):
        queryset = MenuItem.objects.all()
        location_id = self.request.query_params.get('location')
        if location_id is not None:
            queryset = queryset.filter(location_id=location_id)
        return queryset

class MenuOptionView(viewsets.ModelViewSet):
    serializer_class = MenuOptionSerializer
    queryset = MenuOption.objects.all()
