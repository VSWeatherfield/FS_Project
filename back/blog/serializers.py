from rest_framework import serializers
from .models import Blog

from userprofile.serializers import UserSerializer
from answer.serializers import AnswerSerializer

class BlogSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  answer_set = AnswerSerializer(read_only=True, many=True)

  class Meta:
    model = Blog
    fields = ['id', 'title', 'description', 'topic', 'num_views', 'num_answers', 'date_activity', 'num_likes', 'date_creation', 'answer_set', 'user']


class BlogsSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)

  class Meta:
    model = Blog
    fields = ['id', 'title', 'description', 'topic', 'num_views', 'num_answers', 'date_activity', 'num_likes', 'date_creation', 'answer_set', 'user']