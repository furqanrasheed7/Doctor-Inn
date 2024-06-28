from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=255)
    cnic_number = models.CharField(max_length=15, unique=True)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    contact_number = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.TextField()
    medical_history = models.TextField()

class MedicalHistory(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey('doctor.Doctor', on_delete=models.CASCADE)
    date = models.DateField()
    diagnosis = models.TextField()
    treatment = models.TextField()
    notes = models.TextField()
