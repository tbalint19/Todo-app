from django.conf.urls import url
from . import views


urlpatterns = [

    # login page
    url(r'^$', views.get_home, name='get_home'),

    # api
    url(r'^api/signup$', views.signup_user, name='signup_user'),
    url(r'^api/login$', views.login_user, name='login_user'),
    url(r'^api/logout$', views.logout_user, name='logout_user'),

]
