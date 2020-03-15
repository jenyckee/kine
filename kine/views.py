from .models import Patient, Excercise, Assignment
from .serializers import PatientSerializer, ExcerciseSerializer, UserSerializer, AssignmentSerializer
from rest_framework import generics
from django.contrib.auth.models import User

class PatientList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
  
class ExcerciseList(generics.ListCreateAPIView):
    queryset = Excercise.objects.all()
    serializer_class = ExcerciseSerializer

class ExcerciseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Excercise.objects.all()
    serializer_class = ExcerciseSerializer

class AssignmentList(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer