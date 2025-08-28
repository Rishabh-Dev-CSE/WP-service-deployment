from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [
    path('enquiry', views.enquiry_view ),
    path('subscribe', views.subscriberUser),
    path('send-newsletter',views.send_newsletter),
    path('top-clients', views.topclients),
]
