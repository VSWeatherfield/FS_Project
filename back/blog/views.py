import datetime
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, mixins, permissions

from .models import Blog
from .serializers import BlogSerializer, BlogsSerializer

def index(request):
    return render(request, 'index.html')

def detail(request, blog_id):
    blog = get_object_or_404(Blog, pk=blog_id)
    return render(request, 'index.html', { 'blog': blog })

def list(request):
    blogs = Blog.objects.all()

    return render(request, 'list.html', { 'blogs': blogs })

class BlogViewSet(viewsets.ModelViewSet):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer

  def perform_create(self, serializer):
    serializer.validated_data['num_views'] = 0
    serializer.validated_data['num_answers'] = 0
    serializer.validated_data['date_activity'] = datetime.datetime.today()

    serializer.validated_data['num_likes'] = 0
    serializer.validated_data['date_creation'] = datetime.datetime.today()

    serializer.validated_data['user'] = self.request.user
    return super().perform_create(serializer)

  def get_serializer_class(self):
    if 'pk' in self.kwargs:
      return BlogSerializer
    return BlogsSerializer

class MyBlogsViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
  queryset = Blog.objects.all()
  serializer_class = BlogsSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    return Blog.objects.filter(user=self.request.user)