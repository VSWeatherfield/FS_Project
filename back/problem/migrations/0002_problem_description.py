# Generated by Django 4.1.3 on 2022-11-22 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problem', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='description',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
