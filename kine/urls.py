from django.urls import path
from kine import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('excercises/', views.ExcerciseList.as_view()),
    path('excercises/<int:pk>/', views.ExcerciseDetail.as_view()),
    path('patients/', views.UserList.as_view()),
    path('patients/<int:pk>/', views.PatientDetail.as_view()),
    path('assignments/', views.AssignmentList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)