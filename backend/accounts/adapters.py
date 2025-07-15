from allauth.account.adapter import DefaultAccountAdapter
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site

class AccountAdapter(DefaultAccountAdapter):
    def send_confirmation_mail(self, request, emailconfirmation, signup):
        context = {
            "user": emailconfirmation.email_address.user,
            "activate_url": self.get_email_confirmation_url(request, emailconfirmation),
            "current_site": get_current_site(request),
        }

        text_body = render_to_string("emails/email_confirmation.txt", context)
        html_body = render_to_string("emails/email_confirmation.html", context)

        msg = EmailMultiAlternatives(
            subject='Confirm your Devfolio account!',
            body=text_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[emailconfirmation.email_address.email]
        )
        msg.attach_alternative(html_body, "text/html")
        msg.send()
