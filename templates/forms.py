from .models import *
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.forms import ModelForm, ModelChoiceField
from .models import User
from django.db import transaction
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm




class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = '__all__'

class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['name', 'address', 'card_number', 'expiry_date' , 'cvv']
    
    

class InputForm(forms.Form):
  
    first_name = forms.CharField(max_length = 200)
    last_name = forms.CharField(max_length = 200)
    roll_number = forms.IntegerField(
                     help_text = "Enter 6 digit roll number"
                     )
    password = forms.CharField(widget = forms.PasswordInput())


class UserSignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_admin = False
        user.email = self.cleaned_data['username']
        user.save()
        return user
class UserLoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)

class PizzaAdminForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = '__all__'
