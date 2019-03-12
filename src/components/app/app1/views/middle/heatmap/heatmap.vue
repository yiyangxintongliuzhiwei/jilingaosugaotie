<template>
    <view-template>
        <div class="heatmap_container">
            <!--地图渲染图层  -->
            <div class="map_layer" id="map_layer"></div>
            <!-- 右上角表格 -->
            <div class="data_count">
                <div class="item" v-for='item in tableData' :key="item.index">
                    <table>
                        <tr>
                            <th>{{item.name}}</th>
                            <th class="number">{{item.count}} <span>{{item.unit}}</span></th>
                        </tr>
                        <tr>
                            <td>2G</td>
                            <td class="number">{{item.g2}} <span>{{item.unit}}</span></td>
                        </tr>
                        <tr>
                            <td>4G</td>
                            <td class="number">{{item.g4}} <span>{{item.unit}}</span> </td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 左下角热力图控制 -->
            <div class="heatmap_control" title="话务量" :class="{heatmap_control_active:heatMapControlTraffic}" @click="heatMapControl1">
                话务量
            </div>
            <div class="heatmap_control" title="流量" :class="{heatmap_control_active:heatMapControlFlow}" @click="heatMapControl2" style="bottom:220px">
                流量
            </div>
            <!-- 左下角热力图图例 -->
            <div class="heatmap_legend">
                <div class="progress"></div>
                <div class="scale">
                    <div class="scale_item">0</div>
                    <div class="scale_item">100</div>
                    <div class="scale_item">300</div>
                    <div class="scale_item">500(万Erl)</div>
                </div>
            </div>
            <!-- 右下角gis打点图例 -->
            <div class="gis_legend">
                <div class="gis_title">图例</div>
                <div class="gis_type" @click="toggle2g" title="2G基站">
                    <img src="./img/2g.png" alt="" width="40px" height="51px">
                    <div>2G 基站</div>
                    <div>
                        <img v-show="gisFlag2g" src="./img/bingo.png" alt="bingo" style="position:relative;left:3px">
                    </div>
                </div>
                <div class="gis_type" @click="toggle4g" title="4G基站">
                    <img src="./img/4g.png" alt="" width="40px" height="51px">
                    <div>4G 基站</div>
                    <div>
                        <img v-show="gisFlag4g" src="./img/bingo.png" alt="bingo" style="position:relative;left:3px">
                    </div>
                </div>
            </div>
            <!-- 左边可扩展菜单 -->
            <div class="gis_menu">
                <div class="tip" @click="menuToggle"></div>
                <transition name="trans">
                <div class="level_one_menu" v-show="menuShow">
                    <div class="item1" v-for="(item,index) in firstLevelMenu" :key="index" :class="{item1_active:active1===index}" @click="menuDataFilter(item);changeActive1(index)">{{item}}</div>
                </div>
                </transition>
                <transition name="trans">
                <div class="level_two_menu" v-show="menuShow && this.subMenuData.length>1">
                    <div class="item2" v-for="(item,index) in subMenuData" :key="index" :class="{item2_active:active2===index}" @click="changeActive2(index);postParam(item.REGION_NAME)">{{item.REGION_NAME}}</div>
                </div>
                </transition>
            </div>
        </div>
    </view-template>
</template>
<script>
/* eslint-disable */
import './heatmap.scss'
import icon2g  from './img/2g.png';
import icon2g_ from './img/2gBack.png'
import icon4g  from './img/4g.png';
import icon4g_ from './img/4gBack.png'
export default {
    data(){
        return{
            map:null,
            markerSet2g:[],
            markerSet4g:[],
            menuShow:false,
            menuData:[],
            subMenuData:[],
            active1:2,
            active2:0,
            tableData:[
                {
                    name:'总话务量',
                    count:70200,
                    g2:234,
                    g4:235,
                    unit:'Erl'
                },
                {
                    name:'退服网元',
                    count:702,
                    g2:236,
                    g4:237,
                    unit:'Erl'
                },
                {
                    name:'退服基站',
                    count:702,
                    g2:238,
                    g4:234,
                    unit:'个'
                }
            ],
            //热力图渲染控制
            heatMapControlTraffic:true,
            heatMapControlFlow:false,
            //话务量热力图数据
            heatMapDataTraffic:[
                {"lng":125.418261,"lat":43.921984,"count":50},
                {"lng":125.423332,"lat":43.916532,"count":51},
                {"lng":125.419787,"lat":43.930658,"count":15},
                {"lng":125.418455,"lat":43.920921,"count":40},
                {"lng":125.418843,"lat":43.915516,"count":100},
                {"lng":125.42546,"lat":43.918503,"count":6},
                {"lng":125.423289,"lat":43.919989,"count":18},
                {"lng":125.418162,"lat":43.915051,"count":80},
                {"lng":125.422039,"lat":43.91782,"count":11},
                {"lng":125.41387,"lat":43.917253,"count":7},
                {"lng":125.41773,"lat":43.919426,"count":42},
                {"lng":125.421107,"lat":43.916445,"count":4},
                {"lng":125.417521,"lat":43.917943,"count":27},
                {"lng":125.419812,"lat":43.920836,"count":23},
                {"lng":125.420682,"lat":43.91463,"count":60},
                {"lng":125.415424,"lat":43.924675,"count":8},
                {"lng":125.419242,"lat":43.914509,"count":15},
                {"lng":125.422766,"lat":43.921408,"count":25},
                {"lng":125.421674,"lat":43.924396,"count":21},
                {"lng":125.427268,"lat":43.92267,"count":1},
                {"lng":125.417721,"lat":43.920034,"count":51},
                {"lng":125.412456,"lat":43.92667,"count":7},
                {"lng":125.420432,"lat":43.919114,"count":11},
                {"lng":125.425013,"lat":43.921611,"count":35},
                {"lng":125.418733,"lat":43.931037,"count":22},
                {"lng":125.419336,"lat":43.931134,"count":4},
                {"lng":125.413557,"lat":43.923254,"count":5},
                {"lng":125.418367,"lat":43.92943,"count":3},
                {"lng":125.424312,"lat":43.919621,"count":100},
                {"lng":125.423874,"lat":43.919447,"count":87},
                {"lng":125.424225,"lat":43.923091,"count":32},
                {"lng":125.417801,"lat":43.921854,"count":44},
                {"lng":125.417129,"lat":43.928227,"count":21},
                {"lng":125.426426,"lat":43.922286,"count":80},
                {"lng":125.421597,"lat":43.91948,"count":32},
                {"lng":125.423895,"lat":43.920787,"count":26},
                {"lng":125.423563,"lat":43.921197,"count":17},
                {"lng":125.417982,"lat":43.922547,"count":17},
                {"lng":125.426126,"lat":43.921938,"count":25},
                {"lng":125.42326,"lat":43.915782,"count":100},
                {"lng":125.419239,"lat":43.916759,"count":43},
                {"lng":125.417185,"lat":43.929123,"count":11},
                {"lng":125.417237,"lat":43.927518,"count":9},
                {"lng":125.417784,"lat":43.915754,"count":47},
                {"lng":125.420193,"lat":43.917061,"count":52},
                {"lng":125.422735,"lat":43.915619,"count":100},
                {"lng":125.418495,"lat":43.915958,"count":46},
                {"lng":125.416292,"lat":43.931166,"count":9},
                {"lng":125.419916,"lat":43.924055,"count":8},
                {"lng":125.42189,"lat":43.921308,"count":11},
                {"lng":125.413765,"lat":43.929376,"count":3},
                {"lng":125.418232,"lat":43.920348,"count":50},
                {"lng":125.417554,"lat":43.930511,"count":15},
                {"lng":125.418568,"lat":43.918161,"count":23},
                {"lng":125.413461,"lat":43.926306,"count":3},
                {"lng":125.42232,"lat":43.92161,"count":13},
                {"lng":125.4174,"lat":43.928616,"count":6},
                {"lng":125.424679,"lat":43.915499,"count":21},
                {"lng":125.42171,"lat":43.915738,"count":29},
                {"lng":125.417836,"lat":43.916998,"count":99},
                {"lng":125.420755,"lat":43.928001,"count":10},
                {"lng":125.414077,"lat":43.930655,"count":14},
                {"lng":125.426092,"lat":43.922995,"count":16},
                {"lng":125.41535,"lat":43.931054,"count":15},
                {"lng":125.413022,"lat":43.921895,"count":13},
                {"lng":125.415551,"lat":43.913373,"count":17},
                {"lng":125.421191,"lat":43.926572,"count":1},
                {"lng":125.419612,"lat":43.917119,"count":9},
                {"lng":125.418237,"lat":43.921337,"count":54},
                {"lng":125.423776,"lat":43.921919,"count":26},
                {"lng":125.417694,"lat":43.92536,"count":17},
                {"lng":125.415377,"lat":43.914137,"count":19},
                {"lng":125.417434,"lat":43.914394,"count":43},
                {"lng":125.42588,"lat":43.922622,"count":27},
                {"lng":125.418345,"lat":43.919467,"count":8},
                {"lng":125.426883,"lat":43.917171,"count":3},
                {"lng":125.423877,"lat":43.916659,"count":34},
                {"lng":125.415712,"lat":43.915613,"count":14},
                {"lng":125.419869,"lat":43.931416,"count":12},
                {"lng":125.416956,"lat":43.925377,"count":11},
                {"lng":125.42066,"lat":43.925017,"count":38},
                {"lng":125.416244,"lat":43.920215,"count":91},
                {"lng":125.41929,"lat":43.915908,"count":54},
                {"lng":125.422116,"lat":43.919658,"count":21},
                {"lng":125.4183,"lat":43.925015,"count":15},
                {"lng":125.421969,"lat":43.913527,"count":3},
                {"lng":125.422936,"lat":43.921854,"count":24},
                {"lng":125.41905,"lat":43.929217,"count":12},
                {"lng":125.424579,"lat":43.914987,"count":57},
                {"lng":125.42076,"lat":43.915251,"count":70},
                {"lng":125.425867,"lat":43.918989,"count":8}
            ],
            //流量热力图数据
            heatMapDataFlow:[
                {"lng":126.418261,"lat":43.921984,"count":50},
                {"lng":126.423332,"lat":43.916532,"count":51},
                {"lng":126.419787,"lat":43.930658,"count":15},
                {"lng":126.418455,"lat":43.920921,"count":40},
                {"lng":126.418843,"lat":43.915516,"count":100},
                {"lng":126.42546,"lat":43.918503,"count":6},
                {"lng":126.423289,"lat":43.919989,"count":18},
                {"lng":126.418162,"lat":43.915051,"count":80},
                {"lng":126.422039,"lat":43.91782,"count":11},
                {"lng":126.41387,"lat":43.917253,"count":7},
                {"lng":126.41773,"lat":43.919426,"count":42},
                {"lng":126.421107,"lat":43.916445,"count":4},
                {"lng":126.417521,"lat":43.917943,"count":27},
                {"lng":126.419812,"lat":43.920836,"count":23},
                {"lng":126.420682,"lat":43.91463,"count":60},
                {"lng":126.415424,"lat":43.924675,"count":8},
                {"lng":126.419242,"lat":43.914509,"count":15},
                {"lng":126.422766,"lat":43.921408,"count":25},
                {"lng":126.421674,"lat":43.924396,"count":21},
                {"lng":126.427268,"lat":43.92267,"count":1},
                {"lng":126.417721,"lat":43.920034,"count":51},
                {"lng":126.412456,"lat":43.92667,"count":7},
                {"lng":126.420432,"lat":43.919114,"count":11},
                {"lng":126.425013,"lat":43.921611,"count":35},
                {"lng":126.418733,"lat":43.931037,"count":22},
                {"lng":126.419336,"lat":43.931134,"count":4},
                {"lng":126.413557,"lat":43.923254,"count":5},
                {"lng":126.418367,"lat":43.92943,"count":3},
                {"lng":126.424312,"lat":43.919621,"count":100},
                {"lng":126.423874,"lat":43.919447,"count":87},
                {"lng":126.424225,"lat":43.923091,"count":32},
                {"lng":126.417801,"lat":43.921854,"count":44},
                {"lng":126.417129,"lat":43.928227,"count":21},
                {"lng":126.426426,"lat":43.922286,"count":80},
                {"lng":126.421597,"lat":43.91948,"count":32},
                {"lng":126.423895,"lat":43.920787,"count":26},
                {"lng":126.423563,"lat":43.921197,"count":17},
                {"lng":126.417982,"lat":43.922547,"count":17},
                {"lng":126.426126,"lat":43.921938,"count":25},
                {"lng":126.42326,"lat":43.915782,"count":100},
                {"lng":126.419239,"lat":43.916759,"count":43},
                {"lng":126.417185,"lat":43.929123,"count":11},
                {"lng":126.417237,"lat":43.927518,"count":9},
                {"lng":126.417784,"lat":43.915754,"count":47},
                {"lng":126.420193,"lat":43.917061,"count":52},
                {"lng":126.422735,"lat":43.915619,"count":100},
                {"lng":126.418495,"lat":43.915958,"count":46},
                {"lng":126.416292,"lat":43.931166,"count":9},
                {"lng":126.419916,"lat":43.924055,"count":8},
                {"lng":126.42189,"lat":43.921308,"count":11},
                {"lng":126.413765,"lat":43.929376,"count":3},
                {"lng":126.418232,"lat":43.920348,"count":50},
                {"lng":126.417554,"lat":43.930511,"count":15},
                {"lng":126.418568,"lat":43.918161,"count":23},
                {"lng":126.413461,"lat":43.926306,"count":3},
                {"lng":126.42232,"lat":43.92161,"count":13},
                {"lng":126.4174,"lat":43.928616,"count":6},
                {"lng":126.424679,"lat":43.915499,"count":21},
                {"lng":126.42171,"lat":43.915738,"count":29},
                {"lng":126.417836,"lat":43.916998,"count":99},
                {"lng":126.420755,"lat":43.928001,"count":10},
                {"lng":126.414077,"lat":43.930655,"count":14},
                {"lng":126.426092,"lat":43.922995,"count":16},
                {"lng":126.41535,"lat":43.931054,"count":15},
                {"lng":126.413022,"lat":43.921895,"count":13},
                {"lng":126.415551,"lat":43.913373,"count":17},
                {"lng":126.421191,"lat":43.926572,"count":1},
                {"lng":126.419612,"lat":43.917119,"count":9},
                {"lng":126.418237,"lat":43.921337,"count":54},
                {"lng":126.423776,"lat":43.921919,"count":26},
                {"lng":126.417694,"lat":43.92536,"count":17},
                {"lng":126.415377,"lat":43.914137,"count":19},
                {"lng":126.417434,"lat":43.914394,"count":43},
                {"lng":126.42588,"lat":43.922622,"count":27},
                {"lng":126.418345,"lat":43.919467,"count":8},
                {"lng":126.426883,"lat":43.917171,"count":3},
                {"lng":126.423877,"lat":43.916659,"count":34},
                {"lng":126.415712,"lat":43.915613,"count":14},
                {"lng":126.419869,"lat":43.931416,"count":12},
                {"lng":126.416956,"lat":43.925377,"count":11},
                {"lng":126.42066,"lat":43.925017,"count":38},
                {"lng":126.416244,"lat":43.920215,"count":91},
                {"lng":126.41929,"lat":43.915908,"count":54},
                {"lng":126.422116,"lat":43.919658,"count":21},
                {"lng":126.4183,"lat":43.925015,"count":15},
                {"lng":126.421969,"lat":43.913527,"count":3},
                {"lng":126.422936,"lat":43.921854,"count":24},
                {"lng":126.41905,"lat":43.929217,"count":12},
                {"lng":126.424579,"lat":43.914987,"count":57},
                {"lng":126.42076,"lat":43.915251,"count":70},
                {"lng":126.425867,"lat":43.918989,"count":8}
            ],
            //话务量覆盖物
            heatMapTrafficOverlay:null,
            //流量覆盖物
            heatMapFlowOverlay:null,
            gisFlag2g:true,
            gisFlag4g:true,
            parameter:'全省'
        }
    },
    methods:{
        //地图初始化
        initMap(){
            this.map=new BMap.Map('map_layer' ,{mapType:BMAP_HYBRID_MAP});
            this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            this.map.enableScrollWheelZoom(true);
            this.map.centerAndZoom("长春",12);
        },
        //热力图渲染控制
        heatMapControl1(){
            if(this.heatMapControlFlow){
                this.heatMapControlFlow=!this.heatMapControlFlow;
            }
            this.heatMapControlTraffic= !this.heatMapControlTraffic;
        },
        heatMapControl2(){
            if(this.heatMapControlTraffic){
                this.heatMapControlTraffic=!this.heatMapControlTraffic;
            }
            this.heatMapControlFlow=!this.heatMapControlFlow;
        },
        //热力图渲染-话务量
        heatMapTrafficRender(top){
            this.heatMapTrafficOverlay = new BMapLib.HeatmapOverlay({"radius":50});
            this.map.addOverlay(this.heatMapTrafficOverlay);
            this.heatMapTrafficOverlay.setDataSet({data:this.heatMapDataTraffic,max:top || 100});
            this.heatMapControlTraffic ===true ? this.heatMapTrafficOverlay.show():this.heatMapTrafficOverlay.hide()
        },
        //热力图渲染-话务量
        heatMapFlowRender(top){
            this.heatMapFlowOverlay = new BMapLib.HeatmapOverlay({"radius":50});
            this.map.addOverlay(this.heatMapFlowOverlay);
            this.heatMapFlowOverlay.setDataSet({data:this.heatMapDataFlow,max:top || 100});
            this.heatMapControlFlow === true ? this.heatMapFlowOverlay.show() : this.heatMapFlowOverlay.hide()
        },
        //打开热力图-话务量
        heatMapTrafficOpen(){
            this.heatMapTrafficOverlay.show();
        },
        //隐藏热力图-话务量
        heatMapTrafficHide(){
            this.heatMapTrafficOverlay.hide();
        },
        //打开热力图-流量
        heatMapFlowOpen(){
            this.heatMapFlowOverlay.show();
        },
        //隐藏热力图-流量量
        heatMapFlowHide(){
            this.heatMapFlowOverlay.hide();
        },
        //2g打点控制
        toggle2g(){
            this.gisFlag2g=!this.gisFlag2g;
        },
        toggle4g(){
            this.gisFlag4g=!this.gisFlag4g;
        },
        //打点函数
        addMaker(spot,icon,content='GPS未知',collect=[]){
            if(!Array.isArray(spot)){return};
            var point = new BMap.Point(...spot);
            var myIcon = new BMap.Icon(icon,new BMap.Size(50,50));
            var marker = new BMap.Marker(point,{icon:myIcon});  
            collect.push(marker);//收集marker
            this.map.addOverlay(marker);
            var opt = {
                width:150,
                height:90,
                title:'网元名称:',
            };
            var info = new BMap.InfoWindow(content,opt);
            marker.addEventListener('click',()=>{
                this.map.openInfoWindow(info,point)
            })
        },
        //隐藏打点
        hideMaker(collect=[]){
            if (collect.length===0){return};
            collect.forEach(item => {
                item.hide();
            })
        },
        //清除打点
        clearMarker(markerArray=[]){
            if(markerArray.length === 0) {return};
            markerArray.forEach(item => {
                this.map.removeOverlay(item);
            })
            markerArray = null;
            markerArray = [];
        },
        //显示打点
        showMaker(collect=[]){
            if(collect.length===0){return};
            collect.forEach(item => {
                item.show();
            })
        },
        //视图平移
        changeView(point = [121,35]){
            this.map.panTo(new BMap.Point(...point)); 
            this.map.setZoom(10);
            window.changeView=this.changeView;
        },
        //装载基站数据
        loadData(regionName){
            this.$http.indi.get('j0137',{second_area_name: regionName},res=>{
                this.clearMarker(this.markerSet2g);
                this.clearMarker(this.markerSet4g);
                if(res.data.data && res.data.data.length){
                    res.data.data.forEach(item => {
                        let currentPoint=[item.LONGITUDE_STATION,item.LATITUDE_STATION];
                        let currentIcon=item.STATION_TYPE==='2G基站'? item.STATION_STATUS===0 ? icon2g: icon2g_ : item.STATION_STATUS===0 ? icon4g: icon4g_;
                        let currentContent=item.STATION_NAME;
                        if(item.STATION_TYPE==='2G基站'){
                            this.addMaker(currentPoint,currentIcon,currentContent,this.markerSet2g);
                        }
                        if(item.STATION_TYPE==='4G基站'){
                            this.addMaker(currentPoint,currentIcon,currentContent,this.markerSet4g);
                        };
                    });
                    let center = [res.data.data[0].LONGITUDE_AREA,res.data.data[0].LATITUDE_AREA];
                    this.changeView(center);//平移地图视图；
                }
            })
        },
        //装载热力图数据；
        loadHeatmapData(regionName){
            this.$http.indi.get('j0089',{second_area_name:regionName},res => {//j0091
                if(this.heatMapTrafficOverlay){
                    this.map.removeOverlay(this.heatMapTrafficOverlay);
                    this.heatMapTrafficOverlay = null;
                }
                if(this.heatMapFlowOverlay){
                    this.map.removeOverlay(this.heatMapFlowOverlay);
                    this.heatMapFlowOverlay = null;
                }
                if(res.data.data && res.data.data.length){
                    let pointArray1 = [];
                    let pointArray2 = [];
                    res.data.data.forEach(item => {
                        var {LONGITUDE: lng=125, LATITUDE :lat=41, TRAFFIC_VALUE:count=500} = item;
                        pointArray1.push({lng, lat, count});
                        var {LONGITUDE: lng=125, LATITUDE :lat=41, FLOW_VALUE:count=500} = item;
                        pointArray2.push({lng, lat, count});
                    });

                    let maxTraffic = pointArray1.sort((a,b) => {
                        return b.count -a.count
                    })[0]['TRAFFIC_VALUE'];

                    let maxFlow = pointArray2.sort((a,b) => {
                        return b.count - a.count
                    })[0]['FLOW_VALUE'];

                    this.heatMapDataTraffic = null;
                    this.heatMapDataFlow = null;
                    this.heatMapDataTraffic = pointArray1;
                    this.heatMapDataFlow = pointArray2;
                    this.heatMapTrafficRender(maxTraffic);
                    this.heatMapFlowRender(maxFlow);
                }
            })
        },
        //装载表格数据
        loadTableData(regionName){
            this.$http.indi.get('j0090',{second_area_name:regionName},res => {//j0092
                if(res.data.data && res.data.data.length){
                    //对返回的数组排个序
                    // for (var i in res.data.data){
                    //     if(res.data.data[i].KPI_NAME === '总话务量'){
                    //         res.data.data[i].id = 0;
                    //     }
                    //     if(res.data.data[i].KPI_NAME === '2G话务量'){
                    //         res.data.data[i].id = 1;
                    //     }
                    //     if(res.data.data[i].KPI_NAME === '4G话务量'){
                    //         res.data.data[i].id = 2;
                    //     }
                    // };
                    // res.data.data = res.data.data.sort((a ,b) => {
                    //     return a.id - b.id
                    // });
                    let [{KPI_NAME:name = 0,KPI_VALUE:count = 0,UNIT:unit='Erl'},{KPI_VALUE:g2 = 0},{KPI_VALUE:g4 =0}]=res.data.data;
                    this.tableData.splice(0,1,{name, count, g2, g4, unit});
                }
            });
            this.$http.indi.get('j0091',{second_area_name:regionName},res => {//j0993
                if(res.data.data && res.data.data.length){
                    let [{KPI_NAME:name=0,KPI_VALUE:count=0,UNIT:unit='Erl'},{KPI_VALUE:g2=0},{KPI_VALUE:g4=0}]=res.data.data;
                    this.tableData.splice(1,1,{name, count, g2, g4, unit});
                }
            });
            this.$http.indi.get('j0092',{second_area_name:regionName},res => {//j0994
                if(res.data.data && res.data.data.length){
                    let [{KPI_NAME:name=0,KPI_VALUE:count=0,UNIT:unit='Erl'},{KPI_VALUE:g2=0},{KPI_VALUE:g4=0}]=res.data.data;
                    this.tableData.splice(2,1,{name, count, g2, g4, unit});
                }
            });
        },
        menuToggle(){
            this.menuShow=!this.menuShow;
        },
        // 菜单数据
        loadMenuData(){
            this.$http.indi.get('j0039', null, res => {
                if(res.data.data && res.data.data.length){
                    this.menuData=null;
                    this.menuData=res.data.data;
                }
            })
        },
        //二级菜单数据筛选
        menuDataFilter(regionName){
            this.subMenuData = null;
            this.subMenuData = this.menuData.filter(item => {
                return item.REGION_TYPE === regionName
            });
            //若要一级菜单联动；这里添加即可
            if(regionName === '全省') {
                this.parameter='全省'
            }
            this.active2=0;
            this.parameter=this.subMenuData[0].REGION_NAME;
        },
        //类切换
        changeActive1(id){
            this.active1=id;
        },
        changeActive2(id){
            this.active2=id;
        },
        //传参联动
        postParam(regionName){
            this.parameter=regionName;
        }
    },
    watch:{
        heatMapControlTraffic(flag){
            if(flag){
                this.heatMapTrafficOpen();
            }
            else{
                this.heatMapTrafficHide();
            }
        },
        heatMapControlFlow(flag){
            if(flag){
                this.heatMapFlowOpen();
            }
            else{
                this.heatMapFlowHide();
            }
        },
        gisFlag2g(flag){
            if(flag){
                this.showMaker(this.markerSet2g);
            }
            else{
                this.hideMaker(this.markerSet2g);
            }
        },
        gisFlag4g(flag){
            if(flag){
                this.showMaker(this.markerSet4g);
            }
            else{
                this.hideMaker(this.markerSet4g);
            }
        },
        parameter(regionName){
            bus.$emit('REGION_NAME', regionName);
            this.loadTableData(regionName);//表格数据地市联动；
            this.loadHeatmapData(regionName);//热力图数据地市联动；
            this.loadData(regionName);//gis打点数据；
        }
    },
    computed:{
        firstLevelMenu(){
            if (this.menuData.length===0){ return };
            let current = [];
            this.menuData.forEach((item,index,self) => {
                if (!current.includes(item.REGION_TYPE)){
                    current.push(item.REGION_TYPE)
                }
            });
            this.active1 = current.indexOf('全省'); //保证默认渲染全省视图（实际上全省高亮）；
            return current;
        }
    },
    mounted(){
        this.initMap();
        // this.heatMapTrafficRender();
        // this.heatMapFlowRender();
        this.loadData('全省');
        this.loadMenuData();
        this.loadTableData('全省');
        this.loadHeatmapData('全省');
    }
}
</script>
