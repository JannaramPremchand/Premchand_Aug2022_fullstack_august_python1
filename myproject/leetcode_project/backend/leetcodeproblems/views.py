# Create your views here.
from functools import partial
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.


class ReactView(APIView):

    serializer_class = problem_Serializer

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            prob = problem_model.objects.get(pk=id)
            serializer = problem_Serializer(prob)
            return Response(serializer.data)
        else:

           output = [{'ProblemId':output.ProblemId,
            'Title':output.Title,
            'Solution':output.Solution,
            'Difficulty':output.Difficulty}
                  for output in problem_model.objects.all()]
        return Response(output)

    def post(self, request):
        print('==================',request.data)
        serializer = problem_Serializer(data=request.data)
        print('==================',request.data)
        if serializer.is_valid(raise_exception=True):
            print('==================',request.data)
            serializer.save()
            return Response(serializer.data)
    
    def put(self,request,pk,format=None):
        print('==================',request.data)
        id = pk
        prob = problem_model.objects.get(ProblemId=id)
        print('==================',request.data)
        serializer = problem_Serializer(prob,request.data)
        print('==================',serializer)
        if serializer.is_valid(raise_exception=True):
            print('==================',request.data)
            serializer.save()
            return Response({'message':'update data completed'})
        print('==================',request.data,serializer.errors)
        return Response(serializer.errors)
    
    def patch(self,request,pk,format=None):
        id = pk
        prob = problem_model.objects.get(pk=id)
        serializer = problem_Serializer(prob,data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'message':'Partial data completed'})
        return Response(serializer.errors)
    
    def delete(self,request,pk,format=None):
        id = pk
        prob = problem_model.objects.get(ProblemId=id)
        prob.delete()
        return Response({'message':'Deleted sucessfully'})