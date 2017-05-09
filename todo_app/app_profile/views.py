from Middleware import APP, API
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json

@APP.public
def get_login(request):
    return 'home'

@API.public
def signup(request):
    signup_data = json.loads(request.body.decode('utf-8'))
    username = signup_data["username"]
    password = signup_data["password"]
    is_possible = not User.filter(username=signup_data["username"]).exists
    if is_possible:
        user = User.objects.create_user(username=username, password=password)
    return {'created': is_possible}

@API.public
def login(request):
    login_data = json.loads(request.body.decode('utf-8'))
    username = login_data["username"]
    password = login_data["password"]
    user = authenticate(request, username=username, password=password)
    is_authenticated = user is not None
    if is_authenticated:
        login(request, user)
    return {'authenticated': is_authenticated}

@API.public
def logout(request):
    logout(request)
    return {'status': "done"}
