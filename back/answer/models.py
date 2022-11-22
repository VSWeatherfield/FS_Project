from django.db import models
from django.contrib.auth.models import User
from blog.models import Blog

class Answer(models.Model):
    description = models.TextField()
    topic = models.CharField(max_length=100)

    num_likes = models.IntegerField()
    date_creation = models.DateTimeField()

    blog =  models.ForeignKey(Blog, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)