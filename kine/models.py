from django.db import models
from django.contrib.auth.models import User

class Excercise(models.Model):
  video_url = models.TextField()
  name = models.CharField(max_length=100, default='')

class Patient(models.Model):
  user=models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile", default=0)
  first_name = models.CharField(max_length=100, blank=True, default='')
  last_name = models.CharField(max_length=100, blank=True, default='')
  email = models.CharField(max_length=100, blank=True, default='')
  def __str__(self):
    return self.user.username

class Assignment(models.Model):
  excercise = models.ForeignKey(Excercise, on_delete=models.CASCADE)
  owner = models.ForeignKey(Patient, related_name='assignments', on_delete=models.CASCADE)
  completed = models.BooleanField()
