from django.db import models
import os

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
        return self.email

class ServicesModel(models.Model):
  CATEGORY_DICT = {
    "ORGANIC": "Organic",
    "RESTAURANT": "Restaurant",
    "EDUCATION": "Education",
    "BUSINESS": "Business",
    "SOCIAL_MEDIA": "Social Media",
    'ECOMMERCE': "E-commerce",
    "OTHER_SERVICES": "Other Services",
    }
  Web_Services = models.CharField(max_length=50, choices=CATEGORY_DICT, default='OTHER_SERVICES')
  Thumbnail =  models.ImageField(upload_to="services_thumbnailes")
  discription = models.CharField()
  title = models.CharField(max_length=100)

  def __str__(self):
      return self.Web_Services

class TopClients(models.Model):
    client_name = models.CharField(max_length=50)
    company_name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="client-images/")
    discription = models.TextField()
    date = models.DateField(auto_now_add=True)
    address = models.TextField(max_length=100)
    contact_number = models.IntegerField()
    citizen = models.CharField(default="India")
    client_website = models.CharField(max_length=255, default="")
    business_type = models.CharField(default="Individual")


    def __str__(self):
        return self.client_name
    
    def save(self,*args,**kwargs):
        try:
            old = TopClients.objects.get(id=self.id)
            if old.image and old.image != self.image:
                if os.path.isfile(old.image.path):
                    os.remove(old.image.path)
        except TopClients.DoesNotExist:
            pass
        super().save(*args,**kwargs)
    
    def delete(self,*args,**kwargs):
        if self.image and os.path.isfile(self.image.path):
            os.remove(self.image.path)
        super().delete(*args, **kwargs)