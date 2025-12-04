from django.db import models

# Create your models here.
class Car(models.Model):
    make = models.CharField(max_length=32)
    model = models.CharField(max_length=32)
    year = models.IntegerField()
    photo = models.ImageField(upload_to='cars/', null=True, blank=True)
    trim = models.CharField(max_length=32, blank=True, null=True)
    color = models.CharField(max_length=32, blank=True, null=True)
    price_listed = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    milage = models.IntegerField(blank=True, null=True)
    sale_pending = models.BooleanField(blank=True, null=True)
    sold = models.BooleanField(blank=True, null=True)
    days_on_lot = models.IntegerField(blank=True, null=True)
    buyer = models.CharField(max_length=32, blank=True, null=True)
    price_sold = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
