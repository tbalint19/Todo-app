from django.conf.urls import url
from . import views


urlpatterns = [

    # api for todos
    url(r'^', views.create_todo, name='create_todo'),
    url(r'^', views.get_todos, name='get_todos'),
    url(r'^', views.update_todos, name='update_todos'),
    url(r'^', views.delete_todo, name='delete_todo')

]
