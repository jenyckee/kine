from django.urls import path
from profile import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from .views import UserViewSet, PatientViewSet, TherapistViewSet

# user_list = ProfileViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })

# user_detail = ProfileViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })

patient_list = PatientViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

therapist_list = TherapistViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

urlpatterns = [
    # url(r'users/(?P<pk>[0-9]+)$', user_detail, name='user_detail'),
    # url(r'users$', user_list, name='user_list'),
    url(r'patients$', patient_list, name='patient_list'),
    url(r'therapists', therapist_list, name='therapist_list')
]

urlpatterns = format_suffix_patterns(urlpatterns)