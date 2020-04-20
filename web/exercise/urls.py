from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from exercise import views


urlpatterns = [
    path('exercises/', views.ExerciseList.as_view()),
    path('exercises/<int:pk>', views.ExerciseDetail.as_view()),
    path('patients/', views.PatientList.as_view()),
    path('patients/<int:pk>', views.PatientDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)