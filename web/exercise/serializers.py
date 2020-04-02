from rest_framework import serializers
from exercise.models import Exercise
from django.contrib.auth.models import User

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'