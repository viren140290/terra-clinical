(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1839:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.messages=a.locale=a.areTranslationsLoaded=void 0;var o,t=r(56),s=r(1853),n=(o=s)&&o.__esModule?o:{default:o};(0,t.addLocaleData)(n.default);a.areTranslationsLoaded=!0,a.locale="es-US",a.messages={"Terra.actionHeader.back":"Atrás","Terra.actionHeader.close":"Cerrar","Terra.actionHeader.maximize":"Maximizar","Terra.actionHeader.minimize":"Minimimzar","Terra.actionHeader.next":"Siguiente","Terra.actionHeader.previous":"Anterior","Terra.ajax.error":"Error al cargar el contenido.","Terra.application.tabs.more":"Más","Terra.application.utility.back":"Atrás","Terra.application.utility.button":"Botón de utilidades","Terra.application.utility.close":"Cerrar","Terra.application.utility.menu":"Menú de utilidades","Terra.ApplicationHeaderLayout.SkipToContent":"Saltar al contenido","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Menú de alternancia","Terra.applicationLayout.utilityDefaults.about":"Acerca de","Terra.applicationLayout.utilityDefaults.appearance":"Apariencia","Terra.applicationLayout.utilityDefaults.changePhoto":"Cambiar foto","Terra.applicationLayout.utilityDefaults.gettingStarted":"Introducción","Terra.applicationLayout.utilityDefaults.help":"Ayuda","Terra.applicationLayout.utilityDefaults.logOut":"Cerrar sesión","Terra.applicationLayout.utilityDefaults.menu":"Menú","Terra.applicationLayout.utilityDefaults.security":"Seguridad","Terra.applicationLayout.utilityDefaults.settings":"Configuración","Terra.applicationLayout.utilityDefaults.termsOfUse":"Condiciones de uso","Terra.applicationLayout.utilityDefaults.userInformation":"Información de usuario","Terra.data-grid.row-selection-template":"Seleccionar: {row-description}","Terra.datePicker.dateFormat":"DD/MM/AAAA","Terra.datePicker.openCalendar":"Abrir calendario","Terra.datePicker.today":"Hoy","Terra.devSiteRoutingMenu.filter":"Filtrar","Terra.form.field.optional":"(opcional)","Terra.form.select.add":'Agregar "{text}"',"Terra.form.select.ariaLabel":"Buscar","Terra.form.select.clearSelect":"Borrar selección","Terra.form.select.defaultDisplay":"- Predeterminado -","Terra.form.select.defaultUsageGuidance":"Use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.","Terra.form.select.dimmed":"Atenuado.","Terra.form.select.disabled":"Deshabilitado.","Terra.form.select.listOfTotalOptions":"Lista de {total} opciones.","Terra.form.select.maxSelectionHelp":"Límite de {text} elementos.","Terra.form.select.maxSelectionOption":"Número máximo de {text} elementos seleccionados","Terra.form.select.mobileButtonUsageGuidance":"Pulse para acceder a las opciones.","Terra.form.select.mobileUsageGuidance":"Deslice a la derecha para acceder a las opciones.","Terra.form.select.multiSelectUsageGuidance":"Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar o deseleccionar una opción.","Terra.form.select.noResults":'No se encontró ningún resultado que coincida para "{text}"',"Terra.form.select.searchUsageGuidance":"Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.","Terra.form.select.selectCleared":"Se borró el valor seleccionado","Terra.form.select.selected":"Seleccionado.","Terra.form.select.selectedText":"Se seleccionó {text}.","Terra.form.select.unselected":"No seleccionado.","Terra.onsetPicker.age":"Edad","Terra.onsetPicker.ageLabel":"Escriba una edad","Terra.onsetPicker.agePrecision":"Precisión de la edad","Terra.onsetPicker.agePrecisionLabel":"Seleccione la precisión de la edad","Terra.onsetPicker.agePrecisionMonth":"Meses","Terra.onsetPicker.agePrecisionWeek":"Semanas","Terra.onsetPicker.agePrecisionYear":"Años","Terra.onsetPicker.april":"Abril","Terra.onsetPicker.august":"Agosto","Terra.onsetPicker.date":"Fecha","Terra.onsetPicker.dateLabel":"Seleccione una fecha","Terra.onsetPicker.december":"Diciembre","Terra.onsetPicker.february":"Febrero","Terra.onsetPicker.granularity":"Granularidad","Terra.onsetPicker.granularityLabel":"Seleccione la granularidad de la fecha","Terra.onsetPicker.january":"Enero","Terra.onsetPicker.july":"Julio","Terra.onsetPicker.june":"Junio","Terra.onsetPicker.march":"Marzo","Terra.onsetPicker.may":"Mayo","Terra.onsetPicker.month":"Mes","Terra.onsetPicker.monthLabel":"Seleccione un mes","Terra.onsetPicker.november":"Noviembre","Terra.onsetPicker.october":"Octubre","Terra.onsetPicker.precision":"Precisión","Terra.onsetPicker.precisionAbout":"Acerca de","Terra.onsetPicker.precisionAfter":"Después","Terra.onsetPicker.precisionBefore":"Antes","Terra.onsetPicker.precisionLabel":"Seleccione la precisión de la fecha","Terra.onsetPicker.precisionOnAt":"el/a Las","Terra.onsetPicker.precisionUnknown":"Desconocido","Terra.onsetPicker.september":"Septiembre","Terra.onsetPicker.year":"Año","Terra.onsetPicker.yearLabel":"Seleccione un año","Terra.Overlay.loading":"Cargando...","Terra.popup.header.close":"Cerrar","Terra.searchField.search":"Buscar","Terra.searchField.submit-search":"Enviar búsqueda"}},1853:function(e,a,r){e.exports=function(){"use strict";return[{locale:"es",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} a",other:"dentro de {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} m",other:"dentro de {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"s",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} s",other:"dentro de {0} s"},past:{one:"hace {0} s",other:"hace {0} s"}}}}},{locale:"es-419",parentLocale:"es"},{locale:"es-AR",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} a",other:"dentro de {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} m",other:"dentro de {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} días",other:"dentro de {0} días"},past:{one:"hace {0} días",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"seg.",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} seg.",other:"dentro de {0} seg."},past:{one:"hace {0} seg.",other:"hace {0} seg."}}}}},{locale:"es-BO",parentLocale:"es-419"},{locale:"es-BR",parentLocale:"es-419"},{locale:"es-BZ",parentLocale:"es-419"},{locale:"es-CL",parentLocale:"es-419"},{locale:"es-CO",parentLocale:"es-419"},{locale:"es-CR",parentLocale:"es-419"},{locale:"es-CU",parentLocale:"es-419"},{locale:"es-DO",parentLocale:"es-419",fields:{year:{displayName:"Año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} a",other:"dentro de {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"Mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} m",other:"dentro de {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"Día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"Minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"Segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"s",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} s",other:"dentro de {0} s"},past:{one:"hace {0} s",other:"hace {0} s"}}}}},{locale:"es-EA",parentLocale:"es"},{locale:"es-EC",parentLocale:"es-419"},{locale:"es-GQ",parentLocale:"es"},{locale:"es-GT",parentLocale:"es-419"},{locale:"es-HN",parentLocale:"es-419"},{locale:"es-IC",parentLocale:"es"},{locale:"es-MX",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el año próximo","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"en {0} a",other:"en {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el mes próximo","-1":"el mes pasado"},relativeTime:{future:{one:"en {0} mes",other:"en {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"en {0} m",other:"en {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"en {0} día",other:"en {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"en {0} h",other:"en {0} n"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"en {0} min",other:"en {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"s",relative:{0:"ahora"},relativeTime:{future:{one:"en {0} s",other:"en {0} s"},past:{one:"hace {0} s",other:"hace {0} s"}}}}},{locale:"es-NI",parentLocale:"es-419"},{locale:"es-PA",parentLocale:"es-419"},{locale:"es-PE",parentLocale:"es-419"},{locale:"es-PH",parentLocale:"es"},{locale:"es-PR",parentLocale:"es-419"},{locale:"es-PY",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} a",other:"dentro de {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} m",other:"dentro de {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"seg.",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} seg.",other:"dentro de {0} seg."},past:{one:"hace {0} seg.",other:"hace {0} seg."}}}}},{locale:"es-SV",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} a",other:"dentro de {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} m",other:"dentro de {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"s",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} s",other:"dentro de {0} s"},past:{one:"hace {0} s",other:"hace {0} s"}}}}},{locale:"es-US",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el año próximo","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},"year-short":{displayName:"a",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} a",other:"dentro de {0} a"},past:{one:"hace {0} a",other:"hace {0} a"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el mes próximo","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},"month-short":{displayName:"m",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} m",other:"dentro de {0} m"},past:{one:"hace {0} m",other:"hace {0} m"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},"day-short":{displayName:"d",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"hace {0} h",other:"hace {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"hace {0} min",other:"hace {0} min"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}},"second-short":{displayName:"s",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} s",other:"dentro de {0} s"},past:{one:"hace {0} s",other:"hace {0} s"}}}}},{locale:"es-UY",parentLocale:"es-419"},{locale:"es-VE",parentLocale:"es-419"}]}()}}]);
//# sourceMappingURL=es-US-translations-5e7ea5882b0f64add7db.js.map