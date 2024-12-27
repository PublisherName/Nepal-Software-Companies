import json

from django.core.management.base import BaseCommand

from company.models import Company


class Command(BaseCommand):
    help = "Export companies data to JSON file"

    @staticmethod
    def add_arguments(parser):
        parser.add_argument(
            "--output", type=str, default="companies.json", help="Output JSON file path"
        )

    def handle(self, *args, **options):
        try:
            companies = Company.objects.all()
            data = []

            for company in companies:
                data.append(
                    {
                        "name": company.name,
                        "address": company.address,
                        "city": company.city,
                        "website": company.website,
                        "career_page": company.career_page,
                        "email": company.email,
                        "linkedin": company.linkedin,
                        "phone": company.phone,
                        "is_active": company.is_active,
                        "is_valid": company.is_valid,
                    }
                )

            with open(options["output"], "w") as f:
                json.dump(data, f, indent=2)

            self.stdout.write(
                self.style.SUCCESS(
                    f'Successfully exported {len(data)} companies to {options["output"]}'
                )
            )
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error exporting companies: {str(e)}"))
