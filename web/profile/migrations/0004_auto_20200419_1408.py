# Generated by Django 2.2.12 on 2020-04-19 14:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0003_auto_20200418_2145'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='therapist',
            name='user',
        ),
        migrations.DeleteModel(
            name='Patient',
        ),
        migrations.DeleteModel(
            name='Therapist',
        ),
    ]
