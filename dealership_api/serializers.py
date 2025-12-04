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
            'photo',
            'trim',
            'color',
            'price_listed',
            'milage',
            'sale_pending',
            'sold',
            'days_on_lot',
            'buyer',
            'price_sold'
        ) # tell django which fields to include
