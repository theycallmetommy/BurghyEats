from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, PostSerializer, LocationSerializer, MenuSerializer, PaymentMethodSerializer, AllowedPaymentSerializer, MenuOptionSerializer
from .models import User, UserPost, FoodLocation, MenuItem, PaymentMethod, AllowedPayment, MenuOption

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
    queryset = MenuItem.objects.all()

class PaymentMethodView(viewsets.ModelViewSet):
    serializer_class = PaymentMethodSerializer
    queryset = PaymentMethod.objects.all()

class AllowedPaymentView(viewsets.ModelViewSet):
    serializer_class = AllowedPaymentSerializer
    queryset = AllowedPayment.objects.all()

class MenuOptionView(viewsets.ModelViewSet):
    serializer_class = MenuOptionSerializer
    queryset = MenuOption.objects.all()
