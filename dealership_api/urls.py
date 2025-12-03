from django.urls import path
from . import views

urlpatterns = [
    # api/cars will be routed to the CarList view for handling
    path('api/cars', views.CarList.as_view(), name='car_list'), 
    # api/cars will be routed to the CarDetail view for handling
    path('api/cars/<int:pk>', views.CarDetail.as_view(), name='car_detail'), 
]