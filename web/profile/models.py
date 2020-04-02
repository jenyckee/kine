from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

class Excercise(models.Model):
  video_url = models.TextField()
  name = models.CharField(max_length=100, default='')

class Profile(models.Model):
  user=models.OneToOneField(User, primary_key=True, related_name='user', on_delete=models.CASCADE)
  first_name = models.CharField(max_length=100, blank=True, default='')
  last_name = models.CharField(max_length=100, blank=True, default='')
  email = models.CharField(max_length=100, blank=True, default='')

  is_physio = models.BooleanField(default=False)

  @receiver(post_save, sender=User)
  def create_user_profile(sender, instance, created, **kwargs):
      if created:
          Profile.objects.create(user=instance)

  @receiver(post_save, sender=User)
  def save_user_profile(sender, instance, **kwargs):
      instance.user.save()

  def __str__(self):
      return 'user_id: ' + str(self.user.id) + ', ' + self.user.first_name + ' ' + self.user.last_name

class Assignment(models.Model):
  excercise = models.ForeignKey(Excercise, on_delete=models.CASCADE)
  owner = models.ForeignKey(Profile, related_name='assignments', on_delete=models.CASCADE)
  completed = models.BooleanField()
