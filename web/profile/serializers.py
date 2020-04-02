from rest_framework import serializers
from profile.models import Profile, Excercise, Assignment
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = ['first_name', 'last_name', 'assignments', 'email']

class ExcerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excercise
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'
