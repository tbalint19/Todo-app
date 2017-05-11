from django.contrib.auth import authenticate
from django.shortcuts import render, redirect

class APP:

    @staticmethod
    def public(view):
        def render_app(request):
            template = view(request)
            app = template + '.html'
            return render(request, app)
        return render_app

    @staticmethod
    def protected(view):
        def render_app(request):
            if not request.user.is_authenticated:
                return redirect('get_login')
            template = view(request)
            app = template + '.html'
            return render(request, app)
        return render_app

    @staticmethod
    def entry(view):
        def render_app(request):
            templates = view(request)
            if request.user.is_authenticated:
                template = templates["protected"]
            else:
                template = templates["public"]
            app = template + '.html'
            return render(request, app)
        return render_app
