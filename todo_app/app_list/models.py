from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos')
    title = models.CharField(max_length=30)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)
