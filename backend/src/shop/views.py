# views.py

from rest_framework import viewsets

from .models import Producto
from .serializers import ProductoSerializer


class ProductoModelViewSet( viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    def partial_update(self, request, *args, **kwargs):
        print(request.headers)
        print(request.path)
        print(request.body)
        return super().partial_update(request, *args, **kwargs)
