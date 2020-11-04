from exercise.models import Exercise, Patient
from exercise.serializers import ExerciseSerializer, PatientSerializer, PatientDetailSerializer
from rest_framework import generics

class ExerciseList(generics.ListCreateAPIView):
    serializer_class = ExerciseSerializer

    def get_queryset(self):
        queryset = Exercise.objects.all()
        user_id = self.request.query_params.get('user_id', None)
        if user_id is not None:
            queryset = queryset.filter(made_by__id=user_id)
        return queryset


class ExerciseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class PatientList(generics.ListCreateAPIView):
    serializer_class = PatientSerializer

    def get_queryset(self):
        queryset = Patient.objects.all()
        therapist_id = self.request.query_params.get('therapist_id', None)
        if therapist_id is not None:
            queryset = queryset.filter(therapist__id=therapist_id, user__is_patient=True)
        return queryset


class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientDetailSerializer