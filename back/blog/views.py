from django.shortcuts import render, get_object_or_404
from .models import Blog

def index(request):
    return render(request, 'index.html')

def detail(request, blog_id):
    blog = get_object_or_404(Blog, pk=blog_id)
    return render(request, 'index.html', { 'blog': blog })

def list(request):
    blogs = Blog.objects.all()

    return render(request, 'list.html', { 'blogs': blogs })

