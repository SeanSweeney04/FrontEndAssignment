from django.urls import path
from . import views
from .forms import *

urlpatterns = [
   path('', views.index, name="index"),
   #path('home/', views.order_history, name="home"),
   path('create/', views.create, name="create"),
   path('order/', views.order, name="order"),
   path('order_confirmation/', views.order_confirmation, name="order_confirmation"),
   path('register/', views.UserSignupView.as_view(), name="register"),
   path('login/',views.LoginView.as_view(template_name="login.html", authentication_form=UserLoginForm)),
   path('logout/', views.logout_user, name="logout"),

]