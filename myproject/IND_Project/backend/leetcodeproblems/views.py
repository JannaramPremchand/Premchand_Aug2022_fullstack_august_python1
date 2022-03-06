from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework import viewsets
# Create your views here.
class ProblemView(viewsets.ModelViewSet):
    queryset = problem_model.objects.all()
    serializer_class = Problem_Serializer