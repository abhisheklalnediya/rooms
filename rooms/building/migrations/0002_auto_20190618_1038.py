# Generated by Django 2.2.2 on 2019-06-18 10:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('building', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='building',
            old_name='category',
            new_name='landmarks',
        ),
    ]
