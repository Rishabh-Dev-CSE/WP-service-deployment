from django.contrib import admin
from . models import *

class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('email', 'name','company')

class SubscribeAdmin(admin.ModelAdmin):
    list_display = ('email', 'name')

admin.site.register(Enquiry,EnquiryAdmin)
admin.site.register(SubscriberUser,SubscribeAdmin)
admin.site.register(ServicesModel)
admin.site.register(TopClients)

# Register your models here.
