from django.db import models

class Excercise(models.Model):
  video_url = models.TextField()

class Patient(models.Model):
  first_name = models.CharField(max_length=100, blank=True, default='')
  last_name = models.CharField(max_length=100, blank=True, default='')
  email = models.CharField(max_length=100, blank=True, default='')

class Assignment(models.Model):
  excercise = models.ForeignKey(Excercise, on_delete=models.CASCADE)
  owner = models.ForeignKey('auth.User', related_name='assignments', on_delete=models.CASCADE)
  completed = models.BooleanField()
