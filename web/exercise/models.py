from django.db import models
from profile.models import Therapist

class Exercise(models.Model):
  video_url = models.TextField()
  name = models.CharField(max_length=100, default='')
  made_by = models.ForeignKey(Therapist, related_name='exercises', on_delete=models.CASCADE, blank=True, null=True)
