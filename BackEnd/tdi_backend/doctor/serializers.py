from rest_framework import serializers
from .models import Doctor, DoctorSchedule, DoctorHospital

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class DoctorScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorSchedule
        fields = '__all__'

class DoctorHospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorHospital
        fields = '__all__'
