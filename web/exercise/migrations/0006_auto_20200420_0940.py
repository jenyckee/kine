# Generated by Django 2.2.12 on 2020-04-20 09:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exercise', '0005_auto_20200420_0938'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='patient',
            new_name='user',
        ),
    ]
