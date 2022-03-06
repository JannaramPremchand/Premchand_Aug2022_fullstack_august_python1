from rest_framework import serializers
from . models import *
class Problem_Serializer(serializers.ModelSerializer):
    class Meta:
        model=problem_model
        fields = "__all__"