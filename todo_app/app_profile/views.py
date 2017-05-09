from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json

def get_login(request):
    return render(request, 'home.html')

def signup(request):
    signup_data = json.loads(request.body.decode('utf-8'))
    username = signup_data["username"]
    password = signup_data["password"]
    is_possible = not User.filter(username=signup_data["username"]).exists
    if is_possible:
        user = User.objects.create_user(username=username, password=password)
    return JsonResponse({'created': is_possible})

def login(request):
    login_data = json.loads(request.body.decode('utf-8'))
    username = login_data["username"]
    password = login_data["password"]
    user = authenticate(request, username=username, password=password)
    is_authenticated = user is not None
    if is_authenticated:
        login(request, user)
    return JsonResponse({"authenticated": is_authenticated})

def logout(request):
    logout(request)
    return JsonResponse({})
