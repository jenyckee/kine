from rest_framework import serializers
from profile.models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = ['user', 'first_name', 'assignments', 'role', 'last_name', 'email']

    def create(self, validated_data):

        # Save User object
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        
        profile = Profile.objects.create(user=user, **validated_data)
        return profile