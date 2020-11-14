from rest_framework import generics
from assignment.models import Assignment
from assignment.serializers import AssignmentSerializer

# Create your views here.
class AssignmentList(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    filterset_fields = ['owner']

class AssignmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
