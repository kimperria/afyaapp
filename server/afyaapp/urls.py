from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.helloAfya, name='testAPI'),
    path('new-patient/', views.RegisterNewPatient.as_view(), name='new-patient'),
    path('patients/', views.PatientsDataView.as_view(), name='patients'),
    path('patient/<int:patient_id>/', views.PatientInformationView.as_view(), name='single-patient'),
    path('appointment/<int:appointment_id>/', views.PatientAppointmentView.as_view(), name='single-appointment'),
    path('appointments/', views.AppointmentInformationView.as_view(), name='appointment-records')
]
