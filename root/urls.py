from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from company.urls import router as company_router
from root.swagger import schema_view
from root.views import HealthViewSet

router = DefaultRouter()

router.register(r"health", HealthViewSet, basename="health")

router.registry.extend(company_router.registry)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path(
        "docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
]

handler404 = "root.views.custom_404"
handler500 = "root.views.custom_500"
