# Generated by Django 5.1.6 on 2025-04-22 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('burghy', '0006_menupleasework'),
    ]

    operations = [
        migrations.AddField(
            model_name='menupleasework',
            name='image',
            field=models.CharField(default='https://images.compassdigital.org/c5d61e82e3ab4f2a9d5b12e0b638db791728490779368.png', max_length=100),
            preserve_default=False,
        ),
    ]
