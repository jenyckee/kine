# Generated by Django 2.2.12 on 2020-04-10 09:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profile', '0002_auto_20200410_0944'),
        ('exercise', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('completed', models.BooleanField()),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exercise.Exercise')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assignments', to='profile.Patient')),
            ],
        ),
    ]
