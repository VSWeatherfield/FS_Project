# Generated by Django 4.1.3 on 2022-11-22 14:19

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blog_date_creation'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='date_activity',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
