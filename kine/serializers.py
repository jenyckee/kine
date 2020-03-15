from rest_framework import serializers
from kine.models import Patient, Excercise, Assignment
from django.contrib.auth.models import User

class PatientSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(required=False, allow_blank=True, max_length=100)

    def create(self, validated_data):
        """
        Create and return a new `Excercise` instance, given the validated data.
        """
        return Excercise.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Excercise` instance, given the validated data.
        """
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.save()
        return instance

class ExcerciseSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    video_url = serializers.CharField(required=False, allow_blank=True, max_length=100)

    def create(self, validated_data):
        """
        Create and return a new `Excercise` instance, given the validated data.
        """
        return Excercise.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Excercise` instance, given the validated data.
        """
        instance.video_url = validated_data.get('video_url', instance.video_url)
        instance.save()
        return instance

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id', 'excercise', 'owner', 'completed']

    owner = serializers.ReadOnlyField(source='owner.username')
    
    def create(self, validated_data):
        """
        Create and return a new `Excercise` instance, given the validated data.
        """
        return Assignment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Excercise` instance, given the validated data.
        """
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    assignments = serializers.PrimaryKeyRelatedField(many=True, queryset=Assignment.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'assignments']