from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, ShareSerializer, MenuSerializer, ItemSerializer, MenuWorkSerializer
from .models import User, FoodShare, FoodMenu, FoodItem, MenuPleaseWork

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class ShareView(viewsets.ModelViewSet):
    serializer_class = ShareSerializer
    queryset = FoodShare.objects.all()

class MenuView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = FoodMenu.objects.all()

class WorkView(viewsets.ModelViewSet):
    serializer_class = MenuWorkSerializer
    queryset = MenuPleaseWork.objects.all()

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = FoodItem.objects.all()