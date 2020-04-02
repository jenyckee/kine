from django.db import models

class Exercise(models.Model):
  video_url = models.TextField()
  name = models.CharField(max_length=100, default='')
