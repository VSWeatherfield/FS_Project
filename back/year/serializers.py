from rest_framework import serializers
from .models import Year

from problem.serializers import ProblemSerializer

class YearSerializer(serializers.ModelSerializer):
  problem_set = ProblemSerializer(read_only=True, many=True)

  class Meta:
    model = Year
    fields = ['id', 'title', 'date_creation', 'olymp', 'problem_set']

class YearSerializer(serializers.ModelSerializer):
  problem_set = ProblemSerializer(read_only=True, many=True)

  class Meta:
    model = Year
    fields = ['id', 'title', 'date_creation', 'olymp', 'problem_set']