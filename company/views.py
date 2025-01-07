from django.db.models import Q
from django.views.generic import ListView

from .models import Company


class CompanyListView(ListView):
    model = Company
    template_name = "company/company_list.html"
    context_object_name = "companies"
    paginate_by = 12
    ordering = ["name"]

    def get_queryset(self):
        queryset = super().get_queryset()
        search_query = self.request.GET.get("q")
        city = self.request.GET.get("city")
        status = self.request.GET.get("status")
        sort = self.request.GET.get("sort", "name")

        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query)
                | Q(address__icontains=search_query)
                | Q(email__icontains=search_query)
                | Q(phone__icontains=search_query)
            ).distinct()

        if city:
            queryset = queryset.filter(city__iexact=city)

        if status:
            is_active = status.lower() == "active"
            queryset = queryset.filter(is_active=is_active)

        # Handle sorting
        if sort == "-name":
            queryset = queryset.order_by("-name")
        elif sort == "city":
            queryset = queryset.order_by("city", "name")
        else:
            queryset = queryset.order_by("name")

        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(
            {
                "search_query": self.request.GET.get("q", ""),
                "current_city": self.request.GET.get("city", ""),
                "current_status": self.request.GET.get("status", ""),
                "current_sort": self.request.GET.get("sort", "name"),
                "cities": Company.objects.exclude(city__isnull=True)
                .exclude(city__exact="")
                .values_list("city", flat=True)
                .distinct()
                .order_by("city")
                .order_by("city"),
                "total_companies": Company.objects.count(),
                "active_companies": Company.objects.filter(is_active=True).count(),
            }
        )
        return context
