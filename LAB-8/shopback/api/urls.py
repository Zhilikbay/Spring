from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.products_list),
    path('products/<int:id>/', views.products_detail),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.categories_detail),
    path('categories/<int:id>/products/', views.products_list_by_category)
]