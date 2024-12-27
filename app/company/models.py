from django.db import models


class Company(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
    )
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    website = models.URLField(
        max_length=200,
        blank=True,
        null=True,
        unique=True,
    )
    career_page = models.URLField(
        max_length=200,
        blank=True,
        null=True,
        unique=True,
    )
    email = models.EmailField(
        max_length=100,
        blank=True,
        null=True,
        unique=True,
    )
    linkedin = models.URLField(
        max_length=200,
        blank=True,
        null=True,
        unique=True,
    )
    phone = models.CharField(
        max_length=20,
        blank=True,
        null=True,
    )
    is_active = models.BooleanField(default=False)
    is_valid = models.BooleanField(default=False)

    def __str__(self):
        return self.name
