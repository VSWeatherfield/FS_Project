from django.shortcuts import render
from rest_framework import viewsets
from .models import Year
from .serializers import YearSerializer

# Create your views here.
class YearViewSet(viewsets.ModelViewSet):
  queryset = Year.objects.all()
  serializer_class = YearSerializer

  def get_queryset(self):
    if 'olymp' in self.request.query_params:
      return Year.objects.filter(olymp_id=self.request.query_params['olymp'])
    return super().get_queryset()