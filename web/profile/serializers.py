from allauth.account.adapter import get_adapter
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User, Patient, Therapist
from exercise.serializers import ExerciseSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'is_patient', 'is_therapist', 'first_name', 'last_name')

class PatientSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Patient
        fields = ('id', 'user', 'assignments', 'name')
    
    def get_name(self, obj): 
        user = UserSerializer(obj.user).data
        return user['first_name'] + user['last_name']

class TherapistSerializer(serializers.ModelSerializer):
    exercises = serializers.SerializerMethodField()
    patients = serializers.SerializerMethodField()

    user = UserSerializer() 
    class Meta:
        model = Therapist
        level = 1
        fields = ('id', 'user', 'patients', 'exercises')

    def get_exercises(self, obj):
        exercises = ExerciseSerializer(obj.exercises.all(), many=True).data
        return exercises

    def get_patients(self, obj):
        patients = PatientSerializer(obj.patients.all(), many=True).data
        return patients



class CustomRegisterSerializer(RegisterSerializer):
    is_patient = serializers.BooleanField()
    is_therapist = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_patient', 'is_therapist')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'is_patient': self.validated_data.get('is_patient', ''),
            'is_therapist': self.validated_data.get('is_therapist', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.is_patient = self.cleaned_data.get('is_patient')
        user.is_therapist = self.cleaned_data.get('is_therapist')
        user.save()
        adapter.save_user(request, user, self)
        if user.is_patient:
            patient = Patient()
            patient.user = user
            patient.save()
        else:
            therapist = Therapist()
            therapist.user = user
            therapist.save()
        return user


class TokenSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user', 'user_type')

    def get_user_type(self, obj):
        serializer_data = UserSerializer(
            obj.user
        ).data
        is_patient = serializer_data.get('is_patient')
        is_therapist = serializer_data.get('is_therapist')
        return {
            'is_patient': is_patient,
            'is_therapist': is_therapist
        }
