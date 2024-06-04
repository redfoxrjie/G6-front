<template>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <!-- 插件marker css -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css"></link> 
    <!-- 插件marker css (過渡效果) -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css"></link> 
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <!---- 搜尋攔 ---->
    <!-- <form action="" class="search-form">
        <div class="input-group" type="search">
            <input type="text">
            <button type="submit">搜尋</button>
        </div>
    </form> -->
    <!---- 地圖 ---->
    <div class="row">
        <div class="plan-sidebar col-12 col-md-4">
            <div class="plan-img">
                <img src="@/assets/images/japan_yufuin-kinrinko.jpg">
                <div class="overlay-dark"></div>
                <div class="plan-info">
                    <div id="location"><span class="map-pin"></span>日本九州</div>
                    <h3 id="plan-title">九州五天四夜雙人行</h3>
                    <div class="font-time" id="duration">2024/05/19 ~ 2024/05/23</div>
                </div>
                <div class="btn-back">
                    <a href="#"></a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-8">
            <div id="map" ref="mapContainer"></div>
        </div>
    </div>
    
</template>

<script>
  // 引入Leaflet
import L from 'leaflet'
import 'leaflet.markercluster'
// import 'leaflet-control-geocoder'
import '@/components/map/Control.Geocoder.js';

export default {
    name: 'MapComponent',
    mounted() {
    this.initializeMap()
    },
    methods: {
        initializeMap() {
        // 確保地圖容器有正確的尺寸
            this.$nextTick(() => {
                let map = L.map(this.$refs.mapContainer, {
                    center: [24.9576403, 121.2224478],
                    zoom: 16
                })
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map)
                L.Control.geocoder().addTo(map);

                let orangeIcon = new L.Icon({
                    iconUrl:
                    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                })

                // let markers = new L.MarkerClusterGroup().addTo(map)
                // fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
                // .then((response) => response.json())
                // .then((data) => {
                //     data.features.forEach((feature) => {
                //         markers.addLayer(
                //             L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
                //                 icon: orangeIcon
                //             }).bindPopup(feature.properties.name)
                //             // .openPopup()
                //         )
                //     })
                //     map.addLayer(markers)
                // })
                // 強制Leaflet重新計算地圖尺寸
                map.invalidateSize()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/base/font';
@import '../../assets/styles/base/color';


html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#map {
    width: 100%;
    height: 100vh; /* 使用vh設置高度，以確保地圖容器填滿視口高度 */
}

.marker-cluster-small {
    background-color: rgba(181, 226, 140, 0.6);
}

.marker-cluster-small div {
    background-color: rgba(110, 204, 57, 0.6);
}

.marker-cluster-medium {
    background-color: rgba(241, 211, 87, 0.6);
}

.marker-cluster-medium div {
    background-color: rgba(240, 194, 12, 0.6);
}

.marker-cluster-large {
    background-color: rgba(253, 156, 115, 0.6);
}

.marker-cluster-large div {
    background-color: rgba(241, 128, 23, 0.6);
}

.marker-cluster {
    background-clip: padding-box;
    border-radius: 20px;
}

.marker-cluster div {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    border-radius: 15px;
    font: 12px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}

.marker-cluster span {
    line-height: 30px;
}

// plan-sidebar
.plan-sidebar {
    background-color: #fff;
    position: relative;
}
.plan-img {
    width: 100%;
    position: relative;
    img {
        width: 100%;
        aspect-ratio: 573/270;
        object-fit: cover;
        object-position: 0 -20px;
    }
    .overlay-dark {
        width: 100%;
        aspect-ratio: 573/270;
        background-color: $black;
        opacity: .2;
        position: absolute;
        top: 0;
        left: 0;
    }
    .plan-info {
        position: absolute;
        width: 100%;
        color: #fff;
        bottom: 12px;
        left: 18px;
        h3 {
            margin: 6px 0;
        }
    }
    .btn-back{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 12px;
        left: 18px;
        a {
            width: 100%;
            height: 100%;
            display: inline-block;
            background-image: url(@/assets/images/global/icons/arrow-back--white.svg);
            background-repeat: no-repeat;
            background-size: 100%;
        }
    }
    .map-pin {
        width: $base-fontSize;
        height: $base-fontSize;
        display: inline-block;
        background-image: url(@/assets/images/global/icons/map-pin--white.svg);
        background-repeat: no-repeat;
        background-size: 100%;
        vertical-align: top;
        // border: 1px red solid;
    }
}
</style>
