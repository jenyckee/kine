from .models import Patient, Excercise, Assignment
from .serializers import PatientSerializer, ExcerciseSerializer, AssignmentSerializer
from rest_framework import generics
from django.contrib.auth.models import User

class ExcerciseList(generics.ListCreateAPIView):
    queryset = Excercise.objects.all()
    serializer_class = ExcerciseSerializer

class ExcerciseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Excercise.objects.all()
    serializer_class = ExcerciseSerializer

class AssignmentList(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class PatientList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer