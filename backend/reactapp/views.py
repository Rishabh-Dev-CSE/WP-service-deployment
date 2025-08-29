from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from .models import Enquiry, SubscriberUser, TopClients

from django.conf import settings


# ✅ Enquiry API
@csrf_exempt
@api_view(["POST"])
def enquiry_view(request):
    if request.method == "POST":
        name = request.data.get("name")
        email = request.data.get("email")
        company = request.data.get("company")
        message = request.data.get("message")

        if not name or not email or not message:
            return JsonResponse({"status": "error", "msg": "Missing fields"}, status=400)

        enq = Enquiry.objects.create(
            name=name, email=email, company=company, message=message
        )
        print(enq)

        return JsonResponse({"status": "success"}, status=201)
    return JsonResponse({"status": "error"}, status=405)


# ✅ Subscribe API
@csrf_exempt
@api_view(["POST"])
def subscriberUser(request):
    name = request.data.get("name")
    email = request.data.get("email")

    if not name or not email:
        return JsonResponse({"status": "error", "msg": "Missing fields"}, status=400)

    if SubscriberUser.objects.filter(name=name).exists() or SubscriberUser.objects.filter(email=email).exists():
        print("Exist")
        return JsonResponse({"status": "exist"})
    else:
        SubscriberUser.objects.create(name=name, email=email)
        return JsonResponse({"status": "success"})


# ✅ Top Clients API
@csrf_exempt
@api_view(["GET"])
def topclients(request):
    print(settings.SECRET_API_KEY)
    api_key = request.headers.get("X")
    print(api_key)
    if api_key != settings.SECRET_API_KEY:   # apni settings.py me define karna
        return JsonResponse({"error": "Unauthorized"}, status=401)
    
    if request.method == "GET":
        clients = TopClients.objects.all()
        data = []

        for client in clients:
            data.append({
                "client_name": client.client_name,
                "company_name": client.company_name,
                "description": client.discription,
                "website": client.client_website,
                "image": request.build_absolute_uri(client.image.url) if client.image else None
            })
            print(data[0]['website'])
        return JsonResponse({"clients": data}, safe=False)
    return JsonResponse({"error": "Invalid request"}, status=400)


# ✅ Newsletter API
@csrf_exempt
@api_view(["POST"])
def send_newsletter(request):
    subscribers = SubscriberUser.objects.all()
    subject = "Newsletter Update"
    message = "Hello! This is our latest newsletter. Stay tuned for more updates."
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = [sub.email for sub in subscribers]

    if not recipient_list:
        return JsonResponse({"status": "error", "msg": "No subscribers found"}, status=404)

    send_mail(subject, message, from_email, recipient_list, fail_silently=False)
    return render(request, "sent.html", {"count": len(recipient_list)})
