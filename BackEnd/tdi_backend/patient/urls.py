from django.urls import path
from .views import PatientListCreateView, PatientDetailView, MedicalHistoryListCreateView, MedicalHistoryDetailView

urlpatterns = [
    path('patients/', PatientListCreateView.as_view(), name='patient-list-create'),
    path('patients/<int:pk>/', PatientDetailView.as_view(), name='patient-detail'),
    path('medical-history/', MedicalHistoryListCreateView.as_view(), name='medical-history-list-create'),
    path('medical-history/<int:pk>/', MedicalHistoryDetailView.as_view(), name='medical-history-detail'),
]
