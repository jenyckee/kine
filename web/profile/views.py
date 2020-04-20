  
from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer
from django.db.models.functions import Concat   
from django.db.models import Value as V


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    def get_queryset(self):
        queryset = User.objects.all()
        is_patient = self.request.query_params.get('is_patient', None)
        full_name = self.request.query_params.get('full_name', None)
        if is_patient is not None:
            queryset = queryset.filter(is_patient=True)
        if full_name is not None:
            queryset = User.objects.annotate(full_name=Concat('first_name', V(' '), 'last_name')).filter(full_name__icontains=full_name)
        return queryset
