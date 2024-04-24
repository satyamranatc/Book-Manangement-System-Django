from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def BookData(request):
    # Dummy book data to be added
    dummy_book = [{
        "img": "https://via.placeholder.com/300x200",
        "title": "The Hobbit",
        "author": "Dummy",
        "desc": "Hi By Book"
    }]

    
    # Return the updated JSON response
    return JsonResponse({"Data":dummy_book})
