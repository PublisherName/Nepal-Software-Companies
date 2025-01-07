from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "homepage.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "Welcome to Software Companies Directory"
        context["description"] = "Find and list software companies in your area"
        return context
