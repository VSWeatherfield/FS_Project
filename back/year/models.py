from django.db import models
from olymp.models import Olymp

class Year(models.Model):
    title = models.IntegerField()
    date_creation = models.DateTimeField()

    olymp =  models.ForeignKey(Olymp, on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.olymp.title + ' ' + str(self.title)
