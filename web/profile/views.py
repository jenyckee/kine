from .models import Profile, Excercise, Assignment
from .serializers import ProfileSerializer, ExcerciseSerializer, AssignmentSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

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
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer