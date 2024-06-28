from rest_framework import generics
from .models import Appointment, Token
from .serializers import AppointmentSerializer, TokenSerializer

class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class TokenListCreateView(generics.ListCreateAPIView):
    queryset = Token.objects.all()
    serializer_class = TokenSerializer

class TokenDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Token.objects.all()
    serializer_class = TokenSerializer
