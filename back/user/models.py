from django.db import models

class User(models.Model):
    fullname = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    date_creation = models.DateTimeField()
    date_activity = models.DateTimeField()  

    last_answer = models.DateTimeField()
    num_views = models.IntegerField()


    def __str__(self) -> str:
        return self.username