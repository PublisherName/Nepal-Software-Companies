from rest_framework import permissions


class IsStaffOrSuperUser(permissions.BasePermission):
    @staticmethod
    def has_permission(request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and (
            request.user.is_staff or request.user.is_superuser
        )

    @staticmethod
    def has_object_permission(request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and (
            request.user.is_staff or request.user.is_superuser
        )
