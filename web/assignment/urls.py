from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from assignment.views import AssignmentList, AssignmentDetail


urlpatterns = [
    path('assignments/', AssignmentList.as_view()),
    path('assignments/<int:pk>', AssignmentDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)