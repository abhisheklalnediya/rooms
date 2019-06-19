# Generated by Django 2.2.2 on 2019-06-18 11:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('building', '0004_auto_20190618_1039'),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flat_number', models.CharField(max_length=20)),
                ('area', models.IntegerField()),
                ('rent', models.IntegerField()),
                ('room_type', models.CharField(choices=[('1 BHK', '1 BHK'), ('2 BHK', '2 BHK'), ('3 BHK', '3 BHK'), ('Studio', 'Studio')], max_length=10)),
                ('bathrooms_count', models.IntegerField()),
                ('maintenance_amount', models.IntegerField()),
                ('electricity_account_number', models.CharField(max_length=20)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('building', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='building.Building')),
            ],
            options={
                'unique_together': {('flat_number', 'building')},
            },
        ),
    ]
