from django.db import models
from profile.models import Patient
from exercise.models import Exercise

class Assignment(models.Model):
  exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
  owner = models.ForeignKey(Patient, related_name='assignments', on_delete=models.CASCADE)
  completed = models.BooleanField()
