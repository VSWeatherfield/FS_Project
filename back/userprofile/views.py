from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
  queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return UserProfile.objects.filter(user_id=self.request.query_params['user'])
    return super().get_queryset()


class GetUserProfileView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })

class UpdateUserProfileView(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            data = self.request.data
            user_image = data['user_image']
            location = data['location']
            num_views = data['num_views']
            date_activity = data['date_activity']
            last_answer = data['last_answer']

            UserProfile.objects.filter(user=user).update(user_image=user_image, location=location, num_views=num_views, date_activity=date_activity, last_answer=last_answer)

            userprofile = UserProfile.objects.get(user=user)
            userprofile = UserProfileSerializer(userprofile)

            return Response({ 'profile': userprofile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when updating profile' })