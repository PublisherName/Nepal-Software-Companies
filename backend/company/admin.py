from django.contrib import admin

from root.admin import PaginatedAdmin

from .models import Company


@admin.register(Company)
class CompanyAdmin(PaginatedAdmin):
    list_display = ("name", "city", "website", "email", "is_active", "is_valid")
    search_fields = ("name", "city", "email")
    list_filter = ("is_active", "is_valid")
