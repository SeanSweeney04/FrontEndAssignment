from django.contrib import admin
from .models import *
from .forms import*

class PizzaAdmin(admin.ModelAdmin):
    form = PizzaAdminForm
admin.site.register(Pizza, PizzaAdmin)
admin.site.register(Order)
admin.site.register(PizzaSize)
admin.site.register(CheeseType)
admin.site.register(SauceType)


# Register your models here.
