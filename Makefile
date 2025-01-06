dump-companies:
	@echo "Dumping company data..."
	@mkdir -p fixture
	@python manage.py dumpdata company --indent 2 --output fixture/companies.json
	@echo "Company data dumped to fixture/companies.json"

load-companies:
	@echo "Loading company data..."
	@python manage.py loaddata fixture/companies.json
	@echo "Company data loaded"
