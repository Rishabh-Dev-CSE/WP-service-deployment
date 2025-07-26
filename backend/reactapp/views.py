from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
import json
from django.shortcuts import render 
from  django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import HTMLFormRenderer
from .models import *

@csrf_exempt
def enquiry_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        company = data.get('company')
        message = data.get('message')
        enq = Enquiry.objects.create(name=name,email=email,company=company, message=message)
        print(enq)
       
        return  JsonResponse({'status':'success'} )
    return  JsonResponse({'status':'error'} )


@csrf_exempt
@api_view(['POST'])
def subscriberUser(request):
    if request.method == "POST":
        name = request.data.get('name')
        email = request.data.get('email')
        sub = SubscriberUser.objects.create(name = name , email=email)

        return JsonResponse({'status':'success'})
    return JsonResponse({'status':'error'})






    