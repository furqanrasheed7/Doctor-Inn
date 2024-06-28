from django.contrib import admin
from .models import Doctor, DoctorSchedule, DoctorHospital

admin.site.register(Doctor)
admin.site.register(DoctorSchedule)
admin.site.register(DoctorHospital)
