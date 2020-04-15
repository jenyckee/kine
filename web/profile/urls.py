from django.urls import path
from profile import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from .views import UserViewSet, PatientViewSet, TherapistViewSet

# user_list = ProfileViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })

patient_detail = PatientViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

patient_list = PatientViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

therapist_list = TherapistViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

therapist_detail = TherapistViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    url(r'patients/(?P<pk>[0-9]+)$', patient_detail, name='patient_detail'),
    url(r'patients$', patient_list, name='patient_list'),
    url(r'therapists/(?P<pk>[0-9]+)$', therapist_detail, name='therapist_detail'),
    url(r'therapists$', therapist_list, name='therapist_list')
]

urlpatterns = format_suffix_patterns(urlpatterns)