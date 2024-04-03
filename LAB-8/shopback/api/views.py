from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category

def products_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def products_detail(request, id):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    for p in products_json:
        if p['id'] == id:
            return JsonResponse(p)
    return JsonResponse({'error': 'product not found'})

def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def categories_detail(request, id):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    for c in categories_json:
        if c['id'] == id:
            return JsonResponse(c)
    return JsonResponse({'error': 'category not found'})

# def products_list_by_category(request, id):
#     products = Product.objects.all()
#     products_json = [product.to_json() for product in products]

#     categories = Category.objects.all()
#     categories_json = [category.to_json() for category in categories]

#     for c in categories_json:
#         if c['id'] == id:
#             for p in products_json:
#                 if p['category'] == c['name']:
#                     return JsonResponse(p)
                
#     return JsonResponse({'error': 'products of this category not found'})


def products_list_by_category(request, id):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]

    products_in_category = []
    for c in categories_json:
        if c['id'] == id:
            for p in products_json:
                if p['category'] == c['name']:
                    products_in_category.append(p)
    
    if products_in_category:
        return JsonResponse(products_in_category, safe=False)
    else:
        return JsonResponse({'error': 'Products of this category not found'})