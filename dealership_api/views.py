from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import CarSerializer
from .models import Car

class CarList(generics.ListCreateAPIView):
    queryset = Car.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = CarSerializer # tell django what serializer to use

class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all().order_by('id')
    serializer_class = CarSerializer