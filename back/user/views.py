from rest_framework import viewsets, mixins
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .permissions import AllowPostAnyReadAuthenticatedUser

class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
  serializer_class = UserSerializer
  queryset = User.objects.all()

  def perform_create(self, serializer):
    user = User.objects.create_user(**serializer.validated_data)
    user.set_password(serializer.validated_data['password'])

    return user

class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowPostAnyReadAuthenticatedUser,)

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return User.objects.all()
        return User.objects.filter(username=user.username)

    def get_object(self):
        obj = get_object_or_404(User.objects.filter(id=self.kwargs["pk"]))
        return obj

class CurrentUser(APIView):
    def get(self, request):
      serializer = UserSerializer(request.user)
      return Response(serializer.data)