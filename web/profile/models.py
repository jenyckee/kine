from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser): 
    is_therapist = models.BooleanField()
    is_patient = models.BooleanField()

    def __str__(self):
        return self.email