ymaps.ready(function () {
 
  // Поиск координатов: https://yandex.ru/map-constructor/location-tool/
 
  var myMap = new ymaps.Map('map-1', {
          // Задаем центр карты
          center: [59.94267813289089,30.316415999999972],
          // И масштаб
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),
 
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );
    
 
 
  var createPlacemark = function(markerId, coord_1, coord_2, markerImage, name, addr) {
 
    markerId = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [+coord_1, +coord_2]
      },
      properties: {
        hintContent: name,
        balloonContent: addr
      }
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: markerImage,
        // Размеры метки.
        iconImageSize: [46, 46],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-20, -45]
    });
 
    myMap.geoObjects.add(markerId);
  };
 
  // Добавление маркеров на карту
  createPlacemark('myPlacemark_1', '59.94267813289089', '30.316415999999972', 'img/map_marker_blue.svg', 'Место силы', 'Санкт-Петербург, Эрмитажная пристань ');
  createPlacemark('myPlacemark_2', '59.93545363045839', '30.326887343994116', 'img/map_marker_red.svg', 'Квест 1', 'Вход в метро');
  createPlacemark('myPlacemark_3', '59.93598684451666', '30.314752621881883', 'img/map_marker_green.svg', 'Квест 2', 'Вход в метро');
 
});


ymaps.ready(function () {
 
  // Поиск координатов: https://yandex.ru/map-constructor/location-tool/
 
  var myMap = new ymaps.Map('map-2', {
          // Задаем центр карты
          center: [59.94267813289089,30.316415999999972],
          // И масштаб
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),
 
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );
    
 
 
  var createPlacemark = function(markerId, coord_1, coord_2, markerImage, name, addr) {
 
    markerId = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [+coord_1, +coord_2]
      },
      properties: {
        hintContent: name,
        balloonContent: addr
      }
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: markerImage,
        // Размеры метки.
        iconImageSize: [46, 46],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });
 
    myMap.geoObjects.add(markerId);
  };
 
  // Добавление маркеров на карту
  createPlacemark('myPlacemark_1', '59.94267813289089', '30.316415999999972', 'img/map_marker_blue.svg', 'Место силы', 'Санкт-Петербург, Эрмитажная пристань ');
  createPlacemark('myPlacemark_2', '59.93545363045839', '30.326887343994116', 'img/map_marker_red.svg', 'Квест 1', 'Вход в метро');
  createPlacemark('myPlacemark_3', '59.93598684451666', '30.314752621881883', 'img/map_marker_green.svg', 'Квест 2', 'Вход в метро');
 
});