from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    user_image = models.ImageField(upload_to='usericons', null=True)

    #first_name = models.CharField(max_length=255, default='')
    #last_name = models.CharField(max_length=255, default='')

    location = models.CharField(max_length=30, blank=True)
    num_views = models.IntegerField(default=0)

    date_activity = models.DateTimeField(default=timezone.now)
    last_answer = models.DateTimeField(default=timezone.now)
    
    def __str__(self) -> str:
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()