from django.db import models
from django.contrib.auth.models import User

class Excercise(models.Model):
  video_url = models.TextField()
  name = models.CharField(max_length=100, default='')

class Profile(models.Model):
  user=models.OneToOneField(User, primary_key=True, related_name='user', on_delete=models.CASCADE)
  first_name = models.CharField(max_length=100, blank=True, default='')
  last_name = models.CharField(max_length=100, blank=True, default='')
  email = models.CharField(max_length=100, blank=True, default='')

  is_physio = models.BooleanField(default=False)

  def __str__(self):
    return self.user.username

class Practictioner(models.Model):
  user=models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)

class Assignment(models.Model):
  excercise = models.ForeignKey(Excercise, on_delete=models.CASCADE)
  owner = models.ForeignKey(User, related_name='assignments', on_delete=models.CASCADE)
  completed = models.BooleanField()
