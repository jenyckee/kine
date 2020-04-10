  
from rest_framework import viewsets

from .models import User, Patient, Therapist
from .serializers import UserSerializer, PatientSerializer,TherapistSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class PatientViewSet(viewsets.ModelViewSet):
    serializer_class = PatientSerializer
    queryset = Patient.objects.all()

class TherapistViewSet(viewsets.ModelViewSet):
    serializer_class = TherapistSerializer
    queryset = Therapist.objects.all()