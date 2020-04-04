from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

class Profile(models.Model):

    THERAPIST = 1
    PATIENT = 2

    ROLE_CHOICES = (
        (THERAPIST, 'Therapist'),
        (PATIENT, 'Patient'),
    )
    
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True, default=PATIENT)
    user = models.OneToOneField(User, primary_key=True, related_name='user', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, blank=True, default='')
    last_name = models.CharField(max_length=100, blank=True, default='')
    email = models.CharField(max_length=100, blank=True, default='')

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.user.save()

    def __str__(self):
        return 'user_id: ' + str(self.user.id) + ', ' + self.user.first_name + ' ' + self.user.last_name
