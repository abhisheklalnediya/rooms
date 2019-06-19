from building.models import Building, Room
from rest_framework import serializers
from django.shortcuts import get_object_or_404

class BuildingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Building
        fields = ('name', 'address', 'landmarks', 'id')
        read_only_fields = ('id',)

class RoomSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Room
        fields = ('flat_number', 'room_type', 'area','rent','maintenance_amount','electricity_account_number', 'bathrooms_count', 'id')
        read_only_fields = ('id',)