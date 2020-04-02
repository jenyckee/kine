from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url
from exercise.views import ExerciseList, ExerciseDetail


urlpatterns = [
    path('exercises/', ExerciseList.as_view()),
    path('exercises/<int:pk>/', ExerciseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)