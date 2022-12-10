from rest_framework import serializers
from .models import Answer

from userprofile.serializers import UserSerializer

class AnswerSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  #post_set = PostSerializer(read_only=True, many=True)

  class Meta:
    model = Answer
    fields = ['id', 'description', 'num_likes', 'date_creation', 'blog', 'user']
    read_only_fields = ['date_creation', 'num_likes']
    ordering = ['-id']