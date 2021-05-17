from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.conf.urls import include,url


# Create your views here.
def home(request):
    global text
    text = None
    if request.GET:
        text = request.GET['text']
        '''BERT_summsummarization(text)'''
        
    context ={"mytext":text}
    return render(request,'index.html',context)
