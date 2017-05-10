from Middleware import APP, API
from app_list.models import Todo
import json

@APP.protected
def get_list(request):
    return 'list'

@API.protected
def create_todo(request):
    todo_data = json.loads(request.body.decode("utf-8"))
    todo = Todo(user=request.user, title=todo_data["title"], text=todo_data["text"])
    todo.save()
    return "created"

@API.protected
def get_todos(request):
    return Todo.get_todos(request.user)

@API.protected
def update_todos(request):
    for todo_data in json.loads(request.body.decode("utf-8")):
        todo = Todo.objects.get(id=todo_data["id"])
        todo.update(title=todo_data["title"], text=todo_data["text"])
    return "updated"

@API.protected
def delete_todo(request):
    todo_data = json.loads(request.body.decode("utf-8"))
    Todo.objects.get(id=todo_data["id"]).delete()
    return "deleted"
