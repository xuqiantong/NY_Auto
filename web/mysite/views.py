from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework import viewsets, permissions
from forms import AccountForm
import json


def make_account(request):
	if request.method == 'POST':
		form = AccountForm(request.POST)
		if form.is_valid():

			return render(request, 'account_info.html', {'data': json.dumps(form.cleaned_data)})
	else:
		form = AccountForm()
	return render(request, 'account.html', {'form': form})