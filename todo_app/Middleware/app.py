from django.contrib.auth import authenticate
from django.shortcuts import render, redirect

class APP:

    @staticmethod
    def public(view):
        def render_app(request):
            template = view(request)
            app = template + 'html'
            return render(request, app)
        return render_app

    @staticmethod
    def protected(view):
        def render_app(request):
            user = authenticate(request)
            is_authenticated = user is not None
            if not is_authenticated:
                return redirect('get_login')
            template = view(request)
            app = template + 'html'
            return render(request, app)
        return render_app
