
from django.db import models

# Create your models here.
class problem_model(models.Model):
  ProblemId = models.AutoField(primary_key=True)
  Title = models.CharField(max_length=100)
  Solution = models.URLField(max_length=200)
  Difficulty = models.CharField(max_length=10)
