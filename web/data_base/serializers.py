from django.conf.urls import url, include
from rest_framework import routers, serializers, viewsets
from .models import *

# Serializers define the API representation.
class VehicleSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Vehicle
		fields = [
			'id',
			'vin',
			'year',
			'status',
			'make',
			'model',
			'trim',
			'mileage',
			'color_ext',
			'color_int',
			'list_price',
			'min_price',
			'condition',
			'owner_num',
			'drive',
			'engine',
			'transmission',
			'fuel',
			'body_type',
			'top_type',
			'interior_type',
			'door',
			'carfaxPath',
			'handler',
			'location',
			'in_stock_time',
			'deposit_paid_time',
			'sold_time',
			'notes',

			#'equipment_AirConditioning',
			#'equipment_CruiseControl',
			#'equipment_ChildSeat',
			#'equipment_ChildSeatAnchors',
			#'equipment_PowerDoorLocks',
			#'equipment_PowerMirror',
			#'equipment_PowerWindows',
			#'equipment_RearWindowDefroster',
			#'equipment_AirBagSideCurtain',
			#'equipment_Airbags',
			#'equipment_TiltTelescopeWheel',
			#'equipment_TintedGlass',
			#'equipment_AlloyWheels',
			#'equipment_PowerBrakes',
			#'equipment_AntilockBrakes',
			#'equipment_PowerSeats',
			#'equipment_PowerSteering',
			#'equipment_DVD',
			#'equipment_GPS',
			#'equipment_DualClimateControl',
			#'equipment_HeatedSeats',

			'eb_Power_Mirrors',
			'eb_Power_Windows',
			'eb_Traction_Control',
			'eb_Stability_Control',
			'eb_Cruise_Control',
			'eb_Security_System',
			'eb_Tire_Pressure_Monitoring_System',
			'eb_Radio_CD_Player',
			'eb_AUX',
			'eb_USB',
			'eb_Steering_Wheel_Audio_Control',
			'eb_AntiLock_Brake_System',
			'eb_AC',

			'es_Universal_Garage_Opener',
			'es_Power_Seats_Driver',
			'es_Power_Seats_Both',
			'es_Rain_Sensing_Wiper',
			'es_Back_Up_Camera',
			'es_Parking_Sensor',
			'es_Sunroof',
			'es_All_Weather_Floor_Mats',
			'es_Automatic_Headlights',
			'es_Daytime_Running_Lights',
			'es_Tilt_Steering_Wheel',
			'es_Navigation_GPS',
			'es_Dual_Climate_Control',

			'ep_Heads_Up_Display',
			'ep_Heated_Seats_Front',
			'ep_Heated_Seats_Rear',
			'ep_Cooled_Seats_Front',
			'ep_Cooled_Seats_Rear',
			'ep_Lane_Departure_System',
			'ep_Keyless_Entry',
			'ep_Keyless_Start',
			'ep_Rear_Spoiler',
			'ep_Heated_Steering_Wheel',
			'ep_Panorama_Sunroof',
			'ep_Night_Vision',
			'ep_Premium_Stereo',

			'valid'
		]

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Customer
		fields = [
			'id',
			'name',
			'register_time',
			'email',
			'phone',
			'living_area',
			'password'
		]
'''
class ImageSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Image
		fields = [
			'id',
			'name',
			'path',
			'view',
			'size'
		]
'''

class FavoriteSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Favorite
		fields = [
			'customer',
			'vehicle',
			'like_time'
		]

class SellSerializer(serializers.HyperlinkedModelSerializer):
	vehicle = serializers.PrimaryKeyRelatedField(queryset=Vehicle.objects.all())
	customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
	class Meta:
		model = Sell
		fields = [
			'customer',
			'vehicle',
			'sell_time'
		]

class Has_imageSerializer(serializers.HyperlinkedModelSerializer):
	#vehicle_trim = serializers.CharField(source='vehicle.trim', read_only=True)
	#vehicle_year = serializers.IntegerField(source='vehicle.year', read_only=True)
	#vehicle_drive = serializers.CharField(source='vehicle.drive', read_only=True)
	#vehicle_list_price = serializers.IntegerField(source='vehicle.list_price', read_only=True)
	#vehicle_color_int = serializers.CharField(source='vehicle.color_int', read_only=True)
	#vehicle_color_ext = serializers.CharField(source='vehicle.color_ext', read_only=True)
	#vehicle_mileage = serializers.IntegerField(source='vehicle.mileage', read_only=True)
	#vehicle_model = serializers.CharField(source='vehicle.model', read_only=True)
	#vehicle_make = serializers.CharField(source='vehicle.make', read_only=True)

	vehicle = serializers.PrimaryKeyRelatedField(queryset=Vehicle.objects.all())
	class Meta:
		model = Has_image
		fields = [
			'id',
			'vehicle',
			'image',
			'view',
			'size',

			#"vehicle_make",
			#"vehicle_drive",
			#"vehicle_model",
			#"vehicle_mileage",
			#"vehicle_color_ext",
			#"vehicle_color_int",
			#"vehicle_list_price",
			#"vehicle_year",
			#"vehicle_trim",
		]


# ViewSets define the view behavior.
class VehicleViewSet(viewsets.ModelViewSet):
	queryset = Vehicle.objects.all()
	serializer_class = VehicleSerializer

class CustomerViewSet(viewsets.ModelViewSet):
	queryset = Customer.objects.all()
	serializer_class = CustomerSerializer

'''
class ImageViewSet(viewsets.ModelViewSet):
	queryset = Image.objects.all()
	serializer_class = ImageSerializer
'''

class FavoriteViewSet(viewsets.ModelViewSet):
	queryset = Favorite.objects.all()
	serializer_class = FavoriteSerializer

class SellViewSet(viewsets.ModelViewSet):
	queryset = Sell.objects.all()
	serializer_class = SellSerializer

class Has_imageViewSet(viewsets.ModelViewSet):
	queryset = Has_image.objects.all()
	serializer_class = Has_imageSerializer

