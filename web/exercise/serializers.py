from rest_framework import serializers
from exercise.models import Exercise, Patient
from profile.serializers import UserSerializer
from profile.models import User


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'


class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(source='user',  queryset=User.objects.all(), write_only=True)
    
    class Meta:
        model = Patient
        fields = ('id', 'user_id', 'user', 'complaints', 'therapist', 'assignments')