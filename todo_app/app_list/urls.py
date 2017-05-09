from django.conf.urls import url
from . import views


urlpatterns = [

    # get app
    url(r'^', views.get_list, name='get_list'),

    # api for todos
    url(r'^api/create_todo', views.create_todo, name='create_todo'),
    url(r'^api/get_todos', views.get_todos, name='get_todos'),
    url(r'^api/update_todos', views.update_todos, name='update_todos'),
    url(r'^api/delete_todo', views.delete_todo, name='delete_todo')

]
