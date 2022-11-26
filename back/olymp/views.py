from django.shortcuts import render
from rest_framework import viewsets
from .models import Olymp
from .serializers import OlympSerializer, OlympsSerializer

class OlympViewSet(viewsets.ModelViewSet):
  queryset = Olymp.objects.all()
  serializer_class = OlympSerializer

  def get_serializer_class(self):
    if 'pk' in self.kwargs:
      return OlympSerializer
    return OlympsSerializer