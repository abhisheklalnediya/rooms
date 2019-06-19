from django.db import models
from django.contrib.postgres.fields import ArrayField

class Building(models.Model):
    name = models.CharField(max_length=150)
    address = models.TextField()
    landmarks = ArrayField(models.CharField(max_length=80), size=3)

    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)


ROOM_TYPE_CHOICES = (
        ("1 BHK", "1 BHK"),
        ("2 BHK", "2 BHK"),
        ("3 BHK", "3 BHK"),
        ("Studio", "Studio"),

    )
class Room(models.Model):
    flat_number = models.CharField(max_length = 20)
    area = models.IntegerField()
    rent = models.IntegerField()
    room_type = models.CharField(max_length=10, choices=ROOM_TYPE_CHOICES)
    bathrooms_count =  models.IntegerField()
    maintenance_amount = models.IntegerField()
    electricity_account_number = models.CharField(max_length = 20)
    
    building = models.ForeignKey(Building, on_delete=models.CASCADE)

    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['flat_number', 'building']
