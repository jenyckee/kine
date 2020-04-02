from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from patient.views import PatientViewSet

patient_list = PatientViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    url(r'patients$', patient_list, name='patient_list'),
]