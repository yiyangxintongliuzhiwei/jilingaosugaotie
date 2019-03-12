/* eslint-disable */
import L from 'leaflet'

// Leaflet < 0.8 compatibility
if (typeof L.Layer === 'undefined') {
  L.Layer = L.Class;
}
let BocoMapLayer = L.Layer.extend({
  initialize: function(config) {
    this._cfg = config;
    this._data = [];
    this._validData = [];
    this._label = [];
    this._visible = false;
    this._el = L.DomUtil.create('div', 'leaflet-zoom-hide-custom');
    this._el.style.left = "0px";
    this._el.style.top = "0px";
    this._el.style.zIndex = 201;
    this._canvas = document.createElement('canvas');
    this._el.appendChild(this._canvas);
    this._ctx = this._canvas.getContext('2d');
    this._icon = L.icon({
      iconUrl: this._cfg.icon
    });
    this._layerGroup = L.layerGroup();
  },
  onAdd: function(map) {
    let size = map.getSize();
    this._map = map;
    this._width = size.x;
    this._height = size.y;
    this._el.style.width = size.x + 'px';
    this._el.style.height = size.y + 'px';
    this._el.style.position = 'absolute';
    this._canvas.width = size.x;
    this._canvas.height = size.y;
    this._origin = this._map.layerPointToLatLng(new L.Point(0, 0));
    map.getPanes().overlayPane.appendChild(this._el);
    map.on('moveend', this._reset, this);
    this._update();
  },
  addTo: function(map) {
    map.addLayer(this);
    this._layerGroup.addTo(map);
    return this;
  },
  onRemove: function(map) {
    map.getPanes().overlayPane.removeChild(this._el);
    map.off('moveend', this._reset, this);
    this._data = [];
    this._validData = [];
    this._label = [];
  },
  setVisible: function(visible) {
    this._visible = visible;
    this._update();
  },
  _clear: function() {
    this._ctx.clearRect(0, 0, this._width, this._height);
  },
  _update: function() {
    if (this._visible) {
      if (!this._map) {
        return;
      }
      let mapPane = this._map.getPanes().mapPane;
      let point = mapPane._leaflet_pos;
      // reposition the layer
      this._el.style[BocoMapLayer.CSS_TRANSFORM] = 'translate(' +
        -Math.round(point.x) + 'px,' +
        -Math.round(point.y) + 'px)';
      if (this._data.length == 0) {
        this._clear();
        return;
      }
      let len = this._data.length;
      let bounds = this._map.getBounds();
      this._validData = [];
      while (len--) {
        let latlng = new L.LatLng(this._data[len][0], this._data[len][1]);
        if (bounds.contains(latlng)) {
          this._validData.push(latlng);
        }
      }
      //this._drawPointMarker();
      if (this._map.getZoom() < 18) {
       this._drawPointMarker();
       } else {
       this._drawIconMarker();
       }
    } else {
      this._clear();
    }
  },
  /** 地图放大到一定级别,用图片替换点 */
  _drawIconMarker: function() {
    let len = this._validData.length;
    let latlng;
    while (len--) {
      latlng = this._validData[len];
      let marker = L.marker([latlng.lat, latlng.lng], {
        icon: this._icon
      });
      this._layerGroup.addLayer(marker);
      if(this._label.length != 0){
        let name = this._label[len];
        let popup = L.popup({
          closeButton : false,
          className: 'scale-gis-popup'
        }).setContent('<div>'+name+'</div>')
        marker.addEventListener('mouseover',function(obj){
          popup.setLatLng(obj.latlng);
          popup.openOn(this._map);
        });
        marker.addEventListener('mouseout',function(obj){
          popup._close();
        });
      }
    }
    this._validData = null;
  },
  /** 地图缩小到一定级别,则画点表示基站 */
  _drawPointMarker: function() {
    let len = this._validData.length;
    this._ctx.fillStyle = this._cfg.color;
    this._ctx.beginPath();
    let scale = Math.pow(2, this._map.getZoom());
    // radius根据图层缩放缩放
    // let radiusScale = this._cfg.scaleRadius ? scale : 1;
    let latlng, point;
    while (len--) {
      latlng = this._validData[len];
      point = this._map.latLngToContainerPoint(latlng);
      let cx = Math.round(point.x);
      let cy = Math.round(point.y);
      this._ctx.moveTo(cx, cy);
      this._ctx.arc(cx, cy, this._cfg.radius, 0, 2 * Math.PI, true);
    }
    this._ctx.fill();
    this._validData = null;
  },
  setData: function(data) {
    let len = data.length;
    let arr = [];
    let labelArr = [];
    while (len--) {
      let entry = data[len];
      let latlng = [entry.LATITUDE, entry.LONGITUDE];
      if(entry.label){
        labelArr.push(entry.label);
      }
      arr.push(latlng);
    }
    this._data = arr;
    this._label = labelArr;
    this._update();
  },
  _reset: function() {
    this._origin = this._map.layerPointToLatLng(new L.Point(0, 0));
    let size = this._map.getSize();
    if (this._width !== size.x || this._height !== size.y) {
      this._width = size.x;
      this._height = size.y;

      this._el.style.width = this._width + 'px';
      this._el.style.height = this._height + 'px';
    }
    this._clear();
    this._update();
  }
});

BocoMapLayer.CSS_TRANSFORM = (function() {
  let div = document.createElement('div');
  let props = [
    'transform',
    'WebkitTransform',
    'MozTransform',
    'OTransform',
    'msTransform'
  ];
  for (let i = 0; i < props.length; i++) {
    let prop = props[i];
    if (div.style[prop] !== undefined) {
      return prop;
    }
  }
  return props[0];
})();

export default BocoMapLayer;
