from django.views.generic import ListView

from .models import Company


class CompanyListView(ListView):
    model = Company
    template_name = "company/index.html"
    context_object_name = "companies"
    paginate_by = 12

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["total_companies"] = Company.objects.count()
        context["verified_companies"] = Company.objects.filter(
            is_valid=True,
            is_active=True,
        ).count()
        return context

    @staticmethod
    def get_queryset():
        return Company.objects.filter(
            is_active=True,
            is_valid=True,
        ).order_by("name")
