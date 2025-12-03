from rest_framework import serializers 
from .models import Car 

# serializers.ModelSerializer just tells django to convert sql to JSON
class CarSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Car # tell django which model to use
        fields = (
            'id', 
            'make',
            'model',
            'year',
            'trim',
            'color',
            'price',
            'milage',
            'sale_pending',
            'sold',
            'days_on_lot'
        ) # tell django which fields to include