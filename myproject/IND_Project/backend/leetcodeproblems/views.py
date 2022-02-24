from django.shortcuts import render
# Create your views here.
from ast import Delete
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.


class ReactView(APIView):

    serializer_class = problem_Serializer

    def get(self, request):
        output = [{'ProblemId':output.ProblemId,
            'Title':output.Title,
            'Solution':output.Solution,
            'Difficulty':output.Difficulty}
                  for output in problem_model.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = problem_Serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)