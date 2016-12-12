from django.shortcuts import render

from .models import Post
from .forms import AddPost
from django.http import HttpResponseRedirect

# Create your views here.

def index(request):
	if request.method == 'GET':
		return render(request,"myapp/index.html")

	if request.method == 'POST':
		django_form = AddPost(request.POST or None)
		if django_form.is_valid():
			new_post_text = django_form.data.get("text")
			Post.objects.create(text = new_post_text,)
			return HttpResponseRedirect("/")
		else:
			post_list = Post.objects.all()
			return render(request, 'myapp/index.html',{'posts': post_list})