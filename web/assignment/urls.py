from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from assignment.views import AssignmentList


urlpatterns = [
    path('assignments/', AssignmentList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)