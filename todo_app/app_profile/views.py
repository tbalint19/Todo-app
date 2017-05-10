from Middleware import APP, API
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json

@APP.public
def get_login(request):
    return 'home'

@API.public
def signup(request):
    user_data = json.loads(request.body.decode('utf-8'))
    is_possible = not User.filter(username=user_data["username"]).exists
    if is_possible:
        user = User.objects.create_user(username=user_data["username"], password=user_data["password"])
    return {'created': is_possible}

@API.public
def login(request):
    user_data = json.loads(request.body.decode('utf-8'))
    user = authenticate(request, username=user_data["username"], password=user_data["password"])
    is_authenticated = user is not None
    if user is not None:
        login(request, user)
    return {'authenticated': is_authenticated}

@API.public
def logout(request):
    logout(request)
    return {'status': "done"}
