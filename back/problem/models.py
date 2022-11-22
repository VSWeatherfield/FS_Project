from django.db import models
from year.models import Year

class Problem(models.Model):
    title = models.IntegerField()
    description = models.TextField()

    date_creation = models.DateTimeField()
    year =  models.ForeignKey(Year, on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.year.olymp.title + ' ' + str(self.year.title) + ' ' + str(self.title)
