var wms_layers = [];

var format_Puntos_Colonia_0 = new ol.format.GeoJSON();
var features_Puntos_Colonia_0 = format_Puntos_Colonia_0.readFeatures(json_Puntos_Colonia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_Colonia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Colonia_0.addFeatures(features_Puntos_Colonia_0);
var lyr_Puntos_Colonia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_Colonia_0, 
                style: style_Puntos_Colonia_0,
                popuplayertitle: "Puntos_Colonia",
                interactive: true,
    title: 'Puntos_Colonia<br />\
    <img src="styles/legend/Puntos_Colonia_0_0.png" /> 0 - 9<br />\
    <img src="styles/legend/Puntos_Colonia_0_1.png" /> 9 - 29<br />\
    <img src="styles/legend/Puntos_Colonia_0_2.png" /> 29 - 59<br />\
    <img src="styles/legend/Puntos_Colonia_0_3.png" /> 59 - 119<br />\
    <img src="styles/legend/Puntos_Colonia_0_4.png" /> 119 - 213<br />'
        });

lyr_Puntos_Colonia_0.setVisible(true);
var layersList = [lyr_Puntos_Colonia_0];
lyr_Puntos_Colonia_0.set('fieldAliases', {'NOMGEO': 'NOMGEO', 'NOMUT': 'NOMUT', 'NUMPOINTS': 'NUMPOINTS', 'ID_UNICO': 'ID_UNICO', });
lyr_Puntos_Colonia_0.set('fieldImages', {'NOMGEO': 'TextEdit', 'NOMUT': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'ID_UNICO': 'TextEdit', });
lyr_Puntos_Colonia_0.set('fieldLabels', {'NOMGEO': 'inline label - always visible', 'NOMUT': 'inline label - always visible', 'NUMPOINTS': 'inline label - always visible', 'ID_UNICO': 'inline label - always visible', });
lyr_Puntos_Colonia_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});