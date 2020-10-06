from rest_framework import serializers
from assignment.models import Assignment
from exercise.serializers import ExerciseSerializer

class AssignmentSerializer(serializers.ModelSerializer):
    # exercise = ExerciseSerializer()

    class Meta:
        model = Assignment
        fields = '__all__'