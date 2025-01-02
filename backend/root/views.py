import traceback

from django.conf import settings
from django.http import JsonResponse
from django.utils import timezone
from rest_framework import viewsets
from rest_framework.response import Response


class HealthViewSet(viewsets.ViewSet):
    @staticmethod
    def list(request):
        return Response(
            {
                "status": "OK",
                "version": "1.0",
                "timestamp": timezone.now(),
            }
        )


def custom_404(request, exception):
    return JsonResponse(
        {
            "error": "Not Found",
            "message": "The requested resource was not found",
            "status_code": 404,
        },
        status=404,
    )


def custom_500(request):
    status_data = {"error": "Internal Server Error", "status_code": 500}

    if settings.DEBUG:
        exc_info = traceback.format_exc()
        status_data.update(
            {
                "debug_message": str(exc_info),
                "request_path": request.path,
                "method": request.method,
            }
        )
    else:
        status_data["message"] = "An unexpected error occurred"

    return JsonResponse(status_data, status=500)
