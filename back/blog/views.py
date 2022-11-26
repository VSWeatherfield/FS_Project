from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from back.urls import router

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

  def get_serializer_class(self):
    if 'pk' in self.kwargs:
      return BlogSerializer
    return BlogsSerializer

router.register(r'blogs', BlogViewSet)