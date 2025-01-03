# Generated by Django 5.1.4 on 2024-12-24 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=100)),
                ('website', models.URLField(blank=True, null=True, unique=True)),
                ('career_page', models.URLField(blank=True, null=True, unique=True)),
                ('email', models.EmailField(blank=True, max_length=100, null=True, unique=True)),
                ('linkedin', models.URLField(blank=True, null=True, unique=True)),
                ('phone', models.CharField(blank=True, max_length=20, null=True)),
                ('is_active', models.BooleanField(default=False)),
                ('is_valid', models.BooleanField(default=False)),
            ],
        ),
    ]
