"""back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from answer.views import AnswerViewSet
from olymp.views import OlympViewSet
from year.views import YearViewSet
from problem.views import ProblemViewSet
from userprofile.views import UserProfileViewSet
from blog.views import BlogViewSet, MyBlogsViewSet
from user.views import UserViewSet, CurrentUser

router = routers.DefaultRouter()
router.register(r'answers', AnswerViewSet)
router.register(r'olymps', OlympViewSet)
router.register(r'years', YearViewSet)
router.register(r'problems', ProblemViewSet)
router.register(r'profile', UserProfileViewSet)
router.register(r'myblogs', MyBlogsViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/user/current', CurrentUser.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
