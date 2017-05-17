"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin

from rest_framework import routers, serializers, viewsets
import views
from django.views.generic import TemplateView

from data_base.serializers import *
router = routers.DefaultRouter()
router.register(r"vehicle", VehicleViewSet)
router.register(r"customer", CustomerViewSet)
#router.register(r"image", ImageViewSet)
router.register(r"favorite", FavoriteViewSet)
router.register(r"has_image", Has_imageViewSet)
router.register(r"sell", SellViewSet)


urlpatterns = [
    url(r'^detail', TemplateView.as_view(template_name="detail.html")),
    #url(r'^dms', TemplateView.as_view(template_name="dms.html")),
    url(r'^login', TemplateView.as_view(template_name="login.html")),
    url(r'^buy', TemplateView.as_view(template_name="buy.html")),
    url(r'^sell1', TemplateView.as_view(template_name="dms.html")),
    url(r'^blog', TemplateView.as_view(template_name="blog.html")),
	url(r'^home', TemplateView.as_view(template_name="index.html")),
    url(r'^account/', views.make_account),
    url(r'^admin/', admin.site.urls),
    url(r'api/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.IMAGE_URL, document_root=settings.IMAGE_ROOT)
