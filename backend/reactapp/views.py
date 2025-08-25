from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
import json
from django.shortcuts import render 
from  django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import HTMLFormRenderer
from .models import *

from django.core.mail import send_mail
from django.conf import settings

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
        if SubscriberUser.objects.filter(name=name) or SubscriberUser.objects.filter(email=email):
            print('Exist')
            return JsonResponse({'status':'exist'})
        else:
            sub = SubscriberUser.objects.create(name = name , email=email)
            return JsonResponse({'status':'success'})
    return JsonResponse({'status':'error'})


@csrf_exempt
@api_view(['GET'])
def topclients(request):
    
    if request.method == 'GET':
        clients = TopClients.objects.all()
        data = []

        for client in clients:
            data.append({
                "client_name": client.client_name,
                "company_name": client.company_name,
                "discription": client.discription,
                "website": client.client_website,
                # "address": client.address,
                # "contact_number": client.contact_number,
                # "citizen": client.citizen,
                # "business_type": client.business_type,
                "image": request.build_absolute_uri(client.image.url)
            })
        return JsonResponse({"clients": data}, safe=False)
    return JsonResponse({"error": "Invalid request"}, status=400)

@csrf_exempt
def send_newsletter(request):
    subscribers = SubscriberUser.objects.all()
    subject = "Newsletter Update"
    message = "Hello! This is our latest newsletter. Stay tuned for more updates."
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = [sub.email for sub in subscribers]
    send_mail(subject, message, from_email, recipient_list, fail_silently=False)
    return render(request, "sent.html", {"count": len(recipient_list)})






    