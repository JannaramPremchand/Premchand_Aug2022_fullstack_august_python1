from django.urls import path
from problems import views
urlpatterns = [
    path('',views.main),
    path('add/',views.post),
    path('update/<int:id>',views.update),
    path('delete/<int:id>',views.delete),
]