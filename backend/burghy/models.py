from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    banner = models.CharField(max_length=9)

class FoodShare(models.Model):
    pfp = models.ImageField()
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    image = models.ImageField()
    desc = models.TextField()

class FoodMenu(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=20)
    loc = models.CharField(max_length=20)
    status = models.BooleanField()
    hours = models.CharField(max_length=20)

class MenuPleaseWork(models.Model):
    image = models.CharField(max_length=100)
    name = models.CharField(max_length=30)
    loc = models.CharField(max_length=20)
    status = models.BooleanField()
    hours = models.CharField(max_length=20)

class FoodItem(models.Model):
    menu = models.ForeignKey(FoodMenu, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    image = models.ImageField()



