
from django.urls import path
from leetcodeproblems.views import *

urlpatterns = [
     path('', ReactView.as_view(), name="xxx"),
]