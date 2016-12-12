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

            new_post_text = django_form.data.get("text")

            Post.objects.create(text = new_post_text,)

            return HttpResponseRedirect("/")

