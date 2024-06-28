from django.urls import path
from .views import HospitalListCreateView, HospitalDetailView

urlpatterns = [
    path('hospitals/', HospitalListCreateView.as_view(), name='hospital-list-create'),
    path('hospitals/<int:pk>/', HospitalDetailView.as_view(), name='hospital-detail'),
]
