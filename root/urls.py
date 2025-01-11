from allauth.account import views
from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from company.urls import APIrouter as company_api_router
from company.urls import urlpatterns as company_urls
from root.apis import HealthViewSet
from root.swagger import schema_view
from root.views import HomePageView

router = DefaultRouter()
router.register(r"health", HealthViewSet, basename="health")
router.registry.extend(company_api_router.registry)

auth_urls = [
    path("accounts/login/", views.LoginView.as_view(), name="account_login"),
    path("accounts/logout/", views.LogoutView.as_view(), name="account_logout"),
    path("accounts/signup/", views.SignupView.as_view(), name="account_signup"),
    path("accounts/email/", views.EmailView.as_view(), name="account_email"),
    path(
        "accounts/confirm-email/<str:key>/",
        views.ConfirmEmailView.as_view(),
        name="account_confirm_email",
    ),
    path(
        "accounts/email/confirmation/sent/",
        views.EmailVerificationSentView.as_view(),
        name="account_email_verification_sent",
    ),
    path(
        "accounts/password/change/",
        views.PasswordChangeView.as_view(),
        name="account_change_password",
    ),
    path("accounts/password/set/", views.PasswordSetView.as_view(), name="account_set_password"),
    path(
        "accounts/password/reset/",
        views.PasswordResetView.as_view(),
        name="account_reset_password",
    ),
    path(
        "accounts/password/reset/done/",
        views.PasswordResetDoneView.as_view(),
        name="account_reset_password_done",
    ),
    path(
        "accounts/password/reset/key/<str:uidb36>-<str:key>/",
        views.PasswordResetFromKeyView.as_view(),
        name="account_reset_password_from_key",
    ),
    path(
        "accounts/password/reset/key/done/",
        views.PasswordResetFromKeyDoneView.as_view(),
        name="account_reset_password_from_key_done",
    ),
]

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
urlpatterns.extend(auth_urls)

handler404 = "root.apis.custom_404"
handler500 = "root.apis.custom_500"
