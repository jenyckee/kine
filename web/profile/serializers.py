from rest_framework import serializers
from profile.models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = ['first_name', 'last_name', 'assignments', 'email']


