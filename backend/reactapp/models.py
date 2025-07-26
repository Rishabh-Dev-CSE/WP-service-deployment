from django.db import models

class Enquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.name
class SubscriberUser(models.Model):
    name = models.CharField(max_length=100, default="")
    email = models.EmailField()
    date_and_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
