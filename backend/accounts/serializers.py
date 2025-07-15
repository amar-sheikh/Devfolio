from dj_rest_auth.registration.serializers import RegisterSerializer as BaseRegisterSerializer

class RegisterSerializer(BaseRegisterSerializer):
    def _has_phone_field(self):
        return False
