
var infoWindow = new google.maps.InfoWindow({
});

function setLayer(){
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk'
        },
        styles: [{
            polygonOptions: {
                fillColor: "#00FFFF",
                fillOpacity: 0.3
            }
        }, {
            where: "ISO_2DIGIT = 'CN'",
            polygonOptions: {
                fillColor: "#000000",
                fillOpacity: 0.0001,
                strokeColor: "#FFFFFF"
            }
        }],
        clickable: false
    });
    layer.setMap(map);
}

function getPorts(){
	var ports = [];
    ports[0] = {name: "连云港", latitude: 34.733, longitude: 119.45, description: "<b>连云港</b> 东经119.45 北纬34.733<br>连云港港地处中国沿海中部的海州湾西南岸、江苏省的东北端，位于北纬34°44'，东经119°27'（主要港区）。港口北倚长6㎞的东西连岛天然屏障，南靠巍峨的云台山，为横贯中国东西的铁路大动脉——陇海、兰新铁路的东部终点港，被誉为新亚欧大陆桥东桥头堡和新丝绸之路东端起点，是中国中西部地区最便捷、最经济的出海口...", wind: "常风向偏东，强风向偏北。大风除年均一次台风影响外，一般出现在冬季，最大风速为28米/秒。", annual_avg_precipitation: "852.8mm", annual_avg_temperature: "14摄氏度"};
    ports[1] = {name: "宁波港", latitude: 29.9411, longitude: 121.8513, description: "<b>宁波港</b> 东经121.8513 北纬29.9411<br>宁波港地处我国大陆海岸线中部，南北和长江“ T ”型结构的交汇点上，地理位置适中，是中国大陆著名的深水良港。宁波港是一个集内河港、河口港和海港于一体的多功能、综合性的现代化深水大港，已与世界上100多个国家和地区的600多个港口通航...", wind: "常风向西北，频率13.4%；次常风向东北，频率11.0%；冬季常风向西北北，夏季常风向东南东向；强风向东北、东北北，最大风速分别为38米/秒和37米/秒。多年平均≥6级风天数32天，≥7级风天数15天，≥8级风天数6天。", annual_avg_precipitation: "1411mm", annual_avg_temperature: "16.3摄氏度"};
    ports[2] = {name: "上海港", latitude: 31.2385556, longitude: 121.484583, description: "<b>上海港</b> 东经121.4846 北纬31.239<br>上海港位于长江三角洲前缘，地处长江东西运输通道与海上南北运输通道的交汇点，是中国沿海的主要枢纽港，2010年上海港货物、集装箱吞吐量均位居世界第一...", wind: "全年以东南偏东风为最多，东风及东南风次之，11月至次年2月多西北风，4~8月多东南风，6~10月会有台风及随风而来的暴雨。上海受台风影响或袭击主要在7~9月。8月受台风影响时，风力较强，9月台风常与南下的冷空气结合，以产生大暴雨。年平均风速3.0米/秒，最大风速30.0米/秒。", annual_avg_precipitation: "1110.9mm", annual_avg_temperature: "15.8摄氏度"};
    ports[3] = {name: "大连港", latitude: 38.9167, longitude: 121.65, description: "<b>大连港</b> 东经121.65 北纬38.9167<br>大连港位居西北太平洋的中枢，是正在兴起的东北亚经济圈的中心，是该区域进入太平洋，面向世界的海上门户。港口港阔水深，不淤不冻。自然条件非常优越，是转运远东、南亚、北美、欧洲货物最便捷的港口..."};
    ports[4] = {name: "香港港", latitude: 22.5, longitude: 114.333, description: "<b>香港港</b> 东经114.333 北纬22.5<br>香港港是中国天然良港，远东的航运中心，在珠江口外东侧，香港岛和九龙半岛之间 。目前有80多条国际班轮每周提供约500班集装箱班轮服务，连接香港港至世界各地500多个目的地..."};
    ports[5] = {name: "高雄港", latitude: 22.617, longitude: 120.267, description: "<b>高雄港</b> 东经120.267 北纬22.617<br>高雄港是一座位于台湾南部的海港，毗邻高雄市市区，也是台湾最大的港口，属大型综合性港口。港口年吞吐量约5000～6000万吨。港口设有百万吨级大型干船坞和两座25万吨级单点系泊设施。高雄港是世界集装箱运输的大港之一。1989年集装箱吞吐量已达338.3万标准箱，居世界第四位..."};
    ports[6] = {name: "花莲港", latitude: 23.983, longitude: 121.617, description: "<b>花莲港</b> 东经121.617 北纬23.983<br>花莲港位于台湾花莲县花莲市，为台湾的主要港口之一。东临太平洋，西倚中央山脉，是一个由东、西防波堤合拢而成的人工港。现有码头25座，年装卸量可达3,400万吨，另有仓库六栋十五间、堆货场三十八处、临时货柜集散站一座、港勤拖船四艘、及交通艇一艘，港埠设施极为完备，足以担负东部地区产业发展及港埠输运功能..."};
    ports[7] = {name: "基隆港", latitude: 25.15, longitude: 121.733, description: "<b>基隆港</b> 东经121.733北纬25.15<br>基隆港位于台湾岛北端，是台湾北部海上门户，重要的海洋渔业基地。港口三面环山，沿海湾建有 40 余个泊位。港口年吞吐量约3500～4000万吨，吞吐主要货物有粮食、石油、水泥、木材 、化肥和钢铁等。以货柜为主，散货为辅。是环岛航运之主要枢纽港，结合观光，亲水性之港口..."};
    ports[8] = {name: "台中港", latitude: 24.288, longitude: 120.483, description: "<b>台中港</b> 东经120.483 北纬24.288<br>台中港旧称梧栖港，位于台台湾中县清水镇。 港口背向大度山，滨临台湾海峡，大甲溪及大肚溪分别自其南北出海，地形上突出于台湾海峡西海岸，于1982年完成港湾建设，为十大建设的重要工程之一，与高雄港、花莲港、基隆港同为本省四大国际港..."};
    ports[9] = {name: "京唐港", latitude: 39.213, longitude: 119.0128, description: "<b>京唐港</b> 东经119.0128 北纬39.213<br>京唐港（原名唐山港）位于唐山市东南80公里处的唐山海港开发区境内，渤海湾北岸。陆上距北京市230公里，海上距上海港669海里，香港1360海里，距日本长崎港680海里，韩国仁川港400海里。位环渤海经济圈中心地带，是大北京战略的重要组成部分，是国家确定的沿海重要港口..."};
    ports[10] = {name: "北仑港", latitude: 30.0117, longitude: 121.898, description: "<b>北仑港</b> 东经121.898 北纬30.0117<br>北仑港是远东地区最大液体化工产品中转基地，已与世界上100多个国家和地区的600多个港口通航。2010年货物吞吐量达6.27亿吨，超越上海—洋山港成为世界第一大港；集装箱吞吐量达1300.2万标准箱，居大陆港口第3位，有望跻身世界前6强..."};
    ports[11] = {name: "厦门港", latitude: 24.483, longitude: 118.0667, description: "<b>厦门港</b> 东经118.066 北纬24.4837<br>厦门港是中国东南沿海重要的天然深水良港，自然条件优越。港湾外围大小金门等岛屿形成一道天然屏障，港内水域宽阔、水深浪小、不冻不淤..."};
    ports[12] = {name: "广州港", latitude: 23.1, longitude: 113.6, description: "<b>广州港</b> 东经113.6 北纬23.1<br>广州港是中国第三大港口，吞吐量居世界第五位，改革开放以来，社会经济飞速发展使广州港发展成为国家综合运输体系的重要枢纽和华南地区对外贸易的重要口岸。"};
    ports[13] = {name: "深圳港", latitude: 22.4833, longitude: 113.8667, description: "<b>深圳港</b> 东经113.8667 北纬22.4833<br>深圳港位于中国广东省珠江三角洲南部，珠江入海口伶仃洋东岸，毗邻香港。深圳港位于深圳市东、西两翼,东片濒临大鹏湾,西片靠珠江口伶仃洋矾石水道,水陆均与亚太航运中心香港相连。深圳港是以其无比优越的地理位置和良好的深水港湾,用经济特区建港的特殊模式,与深圳市的经济同步发展起来的..."};
    ports[14] = {name: "珠海港", latitude: 21.733, longitude: 114.333, description: "<b>珠海港</b> 东经114.333 北纬21.733<br>珠海位于广东省南部，珠江口右岸，珠江八大出海口的五门 ( 金星门、磨刀门、鸡啼门、虎跳门和崖门 ) 汇流入海处。经过 20 多年的建设，初步建立起了陆海空立体化的综合交通运输网，为未来的发展打下了坚实的基础。珠海港是全国 25 个沿海主要港口之一..."};
    ports[15] = {name: "葫芦岛港", latitude: 40.7167, longitude: 120.9833, description: "<b>葫芦岛港</b> 东经120.9833 北纬40.7167<br>葫芦岛港位于中国辽东湾西北部葫芦岛半岛上，西南距秦皇岛港90海里，东距营口港60海里。全港以防波堤为界，分为内外两港。港区面积2平方公里，水深7至9米，港阔水深，夏避风浪，冬微结薄冰，为中国北方理想的不冻良港..."};
    ports[16] = {name: "黄骅港", latitude: 38.433, longitude: 117.3833, description: "<b>黄骅港</b> 东经117.3833 北纬38.433<br>黄骅港是河北省沿海的地区性重要港口，也是中国的主要能源输出港之一，位于河北省与山东省交界处、沧州市区以东约90公里的渤海之滨，由煤炭港区、综合港区和河口港区3个港区组成..."};
    ports[17] = {name: "天津港", latitude: 38.9833, longitude: 117.75, description: "<b>天津港</b> 东经117.75 北纬38.9833<br>天津港是中国大陆最早开展国际集装箱运输业务的港口。天津港地处渤海湾西端，位于海河下游及其入海口处，是环渤海中与华北、西北等内陆地区距离最短的港口，是首都北京的海上门户，也是亚欧大陆桥最短的东端起点。"};
    ports[18] = {name: "釜山港", latitude: 35.0783, longitude: 129.017, description: "<b>釜山港</b> 东经129.017 北纬35.0783<br>釜山港位于韩国（全称：大韩民国REPUBLIC OF KOREA）东南沿海，东南濒朝鲜（KOREA）海峡，西临洛东（NAKTONG）江，与日本对马（TSUSHIMA）岛相峙，是韩国最大的港口，也是世界第五大集装箱港。它是韩国海陆空交通的枢纽，又是金融和商业中心，在韩国的对外贸易中发挥重要作用..."};
    ports[19] = {name: "仁川港", latitude: 37.4667, longitude: 126.6167, description: "<b>仁川港</b> 东经126.6167 北纬37.4667<br>仁川港是韩国第二大港，是韩国西海岸的最大港口，也是韩国首都首尔的外港，相距不到40公里，为韩国政府经营，港口附近设有出口加工区。仁川港市是韩国最大的经济中心，又是韩国北部进出口贸易中心..."};
    ports[20] = {name: "木蒲港", latitude: 34.7667, longitude: 126.3833, description: "<b>木蒲港</b> 东经126.3833 北纬34.7667<br>木蒲港是韩国商港。位于朝鲜半岛西南端务安小半岛之顶角，港市之东南，西临南黄海..."};
    ports[21] = {name: "神户港", latitude: 34.6667, longitude: 135.2, description: "<b>神户港</b> 东经135.2 北纬34.6667<br>神户港位于日本（全称：日本JAPAN）本州（HONSHU）南部兵库（HYOGO）县芦屋川河口西岸，濒临大阪（OSAKA）湾西北侧，是日本最大的集装箱港口，也是世界十大集装箱港口之一..."};
    ports[22] = {name: "名古屋港", latitude: 35.0833, longitude: 136.8833, description: "<b>名古屋港</b> 东经136.8833 北纬35.0833<br>名古屋港位于日本（全称：日本国JAPAN）本州（HONSHU）东南部爱知（AICHI）县西部沿海伊势（ISE）湾的西北侧，是日本五大港口之一..."};
    ports[23] = {name: "横滨港", latitude: 35.45, longitude: 139.6333, description: "<b>横滨港</b> 东经139.6333 北纬35.45<br>横滨港位于日本本州（HONSHU）东南部神奈川（KANAGAWA）县东部沿海，濒临东京（TOKY0）湾的西侧，北与川崎（KAWASAKI）港相邻，是日本第二大港口，也是世界亿吨大港之一，并且是世界十大集装箱港口之一..."};
    ports[24] = {name: "川崎港", latitude: 35.5333, longitude: 139.7667, description: "<b>川崎港</b> 东经139.7667 北纬35.5333<br>川崎港是京滨工业地带的中心工业港，也是做为能源的供应基地，支撑着首都圈的产业和市民的生活。2008年来，因为有商港功能中心东扇岛的物流机能的充实，对首都圈的物流地点有非常重要的分担，继续往国际贸易港发展。现在临海部有多样的计划在进行，川崎港有连结陆海空，可形成很有魅力的高性能物流的空间..."};
    ports[25] = {name: "酒田港", latitude: 38.9167, longitude: 139.8, description: "<b>酒田港</b> 东经139.8 北纬38.9167<br>酒田港是日本商港，位于本州东北日本海岸最上川口，港市之西南..."};
    ports[26] = {name: "千叶港", latitude: 35.6, longitude: 140.1167, description: "<b>千叶港</b> 东经140.1167 北纬35.6<br>千叶港位于日本（全称：日本国JAPAN）本州（HONSHU）东南沿海千叶县西部，濒临东京（TOKYO）湾的东北侧，是日本最大的工业港口。千叶港岸线总长133公里，港区面积24800公顷，是日本主要港口之一，货物吞吐量常居日本前一、二位..."};
    ports[27] = {name: "科威特港", latitude: 29.35, longitude: 47.9333, description: "<b>科威特港</b> 东经47.9333 北纬29.35<br>科威特港位于科威特（全称：科威特国THE STATE OF KUWAIT）东部沿海科威特湾的进口南岸，濒临波斯湾（PERSIAN GULF）的西北侧，是科威特的主要港口之一。它是科威特的主要港口之一。它是科威特的首都，是全国政治、经济、文化和交通中心..."};
    ports[28] = {name: "民都鲁港", longitude: 3, latitude: 113, description: "<b>民都鲁港</b> 东经113 北纬3<br>民都鲁港（BINTULU）位于马来西亚砂捞越州沿海中部，处于中东与欧洲海运线的繁忙中心..."};
    ports[29] = {name: "柔佛港", latitude: 4.45, longitude: 103.75, description: "<b>柔佛港</b> 东经103.75 北纬4.45<br>柔佛港是马来西亚第三大集装箱港口，排名在巴生港和丹戎帕拉帕斯港之后。拥有长度为760米的集装箱码头，泊位水深15米，可以停靠8万载重吨的集装箱船，年吞吐量超过80万标准箱..."};
    ports[30] = {name: "古晋港", latitude: 1.5667, longitude: 110.35, description: "<b>古晋港</b> 东经110.35 北纬1.5667<br>古晋港位于马来西亚（全称：马来西亚MALAYSIA）加里曼丹（KALIMANTAN）岛西北部沙捞越（SARAWAK）地区西南沿海的沙捞越河下游，距河口约16n mile,是沙捞越最大的港口..."};
    ports[31] = {name: "马六甲港", latitude: 2.2167, longitude: 102.25, description: "<b>马六甲港</b> 东经102.25 北纬2.2167<br>马来西亚马六甲海峡东南岸港口，采用东8区标准时。最大吃水10.36米，水的载重密度1025。潮差约1.83米，盛行西南和东北季风..."};
    ports[32] = {name: "迪拜港", latitude: 25.3, longitude: 55.3, description: "<b>迪拜港</b> 东经55.3 北纬25.3<br>迪拜港位于阿联酋（全称：阿拉伯联合酋长国THE UNITED ARAB EMIRATES）东北沿海，濒临波斯湾的南侧。又名拉希德港（MINA RASHID），并与1981年新建的米纳杰贝勒阿里港（MINA JEBEL ALI）同属迪拜港务局管辖，是阿联酋最大的港口，也是集装箱大港之一..."};
    ports[33] = {name: "马尼拉港", latitude: 14.5833, longitude: 120.9667, description: "<b>马尼拉港</b> 东经120.9667 北纬14.5833<br>马尼拉港位于菲律宾（全称：菲律宾共和国 REPUBLIC OF THE PHILIPPINES）吕宋（LUZON）岛西南沿海巴石（PASIG）河口两岸，濒临马尼拉湾的东侧，是菲律宾最大的海港..."};
    ports[34] = {name: "加尔各答港", latitude: 22.5667, longitude: 88.3333, description: "<b>加尔各答港</b> 东经88.3333 北纬22.5667<br>加尔各答港位于印度（全称：印度共和国THEREPUBLICOFINDIA）东北部恒河三角洲（GANGADELTA）胡格里（HUGLI）河左岸，距河口约123nmile，濒临孟加拉（BENGAL）湾的北侧，是印度东部的最大港口，因主要出口黄麻，又有“黄麻港”之称..."};
    ports[35] = {name: "新德里港", longitude: 28, latitude: 77, description: "<b>新德里港</b> 东经77 北纬28<br>新德里是印度共和国首都，是全国政治、经济和文化中心。新德里的两个港口:T港、P港。这是一个内陆验关货运站，由于海运无法直达，所以进口到印度这二个内陆点的集装箱货物需要由那瓦什瓦拖到这二个点..."};
    ports[36] = {name: "孟买港", latitude: 18.9333, longitude: 72.8167, description: "<b>孟买港</b> 东经72.8167 北纬18.9333<br>孟买港位于印度（全称：印度共和国THE REPUBLIC OF INDIA）西海岸外的孟买岛上（该岛已与大陆连结），西濒阿拉伯（ARAB）海，是印度最大的港口。它是南亚大陆桥的桥头堡，东起加尔各答，西至孟买，全长2000km，是印度海陆空的交通枢纽..."};

    return ports;
}
function attachMessageWindow(marker){
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.close();
        infoWindow.setContent(marker.description);
        infoWindow.open(map,marker);
    });
}

function attachRightBar(marker,port){
    google.maps.event.addListener(marker, 'click', function() {
        jQuery("#mark_details").hide();
        jQuery("#tb_name").text("");
        jQuery("#tb_wind").text("");
        jQuery("#tb_annual_avg_precipitation").text("");
        jQuery("#tb_annual_avg_temperature").text("");

        jQuery("#tb_name").text(port.name);
        jQuery("#tb_wind").text(port.wind);
        jQuery("#tb_annual_avg_precipitation").text(port.annual_avg_precipitation);
        jQuery("#tb_annual_avg_temperature").text(port.annual_avg_temperature);
        jQuery("#mark_details").show(500);
    });
}

function markerPorts(){
    ports = getPorts();
    for(var i = 0; i < ports.length; i++){
        var marker = new google.maps.Marker({
            position:  new google.maps.LatLng(ports[i].latitude,ports[i].longitude),
            map: map,
            title: ports[i].name,
            description: ports[i].description

        });
        attachMessageWindow(marker);
        attachRightBar(marker,ports[i]);
    }
}
	
function initialize() {
	var china = new google.maps.LatLng(36,102);
	map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: china,
	  zoom: 3,
      minZoom: 3,
      maxZoom: 6,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    setLayer();
    markerPorts();
}

google.maps.event.addDomListener(window, 'load', initialize);