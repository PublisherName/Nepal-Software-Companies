from django.contrib import admin


class PaginatedAdmin(admin.ModelAdmin):
    """Admin class that allows to change the number of items per page."""

    list_per_page = 10
