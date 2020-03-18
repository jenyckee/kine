from django.urls import path
from kine import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('exercises/', views.ExcerciseList.as_view()),
    path('exercises/<int:pk>/', views.ExcerciseDetail.as_view()),
    path('patients/', views.PatientList.as_view()),
    path('patients/<int:pk>/', views.PatientDetail.as_view()),
    path('assignments/', views.AssignmentList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)