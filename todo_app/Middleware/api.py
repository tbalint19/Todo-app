from django.contrib.auth import authenticate
from django.http import JsonResponse

class API:

    @staticmethod
    def public(view):
        import json
        def generate_response(request):
            response = {'data': [], 'is_authenticated': False}
            response['data'] = view(request)
            return JsonResponse(response)
        return generate_response

    @staticmethod
    def protected(view):
        import json
        def generate_response(request):
            user = authenticate(request)
            is_authenticated = user is not None
            response = {'data': [], 'is_authenticated': is_authenticated}
            if is_authenticated:
                response['data'] = view(request)
            return JsonResponse(response)
        return generate_response
