from django.contrib import admin
from .models import Profile, PatientInformation, AppointmentDetails, PatientRecord

admin.site.register(Profile)
admin.site.register(PatientInformation)
admin.site.register(AppointmentDetails)
admin.site.register(PatientRecord)
