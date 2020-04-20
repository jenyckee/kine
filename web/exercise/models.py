from django.db import models
from profile.models import User

class Exercise(models.Model):
    video_url = models.TextField()
    name = models.CharField(max_length=100, default='')
    made_by = models.ForeignKey(User, related_name='exercises', on_delete=models.CASCADE, blank=True, null=True)


class Complaint(models.Model):
    description = models.TextField()


class Patient(models.Model):
    therapist = models.ForeignKey(User, related_name="+", on_delete=models.CASCADE)
    user = models.OneToOneField(User, related_name="+", on_delete=models.CASCADE)

    complaints = models.TextField(blank=True, default="")