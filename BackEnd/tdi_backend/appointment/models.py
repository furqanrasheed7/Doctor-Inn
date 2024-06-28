from django.db import models

class Appointment(models.Model):
    doctor = models.ForeignKey('doctor.Doctor', on_delete=models.CASCADE)
    patient = models.ForeignKey('patient.Patient', on_delete=models.CASCADE)
    hospital = models.ForeignKey('hospital.Hospital', on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=20)  # e.g., 'confirmed', 'canceled', 'completed'
    notes = models.TextField()

class Token(models.Model):
    hospital = models.ForeignKey('hospital.Hospital', on_delete=models.CASCADE)
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    time = models.TimeField()
    token_number = models.IntegerField()
    status = models.CharField(max_length=20)  # e.g., 'called', 'waiting', 'missed'
