from django.contrib.auth import authenticate
from django.http import JsonResponse

class API:

    @staticmethod
    def public(view):
        def generate_response(request):
            response = {'data': [], 'is_authenticated': False}
            response['data'] = view(request)
            return JsonResponse(response)
        return generate_response

    @staticmethod
    def protected(view):
        def generate_response(request):
            response = {'data': [], 'is_authenticated': request.user.is_authenticated}
            if request.user.is_authenticated:
                response['data'] = view(request)
            return JsonResponse(response)
        return generate_response
