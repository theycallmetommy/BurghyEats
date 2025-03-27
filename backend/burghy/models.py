from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    banner = models.CharField(max_length=9)

class FoodShare(models.Model):
    title = models.CharField(max_length=20)
    image = models.ImageField()
    text = models.TextField()

class FoodMenu(models.Model):
    loc = models.CharField(max_length=20)

class FoodItem(models.Model):
    menu = models.ForeignKey(FoodMenu, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    image = models.ImageField()



