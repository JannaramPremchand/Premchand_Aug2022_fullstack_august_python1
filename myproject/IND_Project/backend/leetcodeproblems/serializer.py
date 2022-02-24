from rest_framework import serializers
from . models import *


class problem_Serializer(serializers.ModelSerializer):
    class Meta:
        model = problem_model
        fields = ['ProblemId','Title','Solution','Difficulty']