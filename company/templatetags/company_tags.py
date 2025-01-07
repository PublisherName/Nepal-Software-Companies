from django import template
from django.http import QueryDict
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter
def dict_wo_page(querydict):
    """Remove page parameter from query string"""
    if not querydict:
        return ""
    qdict = QueryDict("", mutable=True)
    qdict.update(querydict)
    if "page" in qdict:
        del qdict["page"]
    return qdict.urlencode()


@register.filter
def status_badge(is_active):
    """Return formatted status badge"""
    if is_active:
        return mark_safe('<span class="badge bg-success">Active</span>')
    return mark_safe('<span class="badge bg-secondary">Inactive</span>')


@register.filter
def format_url(url):
    """Format URL for display"""
    if not url:
        return ""
    return url.replace("http://", "").replace("https://", "").rstrip("/")


@register.simple_tag
def page_url(request, page_number):
    """Generate URL for pagination with existing query parameters"""
    queries = request.GET.copy()
    queries["page"] = page_number
    return f"?{queries.urlencode()}"


@register.filter
def get_range(page_obj):
    """Get range of pages to display in pagination"""
    current = page_obj.number
    total = page_obj.paginator.num_pages

    if total <= 5:
        return range(1, total + 1)

    if current <= 3:
        return range(1, 6)

    if current >= total - 2:
        return range(total - 4, total + 1)

    return range(current - 2, current + 3)
