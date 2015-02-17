var mapLayer = new ol.layer.Tile({
	source: new ol.source.Stamen({
		layer: 'toner'
	})
});

var heatmapLayer = new ol.layer.Heatmap({
	source: new ol.source.KML({
		extractStyles: false,
		url: '/data/US_Farmers_Markets.kml' ,
		projection: 'EPSG:3857',
	}),
	radius: 2
});

var map = new ol.Map({
	target: 'map',
	layers: [mapLayer, heatmapLayer],
	controls: [new ol.control.Attribution()],
	view: new ol.View({
		center: ol.proj.transform([-92.5000, 38.5000], 'EPSG:4326', 'EPSG:3857'),
		zoom: 3.5
	})
});	