import csv
import json
import os

from django.core.management.base import BaseCommand
from django.db import IntegrityError

from company.models import Company


class Command(BaseCommand):
    help = "Import companies from a CSV or JSON file"

    @staticmethod
    def add_arguments(parser):
        parser.add_argument("file_path", type=str, help="Path to the CSV or JSON file")

    def handle(self, *args, **kwargs):
        file_path = kwargs["file_path"]
        file_extension = os.path.splitext(file_path)[1].lower()

        if file_extension == ".csv":
            self.import_from_csv(file_path)
        elif file_extension == ".json":
            self.import_from_json(file_path)
        else:
            self.stdout.write(self.style.ERROR("Unsupported file format. Use CSV or JSON"))

    def import_from_csv(self, file_path):
        with open(file_path, newline="") as file:
            reader = csv.DictReader(file)
            self.process_data(reader)

    def import_from_json(self, file_path):
        with open(file_path) as file:
            data = json.load(file)
            self.process_data(data)

    def process_data(self, data):
        for row in data:
            phone_numbers = row.get("phone", "").split(",") if row.get("phone") else []
            primary_phone = phone_numbers[0] if phone_numbers else None

            try:
                company, created = Company.objects.get_or_create(
                    name=row.get("name"),
                    defaults={
                        "address": row.get("address", ""),
                        "city": row.get("city", ""),
                        "website": row.get("website") or None,
                        "career_page": row.get("career_page") or None,
                        "email": row.get("email") or None,
                        "linkedin": row.get("linkedIn") or None,
                        "phone": primary_phone or None,
                        "is_active": str(row.get("is_active", "False")).lower() == "true",
                        "is_valid": str(row.get("is_valid", "False")).lower() == "true",
                    },
                )
                if created:
                    self.stdout.write(self.style.SUCCESS(f"Added company: {company.name}"))
                else:
                    self.stdout.write(
                        self.style.WARNING(f"Company already exists: {company.name}")
                    )
            except IntegrityError:
                self.stdout.write(
                    self.style.ERROR(f"IntegrityError: Duplicate entry for {row.get('name')}")
                )
