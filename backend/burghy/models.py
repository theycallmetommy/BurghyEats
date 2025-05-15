from django.db import models

class User(models.Model):
    pfp = models.CharField(max_length=150, default="https://avatar.iran.liara.run/public")
    name = models.CharField(max_length=25, default="Unnamed")
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    banner = models.CharField(max_length=9)

    def __str__(self):
        return self.username

class UserPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    image = models.CharField(max_length=100)
    content = models.TextField()
    posted_at = models.DateTimeField(auto_now_add=True)

class FoodLocation(models.Model):
    image = models.CharField(max_length=100)
    name = models.CharField(max_length=25)
    loc = models.CharField(max_length=20)
    opens_at = models.TimeField()
    closes_at = models.TimeField()

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)  # price in dollars
    location = models.ForeignKey(FoodLocation, on_delete=models.CASCADE, related_name='items')

class PaymentMethod(models.Model):
    METHOD_CHOICES = [
        ('swipe', 'Meal Swipe'),
        ('dining_dollars', 'Dining Dollars'),
        ('cardinal_cash', 'Cardinal Cash'),
        ('credit_card', 'Credit Card'),
    ]
    name = models.CharField(max_length=20, choices=METHOD_CHOICES, unique=True)

class AllowedPayment(models.Model):
    item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, related_name='allowed_payments')
    method = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)

class MenuOption(models.Model):
    item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, related_name='options')
    category = models.CharField(max_length=50)  # e.g., "Drink", "Sauce"
    choices = models.JSONField()

