from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.helloAfya, name='testAPI'),
    path('auth/login/', views.LoginAPIView.as_view(), name='login'),
    path('patient/', views.PatientInformationView.as_view(), name='patient-record'),
    path('appointments/', views.AppointmentInformationSerializer.as_view(), name='appointment-records')
]
