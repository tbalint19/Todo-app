from django.conf.urls import url
from . import views


urlpatterns = [

    # login page
    url(r'^', views.get_login, name='get_login'),

]
