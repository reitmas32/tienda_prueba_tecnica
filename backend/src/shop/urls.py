# urls.py
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ProductoModelViewSet

router = DefaultRouter()
router.register(r"productos", ProductoModelViewSet)
# Segundo enrutador para ProfileViewSet anidado bajo el mismo prefijo


urlpatterns = [
    path("", include(router.urls)),
]
