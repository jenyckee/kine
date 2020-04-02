from django.contrib.auth.models import User
from rest_framework import serializers
from profile.models import Profile
from profile.serializers import ProfileSerializer
from patient.models import Patient

class PatientSerializer(serializers.ModelSerializer):
  profile = ProfileSerializer()
  
  class Meta:
          model = Patient
          fields = '__all__'