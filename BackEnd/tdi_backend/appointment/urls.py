from django.urls import path
from .views import AppointmentListCreateView, AppointmentDetailView, TokenListCreateView, TokenDetailView

urlpatterns = [
    path('appointments/', AppointmentListCreateView.as_view(), name='appointment-list-create'),
    path('appointments/<int:pk>/', AppointmentDetailView.as_view(), name='appointment-detail'),
    path('tokens/', TokenListCreateView.as_view(), name='token-list-create'),
    path('tokens/<int:pk>/', TokenDetailView.as_view(), name='token-detail'),
]
