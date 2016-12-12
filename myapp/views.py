from django.shortcuts import render

from .models import Post
from .forms import AddPost
from django.http import HttpResponseRedirect

# Create your views here.

def index(request):
	if request.method == 'GET':
		return render(request,"myapp/index.html")

	if request.method == 'POST':
		django_form = AddPost(request.POST)
		if django_form.is_valid():
			print "good"