from rest_framework import permissions

class AllowPostAnyReadAuthenticatedUser(permissions.BasePermission):

    def has_permission(self, request, view):
        # Allow anyone to register
        if request.method == "POST":
            return True
        # Must be authenticated to view
        return True
        #else:
        #    return request.user and is_authenticated(request.user)

    def has_object_permission(self, request, view, obj):
        # Any view method requires you to be the user
        return True
        #return obj.id == request.user.id or request.user.is_superuser