from allauth.account.views import ConfirmEmailView
from allauth.account.utils import complete_signup
from allauth.account import app_settings as allauth_settings
from allauth.account.adapter import get_adapter

class VerifyEmailView(ConfirmEmailView):
    def get(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)

        user = confirmation.email_address.user

        if allauth_settings.LOGIN_ON_EMAIL_CONFIRMATION:
            return complete_signup(
                self.request, user,
                allauth_settings.EMAIL_VERIFICATION,
                get_adapter(self.request).get_login_redirect_url(self.request)
            )

        return self.render_to_response({})

    def get_template_names(self):
        return ['emails/email_verified.html']
