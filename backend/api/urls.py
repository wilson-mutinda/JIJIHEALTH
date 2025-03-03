from django.urls import path
from . import views

urlpatterns = [
    path('create_user/', views.ListCreeateUserView.as_view(), name='create_user'),
    path('users/', views.ListCreeateUserView.as_view(), name='users'),
    path('user/<int:pk>/', views.RetrieveUserView.as_view(), name='user'),
    path('user_info/<int:pk>/', views.RetrieveUpdateDestroyView.as_view(), name='user_info'),
    path('login/', views.LoginView.as_view(), name='login'),
]