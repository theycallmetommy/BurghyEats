# Generated by Django 5.1.6 on 2025-05-15 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('burghy', '0009_foodlocation_alter_fooditem_menu_userpost_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='MenuPleaseWork',
        ),
        migrations.AlterField(
            model_name='foodlocation',
            name='image',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='foodlocation',
            name='name',
            field=models.CharField(max_length=25),
        ),
    ]
