from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.generics import CreateAPIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
# from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, ShareSerializer, MenuSerializer, ItemSerializer, MenuWorkSerializer
from .models import User, FoodShare, FoodMenu, FoodItem, MenuPleaseWork

# Create your views here.

# class CreateUserAPIView(CreateAPIView):
#     serializer_class = CreateUserSerializer
#     permission_classes = [AllowAny]

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data = request.data)
#         serializer.is_valid(raise_exception = True)
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)

#         token = Token.objects.create(user=serializer.instance)
#         token.data = {"token": token_key}
#         return Response(
#             {**serializer.data, **token.data},
#             status=status.HTTP_201_CREATED,
#             headers=headers
#         )

# class LogoutUserAPIView(APIView):
#     queryset = get_user_model().objects.all()

#     def get(self, request, format=None):
#         request.user.auth_token.delete()
#         return Response(status=status.HTTP_200_OK)

# @api_view(['POST'])
# @authentication_classes([SessionAuthentication, BasicAuthentication])
# @permission_classes([IsAuthenticated])
# def login(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     user = authenticate(username=username, password=password)
#     if user is not None:
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({'token': token.key})
#     else:
#         return Response({"error":"Invalid Credentials"}, status=400)

class LoginView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        content = {
            'user': str(request.user),
            'auth': str(request.auth),
        }
        return Response(content)
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            (token, created) = Token.objects.get_or_create(user=user)
            return Response({'token':token.key})
        else:
            return Response({"error":"Invalid Credentials"}, status=400)


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