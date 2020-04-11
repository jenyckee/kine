from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group

from .models import User, Patient, Therapist


class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_patient', 'is_therapist', 'password1', 'password2')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_patient', 'is_therapist', 'password')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    list_display = ['email', 'username', 'is_patient', 'is_therapist']
    search_fields = ('email', 'username')
    ordering = ('email',)

admin.site.register(Therapist)
admin.site.register(Patient)
admin.site.register(User, UserAdmin)
# admin.site.unregister(Group)