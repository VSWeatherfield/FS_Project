from django.db import models
from django.contrib.auth.models import User

class Blog(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    topic = models.CharField(max_length=100)

    num_views = models.IntegerField()
    num_answers = models.IntegerField()
    date_activity = models.DateTimeField()

    num_likes = models.IntegerField()
    date_creation = models.DateTimeField()
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.title
