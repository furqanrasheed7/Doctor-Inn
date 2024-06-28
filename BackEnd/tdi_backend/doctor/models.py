from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=255)
    specialty = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)
    email = models.EmailField()

class DoctorSchedule(models.Model):
    doctor_hospital = models.ForeignKey('DoctorHospital', on_delete=models.CASCADE)
    day_of_week = models.CharField(max_length=10)  # e.g., 'Monday'
    start_time = models.TimeField()
    end_time = models.TimeField()

class DoctorHospital(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    hospital = models.ForeignKey('hospital.Hospital', on_delete=models.CASCADE)
    room_number = models.CharField(max_length=10)
