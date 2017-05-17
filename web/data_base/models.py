from __future__ import unicode_literals

from django.db import models
from django.utils.timezone import now
from datetime import datetime, date
from numpy.random import *
# Create your models here.


class Vehicle(models.Model):
	vin = models.CharField(max_length=100, default = '-')
	year = models.IntegerField(default=0)
	make = models.CharField(max_length=100, default = '-')
	model = models.CharField(max_length=100, default = '-')
	
	# Status
	Status = (
		('-', '---'),
		('Green', 'Available'),
		('Red', 'Sold'),
		('Yellow', 'Pending')
	)
	status = models.CharField(max_length=100, default = '-', choices = Status)


	mileage = models.IntegerField(default=0)
	trim = models.CharField(max_length=100, default = '-')
	list_price = models.IntegerField(default=0)
	min_price = models.IntegerField(default=0)

	# Colors
	COLORS = (
		('-', '---'),
		('beige', 'Beige'), 
		('black', 'Black'), 
		('blue', 'Blue'), 
		('brown', 'Brown'), 
		('burgundy', 'Burgundy'), 
		('camouflage', 'Camouflage'), 
		('charcoal', 'Charcoal'), 
		('gold', 'Gold'), 
		('gray', 'Gray'), 
		('green', 'Green'), 
		('lime', 'Lime'), 
		('orange', 'Orange'), 
		('pink', 'Pink'), 
		('purple', 'Purple'), 
		('red', 'Red'), 
		('silver', 'Silver'), 
		('turquoise', 'Turquoise'), 
		('white', 'White'), 
		('yellow', 'Yellow')
	)
	color_ext = models.CharField(max_length=100, default = '-', choices = COLORS)
	color_int = models.CharField(max_length=100, choices = COLORS, default = 'Bei')

	# Drive 
	DRIVE_TRAIN = (
		('-', '---'), 
		('FWD', 'Front Wheel Drive'), 
		('RWD', 'Rear Wheel Drive'), 
		('4WD', 'Four Wheel Drive'), 
		('AWD', 'All Wheel Drive')  
	)
	drive = models.CharField(max_length=100, default = '-', choices = DRIVE_TRAIN)

	# Engine
	ENGINE = (
		('-', '---'), 
		('1', '1'),
		('2', '2'),
		('3', '3'),
		('4', '4'),
		('5', '5'),
		('6', '6'),
		('7', '7'),
		('8', '8'),
		('10', '10'),
		('12', '12'),
		('r', 'Rotary')
	)
	engine = models.CharField(max_length=100, default = '-', choices = ENGINE)

	# Transmission
	TRANSMISSION = (
		('-', '---'),
		('A', 'Automatic'),
		('M', 'Manual'),
	)
	transmission = models.CharField(max_length=100, default = '-', choices = TRANSMISSION)

	# Fuel
	FUEL = (
		('-', '---'),
		('g', 'Gasoline'),
		('d', 'Diesel'),
		('h', 'Hybrid'),
		('e', 'Electronic')
	)
	fuel = models.CharField(max_length=100, default = '-', choices = FUEL)

	# Body
	BODY_TYPE = (
		('-', '---'),
		('Se', 'Sedan'), 
		('Co', 'Coupe'), 
		('Co', 'Convertible'), 
		('SU', 'SUV'), 
		('Ha', 'Hatchback'), 
		('Wa', 'Wagon'), 
		('Mi', 'Minivan'), 
		('Mo', 'Motorcycle'), 
	)
	body_type = models.CharField(max_length=100, default = '-', choices = BODY_TYPE)

	# Top_Type
	TOP_TYPE = (
		('-', '---'),
		('Co', 'Convertible Softtop'), 
		('Co', 'Convertible Hardtop'), 
		('Su', 'Sun Roof'), 
		('Mo', 'Moon Roof'), 
		('TT', 'T-Top'), 
		('Pa', 'Panorama Sunroof'), 
	)
	top_type = models.CharField(max_length=100, default = '-', choices = TOP_TYPE)

	# Interior type
	INT_TYPE = (
		('-', '---'),
		('Cl', 'Cloth'), 
		('Le', 'Leather'), 
		('Vi', 'Vinyl'), 
	)
	interior_type = models.CharField(max_length=100, default = '-', choices = INT_TYPE)

	door = models.IntegerField(default=0)
	carfaxPath = models.CharField(max_length=100, default = '-')
	condition = models.CharField(max_length=100, default = '-')
	owner_num = models.IntegerField(default=0)
	handler = models.CharField(max_length=100, default = '-')
	location = models.CharField(max_length=100, default = '-')
	in_stock_time = models.DateTimeField(default = date(1970, 1, 1))
	deposit_paid_time = models.DateTimeField(default = date(1970, 1, 1)) #default = datetime.now, 
	sold_time = models.DateTimeField(default = date(1970, 1, 1))

	# Equipments_previous
	#equipment_AirConditioning = models.BooleanField(default = False)
	#equipment_CruiseControl = models.BooleanField(default = False)
	#equipment_ChildSeat = models.BooleanField(default = False)
	#equipment_ChildSeatAnchors = models.BooleanField(default = False)
	#equipment_PowerDoorLocks = models.BooleanField(default = False)
	#equipment_PowerMirror = models.BooleanField(default = False)
	#equipment_PowerWindows = models.BooleanField(default = False)
	#equipment_RearWindowDefroster = models.BooleanField(default = False)
	#equipment_AirBagSideCurtain = models.BooleanField(default = False)
	#equipment_Airbags = models.BooleanField(default = False)
	#equipment_TiltTelescopeWheel = models.BooleanField(default = False)
	#equipment_TintedGlass = models.BooleanField(default = False)
	#equipment_AlloyWheels = models.BooleanField(default = False)
	#equipment_PowerBrakes = models.BooleanField(default = False)
	#equipment_AntilockBrakes = models.BooleanField(default = False)
	#equipment_PowerSeats = models.BooleanField(default = False)
	#equipment_PowerSteering = models.BooleanField(default = False)
	#equipment_DVD = models.BooleanField(default = False)
	#equipment_GPS = models.BooleanField(default = False)
	#equipment_DualClimateControl = models.BooleanField(default = False)
	#equipment_HeatedSeats = models.BooleanField(default = False)

	## Equipments
	# basic
	eb_Power_Mirrors = models.BooleanField(default = False)
	eb_Power_Windows = models.BooleanField(default = False)
	eb_Traction_Control = models.BooleanField(default = False)
	eb_Stability_Control = models.BooleanField(default = False)
	eb_Cruise_Control = models.BooleanField(default = False)
	eb_Security_System = models.BooleanField(default = False)
	eb_Tire_Pressure_Monitoring_System = models.BooleanField(default = False)
	eb_Radio_CD_Player = models.BooleanField(default = False)
	eb_AUX = models.BooleanField(default = False)
	eb_USB = models.BooleanField(default = False)
	eb_Steering_Wheel_Audio_Control = models.BooleanField(default = False)
	eb_AntiLock_Brake_System = models.BooleanField(default = False)
	eb_AC = models.BooleanField(default = False)

	# value
	es_Universal_Garage_Opener = models.BooleanField(default = False)
	es_Power_Seats_Driver = models.BooleanField(default = False)
	es_Power_Seats_Both = models.BooleanField(default = False)
	es_Rain_Sensing_Wiper = models.BooleanField(default = False)
	es_Back_Up_Camera = models.BooleanField(default = False)
	es_Parking_Sensor = models.BooleanField(default = False)
	es_Sunroof = models.BooleanField(default = False)
	es_All_Weather_Floor_Mats = models.BooleanField(default = False)
	es_Automatic_Headlights = models.BooleanField(default = False)
	es_Daytime_Running_Lights = models.BooleanField(default = False)
	es_Tilt_Steering_Wheel = models.BooleanField(default = False)
	es_Navigation_GPS = models.BooleanField(default = False)
	es_Dual_Climate_Control = models.BooleanField(default = False)

	# premium
	ep_Heads_Up_Display = models.BooleanField(default = False)
	ep_Heated_Seats_Front = models.BooleanField(default = False)
	ep_Heated_Seats_Rear = models.BooleanField(default = False)
	ep_Cooled_Seats_Front = models.BooleanField(default = False)
	ep_Cooled_Seats_Rear = models.BooleanField(default = False)
	ep_Lane_Departure_System = models.BooleanField(default = False)
	ep_Keyless_Entry = models.BooleanField(default = False)
	ep_Keyless_Start = models.BooleanField(default = False)
	ep_Rear_Spoiler = models.BooleanField(default = False)
	ep_Heated_Steering_Wheel = models.BooleanField(default = False)
	ep_Panorama_Sunroof = models.BooleanField(default = False)
	ep_Night_Vision = models.BooleanField(default = False)
	ep_Premium_Stereo = models.BooleanField(default = False)

	notes = models.CharField(max_length=100, default = '-')
	valid = models.BooleanField(default = False)

	def __str__(self):
		return self.make + '_' + self.model


class Customer(models.Model):
	name = models.CharField(max_length=200)
	register_time = models.DateTimeField(default = datetime.now)
	email = models.CharField(max_length=100, default = '-')
	phone = models.CharField(max_length=100, default = '-')
	living_area = models.CharField(max_length=100, default = '-')
	password = models.CharField(max_length=100, default = '-')

	def __str__(self):
		return self.name

'''
class Image(models.Model):
	name = models.CharField(max_length=200, default = '-')
	path = models.CharField(max_length=100, default = '-')
	view = models.CharField(max_length=100, default = '-')
	size = models.IntegerField(default=0)

	def __str__(self):
		return self.name + '_' + str(randint(0, 999999999)).zfill(9)
'''

class Favorite(models.Model):
	customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
	vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
	like_time = models.DateTimeField(default = datetime.now)

class Sell(models.Model):
	customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
	vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
	sell_time = models.DateTimeField(default = datetime.now)
	
class Has_image(models.Model):
	vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
	#image = models.ForeignKey(Image, on_delete=models.CASCADE)
	#image_path = models.CharField(max_length=100, default = '-')
	image = models.ImageField(upload_to = 'photos/', default = '*.jpg')
	view = models.CharField(max_length=100, default = '-')
	size = models.IntegerField(default=0)

'''
class Sell_Vehicle(models.Model):
	vin = models.CharField(max_length=100, default = '-')
	mileage = models.IntegerField(default=0)

	# Equipments
	equipment_AirConditioning = models.BooleanField(default = False)
	equipment_CruiseControl = models.BooleanField(default = False)
	equipment_ChildSeat = models.BooleanField(default = False)
	equipment_ChildSeatAnchors = models.BooleanField(default = False)
	equipment_PowerDoorLocks = models.BooleanField(default = False)
	equipment_PowerMirror = models.BooleanField(default = False)
	equipment_PowerWindows = models.BooleanField(default = False)
	equipment_RearWindowDefroster = models.BooleanField(default = False)
	equipment_AirBagSideCurtain = models.BooleanField(default = False)
	equipment_Airbags = models.BooleanField(default = False)
	equipment_TiltTelescopeWheel = models.BooleanField(default = False)
	equipment_TintedGlass = models.BooleanField(default = False)
	equipment_AlloyWheels = models.BooleanField(default = False)
	equipment_PowerBrakes = models.BooleanField(default = False)
	equipment_AntilockBrakes = models.BooleanField(default = False)
	equipment_PowerSeats = models.BooleanField(default = False)
	equipment_PowerSteering = models.BooleanField(default = False)
	equipment_DVD = models.BooleanField(default = False)
	equipment_GPS = models.BooleanField(default = False)
	equipment_DualClimateControl = models.BooleanField(default = False)
	equipment_HeatedSeats = models.BooleanField(default = False)

	# Images Paths
	image0 = models.CharField(max_length=100, default = '-')
	image1 = models.CharField(max_length=100, default = '-')
	image2 = models.CharField(max_length=100, default = '-')
	image3 = models.CharField(max_length=100, default = '-')
	image4 = models.CharField(max_length=100, default = '-')
	image5 = models.CharField(max_length=100, default = '-')
	image6 = models.CharField(max_length=100, default = '-')
	image7 = models.CharField(max_length=100, default = '-')
	image8 = models.CharField(max_length=100, default = '-')
	image9 = models.CharField(max_length=100, default = '-')
	image10 = models.CharField(max_length=100, default = '-')
	image11 = models.CharField(max_length=100, default = '-')
	image12 = models.CharField(max_length=100, default = '-')
	image13 = models.CharField(max_length=100, default = '-')
	image14 = models.CharField(max_length=100, default = '-')

	notes = models.CharField(max_length=100, default = '-')
	name = models.CharField(max_length=200, default = '-')
	email = models.CharField(max_length=100, default = '-')
	phone = models.CharField(max_length=100, default = '-')
'''
