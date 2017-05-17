from django import forms


class AccountForm(forms.Form):
	name = forms.CharField(label='Name', max_length=50)
	username = forms.CharField(label='Username', max_length=10)
	email = forms.EmailField(label='Email', max_length=50)
	phone = forms.IntegerField(label='Phone')
	password = forms.CharField(label='Password', max_length=10)
	confirm_password = forms.CharField(label='Confirm Password', max_length=10)