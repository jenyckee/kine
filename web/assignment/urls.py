from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from assignment.views import AssignmentList


urlpatterns = [
    # url(r'users/(?P<pk>[0-9]+)$', user_detail, name='user_detail'),
    # url(r'users$', user_list, name='user_list'),
    # path('exercises/', views.ExcerciseList.as_view()),
    # path('exercises/<int:pk>/', views.ExcerciseDetail.as_view()),
    path('assignments/', AssignmentList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)