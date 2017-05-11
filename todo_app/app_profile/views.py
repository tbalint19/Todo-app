from Middleware import APP, API
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json

@APP.entry
def get_home(request):
    return {'public': "home", 'protected': "list"}

@API.public
def signup_user(request):
    user_data = json.loads(request.body.decode('utf-8'))
    is_possible = not User.objects.filter(username=user_data["username"]).exists()
    if is_possible:
        user = User.objects.create_user(username=user_data["username"], password=user_data["password"])
    return {'created': is_possible}

@API.public
def login_user(request):
    user_data = json.loads(request.body.decode('utf-8'))
    user = authenticate(username=user_data["username"], password=user_data["password"])
    if user is not None:
        login(request, user)
    return {'authenticated': user is not None}

@API.public
def logout_user(request):
    logout(request)
    return {'status': "done"}
