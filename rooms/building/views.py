from building.serializers import BuildingSerializer, RoomSerializer
from django.shortcuts import get_object_or_404
from building.models import Building, Room
from rest_framework import generics, serializers
from django.db import IntegrityError

class BuildingListCreate(generics.ListCreateAPIView):
    # """
    #     GET:
    #       Get the building list
    #     POST:
    #       Create a building
    # """

    serializer_class = BuildingSerializer

    def get_queryset(self):
        return Building.objects.all()

class BuildingGetUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    # """
    #     GET:
    #       Get the building
    #     PATCH/PUT:
    #       Update the building
    #     DELETE:
    #       Delete the building
    # """

    serializer_class = BuildingSerializer

    def get_queryset(self):
        return Building.objects.all()


class RoomListCreate(generics.ListCreateAPIView):
    # """
    #     GET:
    #       Get the room list
    #     POST:
    #       Create a room
    # """

    serializer_class = RoomSerializer

    def get_queryset(self):
        building_id = self.kwargs["building"]
        building = get_object_or_404(Building, id=building_id)
        return Room.objects.filter(building = building)

    def get_serializer_context(self):
        return {"building_id" : self.kwargs["building"], "request" : self.request}
    
    def perform_create(self, serializer):
        building = get_object_or_404(Building, id=self.kwargs["building"])
        try:
            serializer.save(building=building)
        except IntegrityError:
            raise serializers.ValidationError({"flat_number": ['Room already exists in building']})

class RoomGetUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    # """
    #     GET:
    #       Get the room
    #     PATCH/PUT:
    #       Update the room
    #     DELETE:
    #       Delete the room
    # """

    serializer_class = RoomSerializer

    def get_queryset(self):
        building_id = self.kwargs["building"]
        building = get_object_or_404(Building, id=building_id)
        return Room.objects.filter(building = building)
        
    def get_serializer_context(self):
        return {"building_id" : self.kwargs["building"], "request" : self.request}
    
    def perform_update(self, serializer):
        building = get_object_or_404(Building, id=self.kwargs["building"])
        try:
            serializer.save(building=building)
        except IntegrityError:
            raise serializers.ValidationError({"flat_number": ['Room already exists in building']})


