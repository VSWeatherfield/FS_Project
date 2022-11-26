from django.shortcuts import render
from rest_framework import viewsets
from .models import Problem
from .serializers import ProblemSerializer

class ProblemViewSet(viewsets.ModelViewSet):
  queryset = Problem.objects.all()
  serializer_class = ProblemSerializer

  def get_queryset(self):
    if 'year' in self.request.query_params:
      return Problem.objects.filter(year_id=self.request.query_params['year'])
    return super().get_queryset()

