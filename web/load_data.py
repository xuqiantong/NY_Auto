import json
from datetime import datetime
#import sys,os
#sys.path.append('./mysite/')
#os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'
#from xqt_test.models import Vehicle

with open('v1.json', 'w') as json_f:
	objs = []
	with open('Vehicles.csv') as f:
		lines = f.readlines()

		cnt = 0
		for line in lines:
			line = line.split(',')
			if len(line[1]) == 0: continue

			cnt += 1
			obj = {"pk":cnt, "model":'data_base.vehicle', "fields" :{}}
			obj['fields']['year'] = int(line[0])
			obj['fields']['status'] = line[1]
			obj['fields']['make'] = line[2]
			obj['fields']['model'] = line[3].replace(' ', '_')
			obj['fields']['mileage'] = int(line[4])
			obj['fields']['list_price'] = int(line[6])
			obj['fields']['valid'] = True
			try:
				obj['fields']['min_price'] = int(line[7])
				#print line[14]
				#tmp = datetime.strptime(line[14], '%m/%d/%Y')
				#print 'tmp', tmp
				#obj['fields']['in_stock_time'] = tmp
			except:
				pass
			obj['fields']['vin'] = line[11]
			if len(line[14]) != 0:
				date = line[14].split('/')
				date[0],date[1],date[2] = date[2],date[0],date[1]
				obj['fields']['in_stock_time'] = '-'.join(date)

			objs.append(obj)

	json.dump(objs, json_f)


