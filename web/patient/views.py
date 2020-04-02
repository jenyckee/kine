from rest_framework import viewsets, status
from patient.models import Patient
from patient.serializers import PatientSerializer

class PatientViewSet (viewsets.ModelViewSet):
  queryset = Patient.objects.all()
  serializer_class = PatientSerializer