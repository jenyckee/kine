from django.db import models
from profile.models import Profile

class Patient(models.Model):
    """ Patient Model """
    profile = models.OneToOneField(Profile, related_name='profile', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "User Id: " + str(self.profile.user_id)