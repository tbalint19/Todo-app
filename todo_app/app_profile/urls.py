from django.conf.urls import url
from . import views


urlpatterns = [

    # login page
    url(r'^$', views.get_login, name='get_login'),

    # api
    url(r'^api/signup$', views.signup, name='signup'),
    url(r'^api/login$', views.login, name='login'),
    url(r'^api/logout$', views.logout, name='logout'),

]
