from django.db import models
from django.contrib.auth.models import User
from blog.models import Blog

class Answer(models.Model):
    description = models.TextField()

    num_likes = models.IntegerField()
    date_creation = models.DateTimeField()

    blog =  models.ForeignKey(Blog, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)