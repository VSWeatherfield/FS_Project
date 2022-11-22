from django.db import models

class Olymp(models.Model):
    title = models.CharField(max_length=100)
    date_creation = models.DateTimeField()


    def __str__(self) -> str:
        return self.title
