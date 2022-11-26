from rest_framework import serializers
from .models import Olymp

from year.serializers import YearSerializer

class OlympSerializer(serializers.ModelSerializer):
  year_set = YearSerializer(read_only=True, many=True)

  class Meta:
    model = Olymp
    fields = ['id', 'title', 'date_creation', 'year_set']

class OlympsSerializer(serializers.ModelSerializer):
  year_set = YearSerializer(read_only=True, many=True)

  class Meta:
    model = Olymp
    fields = ['id', 'title', 'date_creation', 'year_set']