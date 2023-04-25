from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# from rest_framework_simplejwt.tokens import RefreshToken

class Profile(models.Model):
    user = models.OneToOneField(User, related_name='user_profile', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username
    
        
    # def tokens(self):
    #     refresh = RefreshToken.for_user(self)
    #     return {
    #         'refresh-token': str(refresh),
    #         'access-token': str(refresh.access_token)
    #     }

class PatientInformation(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, null=True)
    registered_on = models.DateField(default=timezone.now)

    def __str__(self):
        return f'Fullname: {self.first_name} ' + self.last_name

class AppointmentDetails(models.Model):
    patient = models.ForeignKey(PatientInformation, on_delete=models.CASCADE)
    height = models.IntegerField()
    weight = models.IntegerField()
    body_mass_index = models.IntegerField()

    def __str__(self):
        return self.patient.first_name

class PatientRecord(models.Model):

    GOOD = 1
    POOR = 2
    UNDEFINED = 0

    PATIENT_CHOICE = (
        (GOOD, 'good'),
        (POOR, 'poor'),
        (UNDEFINED, 'undefined')
    )

    YES = 1
    NO = 2
    DOUBTFUL = 0

    PATIENT_ANSWER = (
        (YES, 'yes'),
        (NO, 'no'),
        (DOUBTFUL, 'doubtful')
    )

    general_health = models.IntegerField(choices=PATIENT_CHOICE, default=UNDEFINED)
    is_onDiet = models.IntegerField(choices=PATIENT_ANSWER, default=PATIENT_ANSWER, null=True, blank=True)
    is_onDrugs = models.IntegerField(choices=PATIENT_ANSWER, default=PATIENT_ANSWER, null=True, blank=True)
    patient = models.ForeignKey(PatientInformation, on_delete=models.CASCADE)

    def __str__(self):
        return self.general_health
