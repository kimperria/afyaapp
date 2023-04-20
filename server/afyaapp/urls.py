from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.helloAfya, name='testAPI'),
    path('auth/login/', views.LoginAPIView.as_view(), name='login'),
    path('patient/', views.PatientInformationView.as_view(), name='patient-record'),
    path('patient/<int:patient_id>/', views.PatientInformationView.as_view(), name='single-patient'),
    path('appointment/<int:appointment_id>/', views.PatientAppointmentView.as_view(), name='single-appointment'),
    path('appointments/', views.AppointmentInformationView.as_view(), name='appointment-records')
]
