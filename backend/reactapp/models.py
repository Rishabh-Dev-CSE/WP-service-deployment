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

