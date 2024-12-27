import os

from root.env_config import BASE_DIR

from .env_config import env

JAZZMIN_SETTINGS_CONFIG = {
    "site_title": env.str("SITE_TITLE", "Site Title"),
    "site_header": env.str("SITE_HEADER", "Site Header"),
    "site_brand": env.str("SITE_BRAND", "Site Brand"),
    "site_logo": env.str(
        "SITE_LOGO", default=os.path.join(BASE_DIR, "static", "admin", "img", "logo.png")
    ),
    "login_logo": None,
    "login_logo_dark": None,
    "site_logo_classes": "img-circle",
    "site_icon": None,
    "welcome_sign": env.str("WELCOME_SIGN", "Welcome"),
    "search_model": ["auth.User"],
    "user_avatar": None,
    "topmenu_links": [
        {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
    ],
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "icons": {
        # Auth icons
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
        # Company icons
        "company": "fas fa-building",
        "company.company": "fas fa-building",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    "related_modal_active": False,
    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": env.bool("SHOW_UI_BUILDER", False),
    "changeform_format": "horizontal_tabs",
}
