from django.apps import AppConfig


class KineConfig(AppConfig):
    name = 'kine'
    def ready(self):
        import kine.signals


