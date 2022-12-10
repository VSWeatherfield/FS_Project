from django.urls import path

from . import views

userList = views.UsersViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

userDetail = views.UsersViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
  path('login/', views.Login.as_view(), name='login'),  
  path('logout/', views.Logout.as_view(), name='logout'), 
  url(r'^$', userList, name='users'),
  url(r'^(?P<pk>\d+)$', userDetail, name='user'), 
]