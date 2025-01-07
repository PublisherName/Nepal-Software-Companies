from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from company.urls import APIrouter as company_api_router
from company.urls import urlpatterns as company_urls
from root.apis import HealthViewSet
from root.swagger import schema_view
from root.views import HomePageView

# API Router Configuration
router = DefaultRouter()
router.register(r"health", HealthViewSet, basename="health")
router.registry.extend(company_api_router.registry)


# Main URL Patterns
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("", HomePageView.as_view(), name="home"),
    path(
        "docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
]

urlpatterns.extend(company_urls)

# Custom Error Handlers
handler404 = "root.apis.custom_404"
handler500 = "root.apis.custom_500"
