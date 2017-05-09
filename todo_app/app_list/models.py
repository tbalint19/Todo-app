from django.db import models
from django.contrib.auth.models import User

class TodoManager(models.Manager):

    def get_todos(self, user):
        return [dict(todo) for todo in self.filter(user=user)]

class Todo(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos')
    title = models.CharField(max_length=30)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)

    def __iter__(self):
        for field in ['id', 'title', 'text', 'created']:
            yield field, getattr(self, field)

    def update(self, title, text):
        self.title = title
        self.text = text
        self.save()
