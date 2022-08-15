<template>
  <div class="home_div">
    <div id="container" :style="{ height: mainheight + 'px' }"></div>
    <div class="content">
      <!-- 头部 -->
      <div class="header">
        <!-- 左边 -->
        <div class="headerleft">
          <div class="headertime">
            <div class="times">
              <div class="newDate">
                {{ newDate }}
              </div>
              <div class="newDay">
                {{ gettime }}
              </div>
            </div>
            <div class="timeimg">
              <img src="../assets/img/pub-top-time.png" alt="" />
            </div>
          </div>
          <div class="headerleftbutton">
            <div class="xx">
              <img src="../assets/img/pub-top-column.png" alt="" />
            </div>
            <div class="xx2">实时地图</div>
          </div>
        </div>
        <!-- 中间 -->
        <div class="headercentent">
          <div class="headercententlogin">
            <img src="../assets/img/logo.png" alt="" />
          </div>
          <div class="headercententtitle">城市管理智慧执法综合管理平台</div>
        </div>
        <!-- 右边 -->
        <div class="headerright">
          <div class="headerrightdiv">
            <div class="headerrightbutton">今天</div>
            <div class="headerrightbutton">本月</div>
            <div class="headerrightbutton">年度</div>
            <div class="headerrightbutton">自定义</div>
          </div>
          <div class="headerrightname">
            <div class="headerrightnews">
              <img src="../assets/img/pub-top-info.png" alt="" />
            </div>
            <div class="headerrightSign">
              <div><img src="../assets/img/pub-top-user.png" alt="" /></div>
              <div>南岸管理员</div>
              <div><img src="../assets/img/pub-top-more.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要框架 -->
      <div class="maincontent">
        <!-- 框架左边 -->
        <div
          class="contentleft"
          :style="{ height: maincontentleftheight + 'px' }"
        >
          <!-- 支队概况 -->
          <div class="contentleftsurvey">
            <!--  -->
            <div class="contentleftsurveytitle">
              <div class="surveyleftimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
              <div class="surveytitle">支队概况</div>
              <div class="surveyrightimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
            </div>
            <!--  -->
            <div class="surveymain">
              <div class="surveymaindiv">
                <div class="surveymaintext">{{ datatop.deptCount }}</div>
                <div class="surveymainimg">
                  <img src="../assets/img/1-0ico01.png" alt="" />
                </div>
                <div class="surveymaintitle">执法队伍</div>
                <div class="surveymaintitle2">(支)</div>
              </div>
              <div class="surveymaindiv">
                <div class="surveymaintext">{{ datatop.userCount }}</div>
                <div class="surveymainimg">
                  <img src="../assets/img/1-0ico02.png" alt="" />
                </div>
                <div class="surveymaintitle">执法人员</div>
                <div class="surveymaintitle2">(人)</div>
              </div>
              <div class="surveymaindiv">
                <div class="surveymaintext">{{ datatop.loginCount }}</div>
                <div class="surveymainimg">
                  <img src="../assets/img/1-0ico03.png" alt="" />
                </div>
                <div class="surveymaintitle">在线人员</div>
                <div class="surveymaintitle2">(人)</div>
              </div>
              <div class="surveymaindiv">
                <div class="surveymaintext">{{ datatop.carCount }}</div>
                <div class="surveymainimg">
                  <img src="../assets/img/1-0ico04.png" alt="" />
                </div>
                <div class="surveymaintitle">执法车辆</div>
                <div class="surveymaintitle2">(辆)</div>
              </div>
            </div>
          </div>
          <!-- 平台大数据 -->
          <div class="Platformbigdata">
            <!--  -->
            <div class="contentleftsurveytitle">
              <div class="surveyleftimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
              <div class="surveytitle">平台大数据</div>
              <div class="surveyrightimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
            </div>
            <!-- 柱状图 -->

            <div
              style="width: 90%; height: 230px; margin: auto"
              id="teachingRightTop"
            ></div>
          </div>
          <!-- 缴款记录 -->
          <div class="Paymentrecord">
            <!--  -->
            <div class="contentleftsurveytitle">
              <div class="surveyleftimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
              <div class="surveytitle">缴款记录</div>
              <div class="surveyrightimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
            </div>
            <!-- 缴款记录列表 -->
            <div class="Paymentrecordlist">
              <div class="Paymentrecordlisttitle">
                <div>案件名称</div>
                <div>缴款人</div>
                <div>缴款时间</div>
              </div>
              <div class="list">
                <div
                  class="Paymentlist"
                  v-for="(item, index) in this.datamiddle.payOrder"
                  :key="index"
                >
                  <div>{{ item.casecontent }}</div>
                  <div>{{ item.carusername }}</div>

                  <div>{{ changeTimeFormat(item.processtime.time) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 框架中间 -->
        <div class="contentmiddle">
          <div class="contentmiddleprogram">
            <div class="contentmiddleprogramdiv">
              <!--  -->
              <div class="contentmiddleprogrammiddle">
                <div class="program">
                  <div class="programimg1">
                    <img src="../assets/img/1-0ico05.png" alt="" />
                  </div>
                  <div class="programimg2">
                    <img src="../assets/img/1-0ico08.png" alt="" />
                  </div>
                </div>
                <div class="programtext">
                  <div class="programtitle">普通程序</div>
                  <div class="programnumber">
                    <div>{{ datatop.normalcaseCount }}</div>
                    <div>件</div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="contentmiddleprogrammiddle">
                <div class="program">
                  <div class="programimg1">
                    <img src="../assets/img/1-0ico06.png" alt="" />
                  </div>
                  <div class="programimg2">
                    <img src="../assets/img/1-0ico08.png" alt="" />
                  </div>
                </div>
                <div class="programtext">
                  <div class="programtitle">简易程序</div>
                  <div class="programnumber">
                    <div>{{ datatop.simplecaseCount }}</div>
                    <div>件</div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="contentmiddleprogrammiddle">
                <div class="program">
                  <div class="programimg1">
                    <img src="../assets/img/1-0ico7.png" alt="" />
                  </div>
                  <div class="programimg2">
                    <img src="../assets/img/1-0ico08.png" alt="" />
                  </div>
                </div>
                <div class="programtext">
                  <div class="programtitle">巡查上报</div>
                  <div class="programnumber">
                    <div>{{ datatop.checkCount }}</div>
                    <div>件</div>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
            <!-- 立案数 -->
            <div class="contentmiddlerecord">
              <div class="contentmiddleone">
                <div>{{ datatop.caseAddCount }}</div>
                <div><img src="../assets/img/1-0ico09.png" alt="" /></div>
                <div>立案数</div>
                <div>(件)</div>
              </div>
              <div class="contentmiddleone">
                <div>{{ datatop.caseEndCount }}</div>
                <div><img src="../assets/img/1-0ico10.png" alt="" /></div>
                <div>结案数</div>
                <div>(件)</div>
              </div>
              <div class="contentmiddleone">
                <div>{{ datatop.caseratio }}</div>
                <div><img src="../assets/img/1-0ico11.png" alt="" /></div>
                <div>结案率</div>
                <div>(%)</div>
              </div>
              <div class="contentmiddleone">
                <div>{{ datatop.amerce }}</div>
                <div><img src="../assets/img/1-0ico12.png" alt="" /></div>
                <div>缴款金额</div>
                <div>(元)</div>
              </div>
            </div>
          </div>
          <!-- 地图按钮 -->
          <div class="contentmiddlemap">
            <!--  -->
            <div class="contentmiddlemaplist">
              <div class="map">
                <div class="map5">
                  <div class="map6"></div>
                </div>
              </div>
              <div class="maptile">执法人员</div>
            </div>
            <!--  -->
            <div class="contentmiddlemaplist">
              <div class="map">
                <div class="map3">
                  <div class="map4"></div>
                </div>
              </div>
              <div class="maptile">执法车辆</div>
            </div>
            <!--  -->
            <div class="contentmiddlemaplist">
              <div class="map">
                <div class="map1">
                  <div class="map2"></div>
                </div>
              </div>
              <div class="maptile">违法案件</div>
            </div>
          </div>
        </div>
        <!-- 框架右边 -->
        <div
          class="contentright"
          :style="{ height: maincontentrightheight + 'px' }"
        >
          <!-- 案件处理情况 -->
          <div class="Casehandling">
            <!--  -->
            <div class="contentleftsurveytitle">
              <div class="surveyleftimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
              <div class="surveytitle">案件处理情况</div>
              <div class="surveyrightimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
            </div>

            <!--  -->
            <div class="Casehandlingmain">
              <div
                class="Casehandlingdiv"
                v-for="(item, index) in dataarray"
                :key="index"
              >
              
   <div class="Casehandlnumber"></div>
   <div class="Casehandlnumbertext">{{ item.number }}</div>
                <div v-if="index == 2" >
                  <img src="../assets/img/1-0ico13.png" alt="" />
                </div>
                <div v-if="index == 1">
                  <img src="../assets/img/1-0ico14.png" alt="" />
                </div>
                <div v-if="index == 0">
                  <img src="../assets/img/1-0ico15.png" alt="" />
                </div>
             
             
                <div>{{ item.processresult }}</div>
                <div>(件)</div>
              </div>

              <!-- <div class="Casehandlingdiv">
                <div>17016</div>
                <div><img src="../assets/img/1-0ico14.png" alt="" /></div>
                <div>现场处理</div>
                <div>(件)</div>
              </div>
              <div class="Casehandlingdiv">
                <div>17016</div>
                <div><img src="../assets/img/1-0ico15.png" alt="" /></div>
                <div>答题处理</div>
                <div>(件)</div>
              </div> -->
            </div>
          </div>
          <!-- 案件来源 -->
          <div class="Sourceofcase">
            <!--  -->
            <div class="contentleftsurveytitle">
              <div class="surveyleftimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
              <div class="surveytitle">案件来源</div>
              <div class="surveyrightimg">
                <img src="../assets/img/1-0tit-bg03.png" alt="" />
              </div>
            </div>
            <!--  -->
            <div class="Sourceofcasechart">
              <div class="water-eval-container" id="app">
                <div
                  class="cityGreenLand-charts"
                  id="cityGreenLand-charts"
                ></div>
              </div>
            </div>
          </div>
          <!-- 案件类型 -->
          <div class="Casetype">
            <!-- title -->
            <div class="Casetypetitle">
              <!--  -->
              <div class="contentleftsurveytitle" style="width: 44%">
                <div class="surveyleftimg" style="width: 24%">
                  <img src="../assets/img/1-0tit-bg03.png" alt="" />
                </div>
                <div class="surveytitle">案件类型</div>
                <div class="surveyrightimg">
                  <img src="../assets/img/1-0tit-bg03.png" alt="" />
                </div>
              </div>
              <!--  -->
              <div class="contentleftsurveytitle" style="width: 44%">
                <div class="surveyleftimg" style="width: 24%">
                  <img src="../assets/img/1-0tit-bg03.png" alt="" />
                </div>
                <div class="surveytitle">案件趋势</div>
                <div class="surveyrightimg">
                  <img src="../assets/img/1-0tit-bg03.png" alt="" />
                </div>
              </div>
            </div>
            <!-- 饼图2 -->
            <div class="Casetype3d">
              <div class="Casetypeleft" id="Casetypeleft">
                <div class="water-eval-container" id="apps">
                  <div class="cityGreenLand" id="cityGreenLand"></div>
                </div>
              </div>
              <div class="xxs"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { inject, ref, onMounted } from "vue";
import * as echarts from "echarts";
import "echarts-gl";


export default {
  name: "Mapview",
  data() {
    return {
      map: null,
      mainheight: 0,
      maincontentleftheight: 0,
      maincontentrightheight: 0,
      gettime: 0,
      timer: null,
      newDate: null,
      datatop: {}, //上
      datamiddle: {}, //中
      dataPie: [], //第一个饼状图
      caseContentListlist: [], //违法案件标记点经纬度数组
        caseContentListlistMarkers: [], //违法案件标记点经纬度数组
      userLocationlist: [], //执法人员标记点经纬度数组
      userLocationlistMarkers: [], //执法人员标记点经纬度数组
      list: [], //地图标记点总数组
      showcaseContent:true,
      showuser:true,
      dataarray: [],
      optionData: [
        {
          name: "林地面积统计",
          value: 10000,
          itemStyle: {
            color: "#22c4ff",
          },
        },
        {
          name: "草地面积统计",
          value: 12116,
          itemStyle: {
            color: "#aaff00",
          },
        },
        {
          name: "耕地地面积统计",
          value: 16616,
          itemStyle: {
            color: "#ffaaff",
          },
        },
        {
          name: "江",
          value: 10000,
          itemStyle: {
            color: "#FF0000",
          },
        },
        {
          name: "河",
          value: 12116,
          itemStyle: {
            color: "#00DFFF",
          },
        },
        {
          name: "湖",
          value: 16616,
          itemStyle: {
            color: "#701CA5",
          },
        },
        {
          name: "海",
          value: 16616,
          itemStyle: {
            color: "#1800FC",
          },
        },
      ],
    };
  },

  created() {},
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.headertime();
    }, 1000);

    //  this.$nextTick(function () {

    this.info();
    this.info2();
    this.info3();
    //  });
    this.mainheight = window.screen.availHeight;
    this.maincontentleftheight = window.screen.availHeight - 70;
    this.maincontentrightheight = window.screen.availHeight - 70;
  },
  methods: {
    // 数字滚动
    
    // 时间戳转换
    changeTimeFormat(time) {
      var date = new Date(time);
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var currentDate =
        date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var mm =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      return (
        date.getFullYear() +
        "-" +
        month +
        "-" +
        currentDate +
        " " +
        hh +
        ":" +
        mm
      );
      //返回格式：yyyy-MM-dd hh:mm
    },
    info() {
      var params = {
        teamid: "9257B513129E4BAC90A26D9FB1D30901",
        status: 1,
      };
      this.axios
        .get(`${this.$global_msg.host}`, {
          params,
        })
        .then((res) => {
          console.log("列表", res);
          if (res.status == 200) {
            this.datatop = res.data;
            this.dataarray = this.datatop.processresult.slice(1);
            console.log(this.dataarray);
            // console.log(this.datatop.processresult[3].number)
          } else {
            this.$toast("服务器数据异常!");
          }
        })
        .catch((error) => {
          this.$terminal._error(error);
        });
    },
    info2() {
      var params = {
        teamid: "9257B513129E4BAC90A26D9FB1D30901",
        status: 2,
      };
      this.axios
        .get(`${this.$global_msg.host}`, {
          params,
        })
        .then((res) => {
          console.log("列表", res);
          if (res.status == 200) {
            this.datamiddle = res.data;

            this.dataPie = this.datamiddle.caseSource;
            for (var n = 0; n < this.dataPie.length; n++) {
              this.dataPie[n].value = this.dataPie[n].number;
              this.dataPie[n].name = this.dataPie[n].casesource;
            }

            this.BarEcharts_3D();
            this.BarEcharts_3D2();
            this.drawLine();
          } else {
            this.$toast("服务器数据异常!");
          }
        })
        .catch((error) => {
          this.$terminal._error(error);
        });
    },
    showContent(){
this.showcaseContent =!this.showcaseContent

    },
    showuser(){

    },
     loadmarkers(){
     
    },
    usermarkers(list){
       let markers = [];

          console.log(this.list);

          list.map((item) => {
        
            markers.push(
              new AMap.Marker({
                position: new AMap.LngLat(
                  item.location.split(",")[0],
                  item.location.split(",")[1]
                ),
                 // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                offset: new AMap.Pixel(-15, -20), // 设置点标记偏移量
                anchor: "bottom-left", // 设置锚点方位
                title: "",
              })
            );
          });
this.userLocationlistMarkers=markers
    },
    info3() {
      var params = {
        teamid: "9257B513129E4BAC90A26D9FB1D30901",
        status: 3,
      };
      this.axios
        .get(`${this.$global_msg.host}`, {
          params,
        })
        .then((res) => {
          console.log("列表", res);
          if (res.status == 200) {
            this.caseContentListlist=res.data.caseContentList
            this.userLocationlist=res.data.userLocation


            // for (var n = 0; n < res.data.caseContentList.length; n++) {
              
            //   this.caseContentListlist.push(
            //     res.data.caseContentList[n].location
            //   );
            //   this.list.push(res.data.caseContentList[n].location);
 
            // }
            // for (var n = 0; n < res.data.userLocation.length; n++) {
            
            //   this.userLocationlist.push(res.data.userLocation[n].location);
            //   this.list.push(res.data.userLocation[n].location);
            // }
            
            this.initAMap();
          } else {
            this.$toast("服务器数据异常!");
          }
        })
        .catch((error) => {
          this.$terminal._error(error);
        });
    },
    // 中间地图模块加载
    initAMap() {
      AMapLoader.load({
        key: "470145c6fc5751f24e85ffc243a18cb7", //设置您的key
        version: "2.0", // 高德地图版本
        plugins: ["AMap.ToolBar", "AMap.Driving", "AMap.MarkerClusterer"], // 插件
        AMapUI: {
          // 高德地图UI组件库，可不写，内部提供了覆盖物标注点，以及部分模块的封装
          version: "1.1",
          plugins: [],
        },
        Loca: {
          // Loca版本(高性能地图数据可视化库) 可不写
          version: "2.0",
        },
      })
        .then((AMap) => {
          // container渲染的id
          this.map = new AMap.Map("container", {
            zoom: 16, // 当前缩放级别
            zooms: [2, 30], // 缩放级别范围
            center: [106.559837, 29.523417], // 中心点
            mapStyle: "amap://styles/darkblue",
          });
          this.map.clearMap();
          // 处理标记点
          var icon = new AMap.Icon({
            size: new AMap.Size(40, 50), // 图标尺寸
            image: "../assets/img/map-ico02.png", // Icon的图像
            imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
          });

          let markers = [];

          console.log(this.list);

          this.list.map((item) => {
        
            markers.push(
              new AMap.Marker({
                position: new AMap.LngLat(
                  item.split(",")[0],
                  item.split(",")[1]
                ),
                 // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                offset: new AMap.Pixel(-15, -20), // 设置点标记偏移量
                anchor: "bottom-left", // 设置锚点方位
                title: "",
              })
            );
          });




          //console.log(markers)
          this.map.add(markers);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 左上时间
    headertime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      if (mm < 10) {
        mm = "0" + mm;
      }
      let dd =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate();
      let day = new Date().getDay();
      if (day == 0) {
        day = "星期日";
      }
      if (day == 1) {
        day = "星期一";
      }
      if (day == 2) {
        day = "星期二";
      }
      if (day == 3) {
        day = "星期三";
      }
      if (day == 4) {
        day = "星期四";
      }
      if (day == 5) {
        day = "星期五";
      }
      if (day == 6) {
        day = "星期六";
      }
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.gettime = hh + ":" + mf;

      _this.newDate = yy + "-" + mm + "-" + dd + " " + day;
      console.log(_this.gettime);
    },

    // 自适应字体大小
    WidthAdaptive(res) {
      var windth = window.innerWidth;
      let fontSize = windth / 1920;
      return fontSize * res;
    },
    // 圆柱体
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("teachingRightTop")
      );

      let option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "18%",
          right: "2%",
          left: "10%",
          bottom: "15%",
        },
        xAxis: [
          {
            type: "category",
            data: ["实名注册人", "车辆", "个体工商户", "法人/其他组织"],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
            axisLabel: {
              margin: 10,
              color: " rgba(255, 255, 255, 0.6)",
              textStyle: {
                fontSize: this.WidthAdaptive(10),
              },
            },
          },
        ],
        yAxis: [
          {
            name: "(人/辆)",
            max: 100000,
            min: 0,
            nameTextStyle: {
              color: " #01BEFC",

              fontSize: this.WidthAdaptive(12),
              padding: 12,
            },
            axisLabel: {
              formatter: "{value}",
              color: " rgba(255, 255, 255, 0.6)",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(112,112,112,0.5)",
              },
            },
          },
        ],
        series: [
          {
            data: [
              this.datamiddle.stopcaruserCount,
              this.datamiddle.carinfoCount,
              this.datamiddle.operCount,
              this.datamiddle.comCount,
            ],
            type: "bar",
            barWidth: this.WidthAdaptive(14),
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(64, 200, 169, 0.8)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(64, 200, 169, 0)", // 100% 处的颜色
                  },
                ],
              },
              borderColor: "#40C8A9",
              borderType: "solid",
              barBorderRadius: [50, 50, 50, 50],
            },
          },
        ],
      };
      window.onresize = function () {
        myChart.resize();
      };
      myChart.setOption(option);
    },
    // 3d饼状图
    BarEcharts_3D() {
      function mastery(data) {
        var myChart = echarts.init(
          document.getElementById("cityGreenLand-charts")
        );

        var color = [
          "#1800FC",
          "#795EFB",
          "#00DFFF",
          "#701CA5",
          "#00DFFF",
          "#01BBFF",
        ];
        var data = data;
        console.log(data);
        data.forEach((item, index) => {
          item.itemStyle = {
            color: color[index],
            opacity: 0.6,
          };
        });

        function getParametricEquation(
          startRatio,
          endRatio,
          isSelected,
          isHovered,
          k,
          h
        ) {
          // 计算
          let midRatio = (startRatio + endRatio) / 2;

          let startRadian = startRatio * Math.PI * 2;
          let endRadian = endRatio * Math.PI * 2;
          let midRadian = midRatio * Math.PI * 2;

          // 如果只有一个扇形，则不实现选中效果。
          if (startRatio === 0 && endRatio === 1) {
            isSelected = false;
          }

          // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
          // k = 1;
          k = typeof k !== "undefined" ? k : 1 / 3;
          // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
          let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
          let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

          // 计算高亮效果的放大比例（未高亮，则比例为 1）
          let hoverRate = isHovered ? 1.05 : 1;

          // 返回曲面参数方程
          return {
            u: {
              min: -Math.PI,
              max: Math.PI * 3,
              step: Math.PI / 32,
            },

            v: {
              min: 0,
              max: Math.PI * 2,
              step: Math.PI / 20,
            },

            x: function (u, v) {
              if (u < startRadian) {
                return (
                  offsetX +
                  Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              if (u > endRadian) {
                return (
                  offsetX +
                  Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            y: function (u, v) {
              if (u < startRadian) {
                return (
                  offsetY +
                  Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              if (u > endRadian) {
                return (
                  offsetY +
                  Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            z: function (u, v) {
              if (u < -Math.PI * 0.5) {
                return Math.sin(u);
              }
              if (u > Math.PI * 2.5) {
                return Math.sin(u) * h * 0.1;
              }
              return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
            },
          };
        }

        function getPie3D(pieData, internalDiameterRatio) {
          let series = [];
          let sumValue = 0;
          let startValue = 0;
          let endValue = 0;
          let legendData = [];
          let k =
            typeof internalDiameterRatio !== "undefined"
              ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
              : 1 / 3;

          // 为每一个饼图数据，生成一个 series-surface 配置
          for (let i = 0; i < pieData.length; i++) {
            sumValue += pieData[i].value;

            let seriesItem = {
              name:
                typeof pieData[i].name === "undefined"
                  ? `series${i}`
                  : pieData[i].name,
              value:
                typeof pieData[i].value === "undefined"
                  ? `series${i}`
                  : pieData[i].value,
              type: "surface",
              parametric: true,
              wireframe: {
                show: false,
              },
              pieData: pieData[i],
              pieStatus: {
                selected: false,
                hovered: false,
                k: k,
              },
            };

            if (typeof pieData[i].itemStyle != "undefined") {
              let itemStyle = {};

              typeof pieData[i].itemStyle.color != "undefined"
                ? (itemStyle.color = pieData[i].itemStyle.color)
                : null;
              typeof pieData[i].itemStyle.opacity != "undefined"
                ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                : null;

              seriesItem.itemStyle = itemStyle;
            }
            series.push(seriesItem);
          }
          // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
          // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
          for (let i = 0; i < series.length; i++) {
            endValue = startValue + series[i].pieData.value;
            series[i].pieData.startRatio = startValue / sumValue;
            series[i].pieData.endRatio = endValue / sumValue;
            series[i].parametricEquation = getParametricEquation(
              series[i].pieData.startRatio,
              series[i].pieData.endRatio,
              false,
              false,
              k,
              series[i].pieData.value
            );

            startValue = endValue;
            legendData.push(series[i].name);
          }

          // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
          series.push(
            {
              name: "mouseoutSeries",
              type: "surface",
              parametric: true,
              wireframe: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
              parametricEquation: {
                u: {
                  min: 0,
                  max: Math.PI * 2,
                  step: Math.PI / 20,
                },
                v: {
                  min: 0,
                  max: Math.PI,
                  step: Math.PI / 20,
                },
                x: function (u, v) {
                  return Math.sin(v) * Math.sin(u) + Math.sin(u);
                },
                y: function (u, v) {
                  return Math.sin(v) * Math.cos(u) + Math.cos(u);
                },
                z: function (u, v) {
                  return Math.cos(v) > 0 ? 0.1 : -0.1;
                },
              },
            },
            {
              name: "pie2d",
              type: "pie",
              labelLine: {
                length: 30,
                length2: 30,
              },
              startAngle: -30, //起始角度，支持范围[0, 360]。
              clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
              radius: ["40%", "40%"],
              center: ["50%", "50%"], //指示线的位置
              data: data,
              itemStyle: {
                opacity: 0.9, // 指示
              },
            }
          );

          // 准备待返回的配置项，把准备好的 legendData、series 传入。
          let option = {
            labelLine: {
              show: true,
              lineStyle: {
                color: "#007DFE",
              },
            },
            label: {
              show: true,
              position: "outside",
              formatter: ["{a|{b}}\n{hr|}\n{c|{c}}"].join("\n"),
              rich: {
                hr: {
                  backgroundColor: "#007DFE",
                  borderRadius: 5,
                  width: 5,
                  height: 5,
                  padding: [0, -5],
                  opacity: 1,
                },
                a: {
                  fontSize: 14,
                  lineHeight: 30,
                  fontWeight: "400",
                  color: "#007DFE",
                  opacity: 1,
                  padding: [5, 10, 0, 10],
                },
                c: {
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#007DFE",
                  opacity: 1,
                  padding: [5, 10, 0, 10],
                },
              },
            },
            xAxis3D: {
              min: -1,
              max: 1,
            },
            yAxis3D: {
              min: -1,
              max: 1,
            },
            zAxis3D: {
              min: -1,
              max: 1,
            },
            grid3D: {
              show: false,
              boxHeight: 20,

              viewControl: {
                //3d效果可以放大、旋转等，请自己去查看官方配置
                alpha: 50, //角度
                beta: 40,
                distance: 600, //调整视角到主体的距离，类似调整zoom
                rotateSensitivity: 0, //设置为0无法旋转
                zoomSensitivity: 0, //设置为0无法缩放
                panSensitivity: 0, //设置为0无法平移
                autoRotate: false, //自动旋转
              },
            },
            series: series,
          };
          return option;
        }

        let option = getPie3D(data, 0.6);
        if (option && typeof option === "object") {
          myChart.setOption(option);
        }
      }
      let data = this.dataPie;
      //       console.log(this.dataPie)
      // data.push.apply()

      console.log(data);
      mastery(data);
    },
    // 饼状图2
    BarEcharts_3D2() {
      function mastery(data) {
        var myChart = echarts.init(document.getElementById("cityGreenLand"));

        var color = [
          "#1800FC",
          "#795EFB",
          "#00DFFF",
          "#701CA5",
          "#00DFFF",
          "#01BBFF",
        ];
        var data = data;
        console.log(data);
        data.forEach((item, index) => {
          item.itemStyle = {
            color: color[index],
            opacity: 0.6,
          };
        });

        function getParametricEquation(
          startRatio,
          endRatio,
          isSelected,
          isHovered,
          k,
          h
        ) {
          // 计算
          let midRatio = (startRatio + endRatio) / 2;

          let startRadian = startRatio * Math.PI * 2;
          let endRadian = endRatio * Math.PI * 2;
          let midRadian = midRatio * Math.PI * 2;

          // 如果只有一个扇形，则不实现选中效果。
          if (startRatio === 0 && endRatio === 1) {
            isSelected = false;
          }

          // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
          // k = 1;
          k = typeof k !== "undefined" ? k : 1 / 3;
          // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
          let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
          let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

          // 计算高亮效果的放大比例（未高亮，则比例为 1）
          let hoverRate = isHovered ? 1.05 : 1;

          // 返回曲面参数方程
          return {
            u: {
              min: -Math.PI,
              max: Math.PI * 3,
              step: Math.PI / 32,
            },

            v: {
              min: 0,
              max: Math.PI * 2,
              step: Math.PI / 20,
            },

            x: function (u, v) {
              if (u < startRadian) {
                return (
                  offsetX +
                  Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              if (u > endRadian) {
                return (
                  offsetX +
                  Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            y: function (u, v) {
              if (u < startRadian) {
                return (
                  offsetY +
                  Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              if (u > endRadian) {
                return (
                  offsetY +
                  Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                );
              }
              return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            z: function (u, v) {
              if (u < -Math.PI * 0.5) {
                return Math.sin(u);
              }
              if (u > Math.PI * 2.5) {
                return Math.sin(u) * h * 0.1;
              }
              return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
            },
          };
        }

        function getPie3D(pieData, internalDiameterRatio) {
          let series = [];
          let sumValue = 0;
          let startValue = 0;
          let endValue = 0;
          let legendData = [];
          let k =
            typeof internalDiameterRatio !== "undefined"
              ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
              : 1 / 3;

          // 为每一个饼图数据，生成一个 series-surface 配置
          for (let i = 0; i < pieData.length; i++) {
            sumValue += pieData[i].value;

            let seriesItem = {
              name:
                typeof pieData[i].name === "undefined"
                  ? `series${i}`
                  : pieData[i].name,
              value:
                typeof pieData[i].value === "undefined"
                  ? `series${i}`
                  : pieData[i].value,
              type: "surface",
              parametric: true,
              wireframe: {
                show: false,
              },
              pieData: pieData[i],
              pieStatus: {
                selected: false,
                hovered: false,
                k: k,
              },
            };

            if (typeof pieData[i].itemStyle != "undefined") {
              let itemStyle = {};

              typeof pieData[i].itemStyle.color != "undefined"
                ? (itemStyle.color = pieData[i].itemStyle.color)
                : null;
              typeof pieData[i].itemStyle.opacity != "undefined"
                ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                : null;

              seriesItem.itemStyle = itemStyle;
            }
            series.push(seriesItem);
          }
          // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
          // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
          for (let i = 0; i < series.length; i++) {
            endValue = startValue + series[i].pieData.value;
            series[i].pieData.startRatio = startValue / sumValue;
            series[i].pieData.endRatio = endValue / sumValue;
            series[i].parametricEquation = getParametricEquation(
              series[i].pieData.startRatio,
              series[i].pieData.endRatio,
              false,
              false,
              k,
              series[i].pieData.value
            );

            startValue = endValue;
            legendData.push(series[i].name);
          }

          // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
          series.push(
            {
              name: "mouseoutSeries",
              type: "surface",
              parametric: true,
              wireframe: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
              parametricEquation: {
                u: {
                  min: 0,
                  max: Math.PI * 2,
                  step: Math.PI / 20,
                },
                v: {
                  min: 0,
                  max: Math.PI,
                  step: Math.PI / 20,
                },
                x: function (u, v) {
                  return Math.sin(v) * Math.sin(u) + Math.sin(u);
                },
                y: function (u, v) {
                  return Math.sin(v) * Math.cos(u) + Math.cos(u);
                },
                z: function (u, v) {
                  return Math.cos(v) > 0 ? 0.1 : -0.1;
                },
              },
            },
            {
              name: "pie2d",
              type: "pie",
              labelLine: {
                length: 30,
                length2: 30,
              },
              startAngle: -30, //起始角度，支持范围[0, 360]。
              clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
              radius: ["40%", "40%"],
              center: ["50%", "50%"], //指示线的位置
              data: data,
              itemStyle: {
                opacity: 0.9, // 指示
              },
            }
          );

          // 准备待返回的配置项，把准备好的 legendData、series 传入。
          let option = {
            labelLine: {
              show: true,
              lineStyle: {
                color: "#007DFE",
              },
            },
            label: {
              show: true,
              position: "outside",
              formatter: ["{a|{b}}\n{hr|}\n{c|{c}}"].join("\n"),
              rich: {
                hr: {
                  backgroundColor: "#007DFE",
                  borderRadius: 5,
                  width: 5,
                  height: 5,
                  padding: [0, -5],
                  opacity: 1,
                },
                a: {
                  fontSize: 14,
                  lineHeight: 30,
                  fontWeight: "400",
                  color: "#007DFE",
                  opacity: 1,
                  padding: [5, 10, 0, 10],
                },
                c: {
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#007DFE",
                  opacity: 1,
                  padding: [5, 10, 0, 10],
                },
              },
            },
            xAxis3D: {
              min: -1,
              max: 1,
            },
            yAxis3D: {
              min: -1,
              max: 1,
            },
            zAxis3D: {
              min: -1,
              max: 1,
            },
            grid3D: {
              show: false,
              boxHeight: 20,

              viewControl: {
                //3d效果可以放大、旋转等，请自己去查看官方配置
                alpha: 50, //角度
                beta: 40,
                distance: 600, //调整视角到主体的距离，类似调整zoom
                rotateSensitivity: 0, //设置为0无法旋转
                zoomSensitivity: 0, //设置为0无法缩放
                panSensitivity: 0, //设置为0无法平移
                autoRotate: false, //自动旋转
              },
            },
            series: series,
          };
          return option;
        }

        let option = getPie3D(data, 0.6);
        if (option && typeof option === "object") {
          myChart.setOption(option);
        }
      }
      let data = this.dataPie;
      //       console.log(this.dataPie)
      // data.push.apply()

      console.log(data);
      mastery(data);
    },
  },
};
</script>
<style  scoped>
@font-face {
  font-family: "shuzi";
  src: url("../assets/font/DS-DIGIB.ttf");
}
.amap-icon img {
  width: 25px;
  height: 34px;
}
.home_div {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: relative;
}
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
}
.content {
  width: 100%;
}
.q {
  width: 25%;

  position: absolute;
  top: 0;
  left: 0px;
  bottom: 0;
}
.w {
  width: 40%;

  position: absolute;
  top: 0;
  left: 30%;
  bottom: 0;
  right: 0;
}
.r {
  width: 25%;

  position: absolute;
  top: 0;

  bottom: 0;
  right: 0;
}
/* 头部开始 */
.header {
  position: absolute;
  width: 98%;
  padding: 0px 10px 10px 10px;
  display: flex;
  display: flex;
  justify-content: space-between;
  /* height: 100%; */
  /* background: #000e28; */
  background-image: url(../assets/img/headerbg.png);
  background-size: 100% 100%;
}
.headertime {
  width: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* justify-content: center; */
}
.headerleft {
  display: flex;
  width: 30%;
  padding: 20px 0px 0px 0px;
}
.headerleftbutton {
  width: 50%;
  display: flex;
  justify-content: right;
}
.timeimg img {
  width: 100%;
  margin: auto;
  position: relative;
  top: 3px;
}
.times {
  display: flex;
  width: 74%;
  justify-content: space-evenly;
}
.newDate {
  color: #91c1f2;
}
.newDay {
  color: #73c3ff;
  font-size: 30px;
  font-family: "shuzi";
  position: relative;
  top: -5px;
}
.xx {
  background-image: url(../assets/img/1-0button-bg01.png);
  background-size: 100% 100%;
  width: 40%;
  height: 34px;
}
.xx img {
  padding: 5px 0px 0px 0px;
  width: 28%;
}
.xx2 {
  background-image: url(../assets/img/1-0button-bg01.png);
  background-size: 100% 100%;
  width: 37%;
  font-size: 16px;
  padding: 0px 13px;
  text-align: center;
  line-height: 2;
  height: 34px;
  color: #b8dbff;
}
/* 头部中间 */
.headercentent {
  width: 40%;
  display: flex;
  background-image: url(../assets/img/1-0logo-bg.png);
  background-size: 100% 100%;
  justify-content: center;
  position: absolute;

  right: 0;
  left: 0;
  margin: auto;
}
.headercententlogin {
  width: 11%;
  padding: 0px 0px 8px 0px;
}
.headercententlogin img {
  width: 100%;
}
.headercententtitle {
  width: 70%;

  color: #fff;
  font-size: 33px;
  text-align: initial;
  line-height: 2.3;
}
/* 头部右边 */
.headerright {
  width: 30%;
  padding: 20px 0px 0px 0px;
  display: flex;
}
.headerrightdiv {
  width: 66%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-between;
}
.headerrightbutton {
  background-image: url(../assets/img/0.png);
  background-size: 100% 100%;
  color: #b8dbff;
  width: 25%;
  font-size: 16px;
  padding: 0px 0px;
  text-align: center;
  line-height: 2;
  height: 34px;
}
.headerrightname {
  display: flex;
  width: 35%;
  justify-content: center;
}
.headerrightSign {
  display: flex;
  color: #b8dbff;
  width: 85%;
  justify-content: space-evenly;
}
.headerrightnews {
  width: 9%;
  padding-left: 27px;
}
.headerrightnews img {
  width: 100%;
  /* position: relative;
    top: 9px; */
}
/* 主要内容 */
.maincontent {
  width: 100%;
  height: 0;
  display: flex;
  position: relative;
}
.contentleft {
  width: 30%;
  position: relative;
  top: 70px;
}
.contentleftsurvey {
  width: 91%;
  margin: auto;
  background-image: url(../assets/img/1-0bg01.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.contentleftsurveytitle {
  display: flex;
  width: 91%;
  margin: auto;

  background-image: url(../assets/img/1-0tit-bg01.png);
  background-size: 100% 100%;
  justify-content: space-between;
}
.surveyleftimg {
  width: 10%;
}
.surveytitle {
  width: 80%;
  color: #ffffff;
  font-size: 27px;
  text-align: left;
  line-height: 2;
}
.surveyrightimg {
  width: 10%;
  transform: rotateY(180deg);
}
.surveymaintext {
  font-family: "shuzi";
  color: #fff;
  padding: 20px 11px 20px 10px;
  font-size: 34px;
  /* background: #1800FC; */
  width: 58%;
  margin: auto;
  background: linear-gradient(to bottom, #021f4a, #0b1296);
  position: relative;
  z-index: 0;
}
.surveymaintext::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, green, purple);
  opacity: 0;
  transition: opacity 0.5s;
  z-index: -1;
}
.surveymain {
  width: 91%;
  margin: auto;
  padding-bottom: 39px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 4px;
}
.surveymaindiv {
  width: 23%;
}
.surveymaintitle,
.surveymaintitle2 {
  color: #01befc;
}
.surveymainimg img {
  width: 100%;
}
.Platformbigdata {
  width: 91%;
  margin: auto;
  background-image: url(../assets/img/1-0bg02.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.Paymentrecord {
  width: 91%;
  margin: auto;
  background-image: url(../assets/img/1-0bg03.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.Paymentrecordlist {
  width: 91%;
  margin: auto;
  height: 280px;
  padding-top: 10px;
  overflow: hidden;
}
.Paymentrecordlisttitle {
  width: 100%;
  background: #014c99;
  color: #01befc;
  display: flex;
  justify-content: space-evenly;
}
.Paymentrecordlisttitle div:nth-child(1) {
  width: 40%;
}
.Paymentrecordlisttitle div:nth-child(2) {
  width: 15%;
}
.Paymentrecordlisttitle div:nth-child(3) {
  width: 45%;
}
.Paymentlist {
  display: flex;
  color: #01befc;
  justify-content: space-evenly;
  padding: 10px 0px;
  font-size: 13px;
}
.Paymentlist div:nth-child(1) {
  width: 40%;
}
.Paymentlist div:nth-child(2) {
  width: 15%;
}
.Paymentlist div:nth-child(3) {
  width: 45%;
}
.list {
  overflow-x: hidden;
  overflow-y: scroll;
  /* overflow: hidden; */
  height: 260px;
}
.list::-webkit-scrollbar {
  display: none;
}
/* 框架中间 */
.contentmiddle {
  width: 40%;
  position: relative;
  top: 70px;
}
.contentmiddleprogram {
  width: 100%;
  margin: auto;
  background-image: url(../assets/img/1-0bg04.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.contentmiddleprogramdiv {
  width: 94%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 16px;
}
.contentmiddleprogrammiddle {
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.program {
  width: 30%;
}
.programimg1 {
  width: 45%;
  display: table-cell;
}
.programimg2 {
  width: 100%;
  position: relative;
  top: -20px;
}
.programimg1 img {
  width: 45%;
  display: block;
  margin: 0 auto;

  animation: identifier 1.8s infinite;
}
@keyframes identifier {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, 10px);
  }
  0% {
    transform: translate(0px, 0px);
  }
}
.programimg2 img {
  width: 100%;
}
.programtext {
  width: 60%;
}
.programtitle {
  color: #01befc;
  padding: 5px 0px;
  text-align: left;
}
.programnumber {
  display: flex;
}
.programnumber div:nth-child(1) {
  font-family: "shuzi";
  color: #fff;
  font-size: 34px;
}
.programnumber div:nth-child(2) {
  line-height: 2;
  color: #fff;
  font-size: 18px;
}
.contentmiddlerecord {
  width: 86%;
  justify-content: space-between;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 36px;
}
.contentmiddleone {
}
.contentmiddleone div:nth-child(1) {
  font-family: "shuzi";
  color: #fff;
  font-size: 34px;
  position: relative;
  top: 45px;
}
.contentmiddleone div:nth-child(2) {
  width: 100%;
  padding-bottom: 10px;
}
.contentmiddleone div:nth-child(2) img {
  width: 90%;
   cursor: pointer;
            -webkit-animation: scaleout 2s infinite ease-in-out;
            animation: scaleout 2s infinite ease-in-out;
}
  @-webkit-keyframes scaleout {
            0% {
                -webkit-transform: scale(1.0);
            }

            60% {
                transform: scale(1.0);
                -webkit-transform: scale(1.1);
            }

            100% {
                -webkit-transform: scale(1.0);
                opacity: 1;
            }
        }

        @keyframes scaleout {
            0% {
                transform: scale(1.0);
                -webkit-transform: scale(1.0);
            }

            60% {
                transform: scale(1.0);
                -webkit-transform: scale(1.1);
            }

            100% {
                transform: scale(1.1);
                -webkit-transform: scale(1.0);
                opacity: 1;
            }
        }
.contentmiddleone div:nth-child(3) {
  color: #01befc;
}
.contentmiddleone div:nth-child(4) {
  color: #01befc;
}
.contentmiddlemap {
  width: 35%;
  margin: auto;
  background-image: url(../assets/img/1-0bg05.png);
  background-size: 100% 100%;
  padding-top: 29px;
  display: flex;
  justify-content: space-between;
  margin-left: 7px;
}
.contentmiddlemaplist {
  width: 30%;
}
.map {
  width: 30px;
  height: 30px;
  margin: auto;
}
.map1 {
  width: 23px;
  height: 23px;
  border: 1px solid #f8b703;
  border-radius: 50%;
}
.map2 {
  width: 14px;
  height: 14px;
  background: rgba(120, 88, 1, 0.5);
  border: 2px solid #f8b703;
  border-radius: 50%;
  background: #f8b703;
  margin: auto;
  /* display: block; */
  /* text-align: center; */
  margin-top: 2px;
}

.map3 {
  width: 23px;
  height: 23px;
  border: 1px solid #1800fc;
  border-radius: 50%;
}
.map4 {
  width: 14px;
  height: 14px;
  background: rgba(10, 0, 101, 0.5);
  border: 2px solid #1800fc;
  border-radius: 50%;
  background: #1800fc;
  margin: auto;
  /* display: block; */
  /* text-align: center; */
  margin-top: 2px;
}

.map5 {
  width: 23px;
  height: 23px;
  border: 1px solid #795efb;
  border-radius: 50%;
}
.map6 {
  width: 14px;
  height: 14px;
  background: rgba(47, 26, 146, 0.5);
  border: 2px solid #795efb;
  border-radius: 50%;
  background: #795efb;
  margin: auto;
  /* display: block; */
  /* text-align: center; */
  margin-top: 2px;
}
.maptile {
  color: #ffffff;
  padding: 10px 0px;
}
/* 框架右边 */
.contentright {
  width: 30%;
  position: relative;
  top: 70px;
}
/* 案件处理情况 */
.Casehandling {
  width: 91%;
  margin: auto;
  background-image: url(../assets/img/1-0bg06.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.Casehandlingmain {
  width: 91%;
  margin: auto;
  padding-bottom: 39px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 4px;
}
.Casehandlingdiv {
  width: 30%;
  position: relative;
}
.Casehandlingmain .Casehandlingdiv:nth-child(1) .Casehandlnumber{
 
  padding-bottom: 10px;
 
  
   background-image: linear-gradient(transparent,rgba(0, 207, 208, 1)40%,transparent,rgba(0, 207, 208, 1) 40% ,transparent,rgba(0, 207, 208, 1) 40%,transparent,rgba(0, 207, 208, 1) 10%,rgba(0, 207, 208, 1) 20%,rgba(0, 207, 208, 1) 0%,transparent);
   background-size: 100% 100%;
       width: 91%;
    opacity: 0.3;
    height: 100px;
    margin: 0px auto;
    position: absolute;
    top: 10%;
    left: 50%;
    margin-left: -64px;
     /* animation: fade 1.2s infinite; */

}


.Casehandlingmain .Casehandlingdiv:nth-child(2) .Casehandlnumber{
 
  padding-bottom: 10px;
 
  
   background-image: linear-gradient(transparent,#02A5FE 0%,transparent,#02A5FE 1% ,#02A5FE 1%,transparent,#02A5FE 1%,#02A5FE 0%,#02A5FE 0%,transparent);
   background-size: 100% 100%;
       width: 91%;
    opacity: 0.3;
    height: 100px;
    margin: 0px auto;
    position: absolute;
    top: 10%;
    left: 50%;
    margin-left: -64px;
     animation: fade 1.2s infinite;

}

.Casehandlingmain .Casehandlingdiv:nth-child(3) .Casehandlnumber{
 
  padding-bottom: 10px;
 
  
   background-image: linear-gradient(transparent,#4A30C4 0%,transparent,#4A30C4 1% ,#4A30C4 1%,transparent,#4A30C4 1%,#4A30C4 0%,#4A30C4 0%,transparent);
   background-size: 100% 100%;
       width: 91%;
    opacity: 0.3;
    height: 100px;
    margin: 0px auto;
    position: absolute;
    top: 10%;
    left: 50%;
    margin-left: -64px;
     animation: fade 1.2s infinite;

}

.Casehandlingdiv div:nth-child(2) {
   color: #fff;
    font-family: "shuzi";
 
  font-size: 34px;
  position: relative;
    padding-bottom: 20px;
    padding-top: 20px;

}

.Casehandlingdiv div:nth-child(3) {
   color: #01befc;
   
   /* transform: rotateX(
            180deg);
        animation: circle 5s linear infinite; */
    /* animation: fade 1s infinite; */
    
}

.Casehandlingdiv div:nth-child(3) img {
  width: 100%;

    /* animation: fade 1s infinite; */
}
  @keyframes circle {
        0% {
          transform: rotateX(
              70deg) rotateZ(0);
        }
        100% {
          transform: rotateX(
              70deg) rotateZ(
              360deg);
        }
      }
@keyframes fade {

    0% {
    opacity: 0.1;
    }
   10% {
    opacity: 0.1;
    }
    20% {
     opacity: 0.2;
    }
    30% {
      opacity: 0.3;
    }
    40% {
     opacity: 0.4;
    }
   50% {
     opacity: 0.5;
   }
   60% {
  opacity: 0.4;
    }
     70% {
  opacity: 0.3;
    }
     80% {
  opacity: 0.2;
    }
     90% {
  opacity: 0.1;
    }
     100% {
  opacity: 0.1;
    }
}
.Casehandlingdiv div:nth-child(4) {
  color: #01befc;
}
.Casehandlingdiv div:nth-child(5) {
  color: #01befc;
}
/* 案件来源 */
.Sourceofcase {
  width: 91%;
  margin: auto;
  background-image: url(../assets/img/1-0bg07.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.Sourceofcasechart {
  width: 100%;
  padding-top: 6px;
}

/* 饼状图 */

.water-eval-container {
  /* width: 100%;
            height: 100%; */
}
.cityGreenLand-charts {
  height: 260px;
  margin: 0 auto;
}
.cityGreenLand {
  height: 230px;
  margin: 0 auto;
}

.Casetype {
  width: 91%;
  margin: auto;
  background-image: url(../assets/img/1-0bg8.png);
  background-size: 100% 100%;
  padding-top: 29px;
}
.Casetypetitle {
  width: 93%;
  margin: auto;
  display: flex;
}
.Casetype3d {
  width: 100%;
  padding-top: 6px;
}
.Casetypeleft {
  width: 40%;
}
</style>