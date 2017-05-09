from django.shortcuts import render
from django.http import JsonResponse
import json

def get_list(request):
    is_authenticated = request.user is not None
    if not is_authenticated:
        return redirect('get_login')
    return render(request, 'list.html')

def create_todo(request):
    is_authenticated = request.user is not None
    if is_authenticated:
        todo_data = json.loads(request.body.decode("utf-8"))
        todo = Todo(user=request.user, title=todo_data["title"], text=todo_data["text"])
        todo.save()
    return JsonResponse({"created": True})

def get_todos(request):
    is_authenticated = request.user is not None
    if is_authenticated:
        todos = Todo.get_todos(request.user)
    return JsonResponse({'data': todos})

def update_todos(request):
    is_authenticated = request.user is not None
    if is_authenticated:
        all_data = json.loads(request.body.decode("utf-8"))
        for todo_data in all_data:
            todo = Todo.objects.get(id=todo_data["id"])
            todo.update(title=todo_data["title"], text=todo_data["text"])
    return JsonResponse({"updated": is_authenticated})

def delete_todo(request):
    is_authenticated = request.user is not None
    if is_authenticated:
        todo_id = json.loads(request.body.decode("utf-8"))["id"]
        Todo.objects.get(id=todo_id).delete()
    return JsonResponse({"deleted": is_authenticated})
