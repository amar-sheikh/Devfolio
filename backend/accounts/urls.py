from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from .views import VerifyEmailView

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('registration/account-confirm-email/<str:key>/', VerifyEmailView.as_view()),
    path('registration/', include('dj_rest_auth.registration.urls')),
]
