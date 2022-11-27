from django.shortcuts import render
from rest_framework import viewsets
from .models import UserProfile
from .serializers import UserProfileSerializer

# Create your views here.
class UserProfileViewSet(viewsets.ModelViewSet):
  queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return UserProfile.objects.filter(user_id=self.request.query_params['user'])
    return super().get_queryset()

