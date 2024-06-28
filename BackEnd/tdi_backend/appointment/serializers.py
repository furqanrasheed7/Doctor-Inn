from rest_framework import serializers
from doctor.models import Doctor
from patient.models import Patient
from hospital.models import Hospital
from .models import Appointment, Token

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'specialty', 'contact_number', 'email']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'name', 'cnic_number', 'age', 'gender', 'contact_number', 'email', 'address', 'medical_history']

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = ['id', 'name', 'address', 'contact_number', 'email']

class AppointmentSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()
    patient = PatientSerializer()
    hospital = HospitalSerializer()

    class Meta:
        model = Appointment
        fields = ['id', 'doctor', 'patient', 'hospital', 'date', 'time', 'status', 'notes']

class TokenSerializer(serializers.ModelSerializer):
    hospital = HospitalSerializer()
    appointment = AppointmentSerializer()

    class Meta:
        model = Token
        fields = ['id', 'hospital', 'appointment', 'time', 'token_number', 'status']
