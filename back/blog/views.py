from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, mixins, permissions

from .models import Blog
from .serializers import BlogSerializer, BlogsSerializer

import datetime

'''
class BlogViewSet(viewsets.ModelViewSet):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer

  def get_serializer_class(self):
    if 'pk' in self.kwargs:
      return BlogSerializer
    return BlogsSerializer

  def perform_create(self, serializer):
    serializer.validated_data['num_views'] = 1
    serializer.validated_data['num_answers'] = 1
    serializer.validated_data['date_activity'] = datetime.datetime.today()

    serializer.validated_data['num_likes'] = 1
    serializer.validated_data['date_creation'] = datetime.datetime.today()

    serializer.validated_data['user'] = self.request.user
    return super().perform_create(serializer)
'''
class BlogViewSet(viewsets.ModelViewSet):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer

  def get_serializer_class(self):
    if 'pk' in self.kwargs:
      return BlogSerializer
    return BlogsSerializer

  def perform_create(self, serializer):
    serializer.validated_data['num_views'] = 0
    serializer.validated_data['num_answers'] = 0
    serializer.validated_data['date_activity'] = datetime.datetime.today()

    serializer.validated_data['num_likes'] = 0
    serializer.validated_data['date_creation'] = datetime.datetime.today()

    serializer.validated_data['user'] = self.request.user
    return super().perform_create(serializer)


class MyBlogsViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
  queryset = Blog.objects.all()
  serializer_class = BlogsSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    return Blog.objects.filter(user=self.request.user)