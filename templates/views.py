from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from .forms import *
from .forms import InputForm
from django.contrib.auth import login, logout
from django.views.generic import CreateView
from django.contrib.auth.views import LoginView
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
def index(request):
    pizza = Pizza.objects.all()
    return render(request, 'index.html', {'pizza':pizza})


def create(request):
   context = {}
   form = PizzaForm(request.POST or None, request.FILES or None)
   if form.is_valid():
        # save the form data to model        
        form.save()
        return redirect('order')
   context['form']= form
   return render(request, 'create.html', context)

def order(request):
   context = {}
   form = OrderForm(request.POST or None, request.FILES or None)
   if form.is_valid():
        # save the form data to model
        form.save()
        
        return redirect('order_confirmation')

   context['form']= form
   return render(request, 'order.html', context)

def order_confirmation(request):
    pizza = Pizza.objects.latest('id')
    return render(request, 'order_confirmation.html', {'pizza':pizza})

class UserSignupView(CreateView):
    model = User
    form_class = UserSignupForm
    template_name = 'user_signup.html'

    def get_context_data(self, **kwargs):
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('index')

class UserLoginView(LoginView):
    template_name='login.html'


def logout_user(request):
    logout(request)
    return redirect("/")



#@login_required
""" def order_history(request):
    pizza = Pizza.objects.all()
    orders = request.session.get('orders', [])
    orders.append(pizza)
    request.session['orders'] = pizza
    return render(request, 'index.html', {'orders':orders}) """





