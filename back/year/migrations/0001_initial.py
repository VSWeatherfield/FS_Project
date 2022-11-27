# Generated by Django 4.1.3 on 2022-11-22 14:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('olymp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.IntegerField()),
                ('date_creation', models.DateTimeField()),
                ('olymp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='olymp.olymp')),
            ],
        ),
    ]