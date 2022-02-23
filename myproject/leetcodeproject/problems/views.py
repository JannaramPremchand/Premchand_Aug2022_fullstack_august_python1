from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from problems.models import Problems
from problems.serializers import ProblemsSerializer
# Create your views here.

# @csrf_exempt
# def problemApi(request,id=0):
#     if request.method=='GET':
#         problems = Problems.objects.all()
#         problems_serializer = ProblemsSerializer(problems,many=True)
#         return JsonResponse(problems_serializer.data,safe=False)
#     elif request.method=='POST':
#         problems_data=JSONParser().parse(request)
#         problems_serializer = ProblemsSerializer(data=problems_data,many=True)
#         if problems_serializer.is_valid():
#             problems_serializer.save()
#             return JsonResponse('Added Sucessefully',safe=False)
#         return JsonResponse('Failed to Add',safe=False)
#     elif request.method=='PUT':
#         problems_data=JSONParser().parse(request)
#         problems=Problems.objects.get(ProblemId=problems_data['ProblemId'])
#         problems_serializer=ProblemsSerializer(problems,data=problems_data)
#         if problems_serializer.is_valid():
#             problems_serializer.save()
#             return JsonResponse('Updated Sucessefully',safe=False)
#         return JsonResponse('Failed to Update',safe=False)
#     elif request.method=='DELETE':
#         problems=Problems.objects.get(ProblemId=id)
#         problems.delete()
#         return JsonResponse('Deleted Sucessefully',safe=False)


# Create your views here.
#read
@api_view(['GET'])
def main(request):
    problem_obj=Problems.objects.all()
    problems_serializer=ProblemsSerializer(problem_obj,many=True)
    return Response(problems_serializer.data)
#create
@api_view(['POST'])
@csrf_exempt
def post(request):
    problem_obj=Problems.objects.all()
    problems_serializer=ProblemsSerializer(data=request.data)
    if problems_serializer.is_valid():
        problems_serializer.save()
    return Response(problems_serializer.data)
#update
@api_view(['POST'])
@csrf_exempt
def update(request,id):
    problem_obj=Problems.objects.get(id=id)
    problems_serializer=ProblemsSerializer(instance=problem_obj,data=request.data)
    if problems_serializer.is_valid():
        problems_serializer.save()
    return Response(problems_serializer.data)
#delete
@api_view(['DELETE'])
@csrf_exempt
def delete(request,id):
    problem_obj=Problems.objects.get(id=id)
    problem_obj.delete()
    return Response({
        'status' : 204,
        'message':'student data has beed deleted'
        })

