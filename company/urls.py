from django.urls import path
from rest_framework.routers import DefaultRouter

from company.apis import CompanyViewSet
from company.views import CompanyListView

# API Router Configuration
APIrouter = DefaultRouter()
APIrouter.register(
    r"companies",
    CompanyViewSet,
    basename="company-api",
)

# Web View URLs
urlpatterns = [
    path(
        "companies/",
        CompanyListView.as_view(),
        name="company-list",
    ),
]
