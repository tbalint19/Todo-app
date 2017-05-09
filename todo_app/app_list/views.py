from django.shortcuts import render
from django.http import JsonResponse

def get_list(request):
    return render(request, 'list.html')

def create_todo(request):
    return JsonResponse({})

def get_todos(request):
    return JsonResponse({})

def update_todos(request):
    return JsonResponse({})

def delete_todo(request):
    return JsonResponse({})
