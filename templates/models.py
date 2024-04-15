from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, User
from multiselectfield import MultiSelectField



class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

class User(AbstractUser):
    email = models.EmailField('Email', unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()


class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    size_choices = [('small', 'Small'),
                    ('medium', 'Medium'),
                    ('large', 'Large'),
    ]
    size = models.CharField(max_length=200,choices=size_choices,null=True)

    crust_choices = [('normal', 'Normal'),
                     ('glutenfree', 'Gluten free'),
                     ('thin', 'Thin'),
                     ('thick', 'Thin'),]
   
    crust_type = models.CharField(max_length=200,choices=crust_choices,null=True)
    
    sauce_choices = [('tomato', 'Tomato'),
                     ('bbq', 'BBQ'),]
    sauce = models.CharField(max_length=200,choices=sauce_choices,null=True)

    cheese_choices = [('mozzarella', 'Mozzarella'),
                     ('vegan', 'Vegan'),
                     ('lowfat', 'Low fat')]
    cheese = models.CharField(max_length=200,choices=cheese_choices,null=True)

    pepperoni = models.BooleanField(default=False)
    chicken = models.BooleanField(default=False)
    onions = models.BooleanField(default=False)
    ham = models.BooleanField(default=False)
    pineapple = models.BooleanField(default=False)
    mushrooms = models.BooleanField(default=False)
    peppers = models.BooleanField(default=False)


    """ topping_choices = [('peperonni', 'Peperonni'),
                     ('chicken', 'Chicken'),
                     ('ham', 'Ham'),
                     ('pineapple', 'Pineapple'),
                     ('peppers', 'Peppers'),
                     ('mushrooms', 'Ham'),
                     ('onions', 'Onions'),
                     ]
    pizza_toppings = models.BooleanField(max_length=200,choices=topping_choices, default=False, null=True) """

 
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.TextField()
    card_number = models.CharField(max_length=20)
    expiry_date = models.CharField(max_length=5)
    cvv = models.CharField(max_length=3) 

class OrderHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)

class PizzaSize(models.Model):
    name = models.CharField(max_length=50)

class CheeseType(models.Model):
    name = models.CharField(max_length=50)

class SauceType(models.Model):
    name = models.CharField(max_length=50)






                    




# Create your models here.
