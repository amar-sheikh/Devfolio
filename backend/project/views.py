from django.http.response import JsonResponse

def health(request):
    return JsonResponse({ 'message': 'Backend is working...' }, status = 200)