from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser): 
    is_therapist = models.BooleanField()
    is_patient = models.BooleanField()

    def __str__(self):
        return self.username

class Therapist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, related_name='patients', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.user.username
