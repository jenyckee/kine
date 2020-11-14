# Generated by Django 2.2.17 on 2020-11-06 07:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assignment', '0007_assignment_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assignments', to=settings.AUTH_USER_MODEL),
        ),
    ]
