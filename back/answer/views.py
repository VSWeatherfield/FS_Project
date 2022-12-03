from django.shortcuts import render
from rest_framework import viewsets
from .models import Answer
from .serializers import AnswerSerializer
import datetime

# Create your views here.
class AnswerViewSet(viewsets.ModelViewSet):
  queryset = Answer.objects.all()
  serializer_class = AnswerSerializer

  def get_queryset(self):
    if 'blog' in self.request.query_params:
      return Answer.objects.filter(blog_id=self.request.query_params['blog'])
    return super().get_queryset()

  def perform_create(self, serializer):
    serializer.validated_data['num_likes'] = 0
    serializer.validated_data['date_creation'] = datetime.datetime.today()

    serializer.validated_data['user'] = self.request.user
    
    return super().perform_create(serializer)

