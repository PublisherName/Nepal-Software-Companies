from rest_framework import serializers

from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            "id",
            "name",
            "address",
            "city",
            "website",
            "career_page",
            "email",
            "linkedin",
            "phone",
        ]
        read_only_fields = ["id"]

        def validate(self, attrs):
            request = self.context.get("request")
            if (
                request
                and request.method in ["PUT", "PATCH", "DELETE"]
                and not (request.user.is_staff or request.user.is_superuser)
            ):
                raise serializers.ValidationError(
                    "Only staff members or administrators can modify company information."
                )
            return attrs
