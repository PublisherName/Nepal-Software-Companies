from django_filters import rest_framework as filters
from rest_framework import filters as drf_filters
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .filters import CompanyFilter
from .models import Company
from .permissions import IsStaffOrSuperUser
from .serializers import CompanySerializer


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    permission_classes = [IsStaffOrSuperUser]
    filter_backends = [
        filters.DjangoFilterBackend,
        drf_filters.SearchFilter,
        drf_filters.OrderingFilter,
    ]
    filterset_class = CompanyFilter
    search_fields = ["name", "city"]
    ordering_fields = ["name", "city"]
    ordering = ["name"]

    @staticmethod
    def get_queryset():
        return Company.objects.filter(
            is_valid=True,
            is_active=True,
        ).order_by("name")

    @staticmethod
    @action(detail=False, methods=["get"])
    def stats(request):
        total = Company.objects.count()
        verified = Company.objects.filter(
            is_valid=True,
            is_active=True,
        ).count()

        return Response(
            {
                "total_companies": total,
                "verified_companies": verified,
            }
        )
