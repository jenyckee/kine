from rest_framework import serializers
from kine.models import Patient, Excercise, Assignment
from django.contrib.auth.models import User

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Patient
        fields = ['id', 'first_name', 'assignments']

class ExcerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excercise
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'
