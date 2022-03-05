#/bin/python3
from django.http import HttpResponse
from django.template import loader
import datetime
import os

def index(request):
	now = datetime.datetime.now().isoformat()
	template = loader.get_template(os.path.dirname(__file__) + "/templates/index.html")
	context = {
		"now_formated": now[0:10] + " t " + now[11:19],
		"thing": ["A", "B", "C"],
	}
	return HttpResponse(template.render(context, request))
