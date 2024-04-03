from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(default="")
    count = models.IntegerField(default=0)
    is_active = models.BooleanField()
    category = models.TextField(default="")

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_activate': self.is_active,
            'category': self.category
        }
    
class Category(models.Model):
    name = models.CharField(max_length=500)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return f"Name: {self.name}"
    

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }