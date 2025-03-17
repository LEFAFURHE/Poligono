ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([414145.523378, 981742.344010, 417402.938822, 983299.963616]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lotes_Soberana_1 = new ol.format.GeoJSON();
var features_Lotes_Soberana_1 = format_Lotes_Soberana_1.readFeatures(json_Lotes_Soberana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lotes_Soberana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_Soberana_1.addFeatures(features_Lotes_Soberana_1);
var lyr_Lotes_Soberana_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_Soberana_1, 
                style: style_Lotes_Soberana_1,
                popuplayertitle: 'Lotes_Soberana',
                interactive: true,
    title: 'Lotes_Soberana<br />\
    <img src="styles/legend/Lotes_Soberana_1_0.png" /> 0,64<br />\
    <img src="styles/legend/Lotes_Soberana_1_1.png" /> 1,32<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lotes_Soberana_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lotes_Soberana_1];
lyr_Lotes_Soberana_1.set('fieldAliases', {'id': 'id', 'Área': 'Área Medida', 'Nombre': 'Nombre de los Potreros Medidos', 'Descrip': 'Descripción General de lo medido', 'Foto': 'Registro Fotográfico', 'Productor': 'Productor', });
lyr_Lotes_Soberana_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'UniqueValues', 'Nombre': 'TextEdit', 'Descrip': 'TextEdit', 'Foto': 'ExternalResource', 'Productor': 'TextEdit', });
lyr_Lotes_Soberana_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Foto': 'hidden field', 'Productor': 'inline label - always visible', });
lyr_Lotes_Soberana_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});