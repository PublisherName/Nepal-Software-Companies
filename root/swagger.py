from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from root.env_config import env

schema_view = get_schema_view(
    openapi.Info(
        title=env(
            "SWAGGER_TITLE",
            default="API",
        ),
        default_version=env(
            "SWAGGER_VERSION",
            default="v1",
        ),
        description=env(
            "SWAGGER_DESCRIPTION",
            default="API description",
        ),
        terms_of_service=env(
            "SWAGGER_TERMS_OF_SERVICE",
            default="https://www.google.com/policies/terms/",
        ),
        contact=openapi.Contact(
            email=env(
                "SWAGGER_CONTACT_EMAIL",
            )
        ),
        license=openapi.License(
            name=env.str("SWAGGER_LICENSE_NAME"),
        ),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
