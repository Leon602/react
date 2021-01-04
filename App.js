import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Text, View,Button,Image, AccessibilityInfo, Alert, TouchableOpacity} from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './src/productlist';
import styles from './src/style';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { TextInput } from 'react-native-gesture-handler';
import one from './src/123';




//import producut from './src/product';
//頁面的跳轉
function HomeScreen({navigation}){
  global.realname;
  
  return (
   

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.top1} source={require("./assets/title.png")}/>
      <Image style={styles.top} source={require("./assets/IMG_0446.jpeg")}/>
      
      <Button
        title="開始遊戲"
        onPress={() => navigation.navigate("轉生")} />

        {/* <Button
        title='邦掉'
        onPress={()=> navigation.navigate('邦掉')}/> */}
    </View>
  );
}
function DetailsScreen({navigation}) {
   
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="下一頁"
        onPress={() => navigation.navigate('轉生')}/>    
        
    </View>
  );
}
function productlist({navigation}){
  return(
    <View style={styles.container}>
      <productlist/>
    <Button
      title='go back'
      onPress={()=> navigation.navigate('首頁')} />
    </View>

  );
}
//轉生
function DetailsScreen2({navigation}){
  
   
  //  [name, setname] = useState("邦哥");
   [realname, setname] = useState("邦哥");


  return(
    <View>
      <Text style={styles.story_text}>
        中美湖男神告知您已轉生至冒險誠邦，這是一個中世紀充滿冒險與魔法的時代，請告訴我您叫什麼名字
      </Text>
      <Image style={styles.img主線} source={require("./assets/IMG_0470.jpeg")}/>
      <TextInput placeholder="請告訴我你的名字"  
                  onChangeText={(val)=>setname(val) } 
                  style={{ height: 40, borderColor: 'black', borderWidth: 1 ,width:200,alignSelf:'center',marginTop:20} }
        />
        {/* <Text>{name}</Text>
       <Text>name</Text> */}
       
      <Button 
        title="確認"
        
        onPress={()=> navigation.navigate('1-1')}
      />
    
    </View>

  );
  
}
//1-1
function DetailsScreen3({navigation}){
  
   
      global.STR
      global.DEX
      global.INT
      global.TYPE
    
    function seet(){
      global.STR=10;
      global.DEX=10;
      global.INT=10;
    }
    function kick(){
      global.DEX=20;
      global.TYPE="KICK"
     
    }
    function warrior(){
      global.STR=20;
      global.TYPE="WARRIOR"
    }
    function magic(){
      global.INT=20;
      global.TYPE="MAGIC"
    }
  return(
  
    <View>
      
      <Text style={styles.story_text}>您好{realname}，在冒險誠邦裡每個人都有一個專屬職業，{realname}，你想成為甚麼樣的人呢？</Text>
      <Image style={styles.img支線}  source={require("./assets/kickman.png")}/>
    <Button  title="鬥神"  onPress={()=> navigation.navigate('1-2') ||seet()|| kick() }  ></Button>
     
     
      
     
      <Image style={styles.img支線} source={require("./assets/warrior.png")}/>
      <Button  title="狂戰士"  onPress={()=> navigation.navigate('1-2') ||seet()|| warrior() }></Button>
      
      <Image style={styles.img支線} source={require("./assets/magic.png")}/>
      <Button  title="血法師" onPress={()=> navigation.navigate('1-2') ||seet()|| magic() }></Button>
    </View>
  );
  
}
//1-2
function  DetailsScreen4({navigation}){
  
  
  if (DEX==20) {
    return (
     <View>
     <Text style={styles.story_text}>鬥神是用腳戰鬥的職業，擁有較高的敏捷屬性以及相輔相成的攻擊力，擅長在戰鬥中躲閃敵人的攻擊並在此期間給予敵人重踹
      dex:{DEX} str:{STR}INT:{INT}</Text>
      <Image style={styles.img特} source={require("./assets/kickman.png")}/>
      <Button title="確定轉職" onPress={()=>  Alert.alert('獲得裝備','腳銬加入道具欄',[{text:"謝謝",onPress :()=>navigation.navigate('卡塔利克村') } ])    }> </Button>
   </View>
    );
  }
  else if(STR==20){
    return(
      <View><Text style={styles.story_text}> 狂戰士擁有極高的攻擊力以及純熟的防守技術並能夠熟練的揮舞著大刀，擅長用大刀鎖定戰局的勝利，但本身笨拙的行動常常導致戰鬥中多承受幾次傷害dex:{DEX} str:{STR}INT:{INT}</Text>
      <Image style={styles.img特} source={require("./assets/warrior.png")}/>
      <Button title="確定轉職" onPress={()=>Alert.alert('獲得裝備','斬首大刀加入道具欄',[{text:"謝謝",onPress :()=>navigation.navigate('卡塔利克村') } ])  }> </Button>
      </View>
    );
  }
  else if(INT==20){
    return(
    <View><Text style={styles.story_text}>血法師擁有極高的戰鬥智商，擅長遠距離魔法攻擊，有在敵人接近之前就解決敵人的強大實力，但本身的身體素質較差若不幸被強大的敵人貼身攻擊容易導致戰鬥失敗 dex:{DEX} str:{STR} INT:{INT}</Text>
    <Image style={styles.img特} source={require("./assets/magic.png")}/>
    <Button title="確定轉職" onPress={()=>Alert.alert('獲得裝備','爆裂魔杖加入道具欄',[{text:"謝謝",onPress :()=>navigation.navigate('卡塔利克村') } ]) }> </Button>
    </View>
    )
  }
  else{
    return(
      <View><Text style={styles.story_text} >請重開遊戲</Text></View>
    )
  }
} 
//卡塔利克村
function DetailsScreen5({navigation}){
 
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  
  const pres = () =>{
    navigation.goBack(); 
  }
  // Alert.alert('卡塔利克村','歡迎光臨卡塔利克村，去找村民講講話吧!');
return(

<View>

  <Text style={styles.viallage}  >卡塔利克村</Text>
  
  {/* <Text style={styles.story_text}>您好{realname}歡迎蒞臨卡塔利克村，{STR}，{DEX}，{INT}，{TYPE}</Text> */}
 

     
  <TouchableOpacity >
      <Image   style={styles.imghouse} source={require("./assets/house.png")}/>
  </TouchableOpacity>  
  <TouchableOpacity>
      <Image   style={styles.imgtree01} source={require("./assets/tree01.png")}/>
  </TouchableOpacity>  
  <TouchableOpacity>
      <Image   style={styles.imgtree02} source={require("./assets/tree02.png")}/>
  </TouchableOpacity>  
  <TouchableOpacity onPressIn={()=> navigation.navigate('村長')}>
      <Image   style={styles.imgnpc01} source={require("./assets/npc01.png")}/>
  </TouchableOpacity>   
  
  <TouchableOpacity  onPressIn={()=> navigation.navigate('農夫')}>
      <Image   style={styles.imgnpc02} source={require("./assets/npc02-side.png")}/>
  </TouchableOpacity>  
  <TouchableOpacity onPressIn={()=> navigation.navigate('鐵匠')}>
      <Image   style={styles.imgnpc03} source={require("./assets/npc03-side.png")}/>
  </TouchableOpacity>
     
  <TouchableOpacity onPressIn={()=> navigation.navigate('村莊外')}>
      <Image   style={styles.imgarrow_down} source={require("./assets/arrow-down.png")}/>
  </TouchableOpacity>     
  <Button title="go back"  onPress={pres}></Button>
</View>
);

}
//npc01talk
function DetailsScreen5_1({navigation}){

  
  return (
   

    <View style={ styles.story_text}>
      <Image   style={styles.imgnpc01} source={require("./assets/npc01.png")}/>
      <Text>您好{realname}歡迎來到卡塔利克村，點看看右上角的裝備圖示好像有什麼新裝備加入了!</Text>
    </View>
  )
}
//npc02talk
function DetailsScreen5_2({navigation}){

  
  return (
   

    <View style={ styles.story_text}>
      
      <Text>最近碰到了好多麻煩不知道有沒有人可以幫助我...</Text>
      <Button title="123"></Button>
      <Image   style={styles.imgnpc01} source={require("./assets/npc02-face.png")}/>
    </View>
  )
}
//npc03talk
function DetailsScreen5_3({navigation}){

  
  return (
   

    <View style={ styles.story_text}>
      
      <Text>你願意聽我說嗎?...</Text>
      <Button title="123"></Button>
      <Image   style={styles.imgnpc01} source={require("./assets/npc03-face.png")}/>
    </View>
  )
}
//出卡塔利克村 村外01
function DetailsScreen6({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
   

    <View >
       <TouchableOpacity onPressIn={()=> navigation.navigate('卡塔利克村')}>
      <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
  </TouchableOpacity>  
      <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮02')}>
      <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
  </TouchableOpacity> 

  {/* <TouchableOpacity >
      <Image   style={styles.imglamb} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>  */}

  {/* <TouchableOpacity >
      <Image   style={styles.imglamb_} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>  */}

  <TouchableOpacity >
      <Image   style={styles.imglamb01} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb_01} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>  

  <TouchableOpacity>
      <Image   style={styles.imglamb02} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity>
      <Image   style={styles.imglamb_02} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb03} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity >
      <Image   style={styles.imglamb_03} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity >
      <Image   style={styles.imglamb04} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity >
      <Image   style={styles.imglamb_04} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity >
      <Image   style={styles.imglamb05} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity >
      <Image   style={styles.imglamb_05} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity >
      <Image   style={styles.imglamb06} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb_06} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb07} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb_07} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb08} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb_08} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb09} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  <TouchableOpacity >
      <Image   style={styles.imglamb_09} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>
    </View>
  )
}
//迷宮02
function DetailsScreen6_2({navigation}){

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
   

    <View >
       <TouchableOpacity onPressIn={()=> navigation.navigate('村莊外')}>
      <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮03')}>
      <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮12')}>
      <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
  </TouchableOpacity> 

       <TouchableOpacity >
      <Image   style={styles.imglamb01} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity >
      <Image   style={styles.imglamb_01} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 
  
  <TouchableOpacity >
      <Image   style={styles.imglamb09} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>
  
  <TouchableOpacity >
      <Image   style={styles.imglamb_09} source={require("./assets/lamb.png")}/>
  </TouchableOpacity>

  
   
    </View>
  )
}

//迷宮03
function DetailsScreen6_3({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  
  return (
   

    <View >
       <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮02')}>
      <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮04')}>
      <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮13')}>
      <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
  </TouchableOpacity> 
     
  <TouchableOpacity >
      <Image   style={styles.imglamb01} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity >
      <Image   style={styles.imglamb_01} source={require("./assets/lamb.png")}/>
  </TouchableOpacity> 
  
  <TouchableOpacity >
      <Image   style={styles.imglamb09} source={require("./assets/lamb_red.png")}/>
  </TouchableOpacity>
  
  <TouchableOpacity >
      <Image   style={styles.imglamb_09} source={require("./assets/lamb_purple.png")}/>
  </TouchableOpacity>
 
   
    </View>
  )
}

//迷宮04
function DetailsScreen6_4({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  
  return (
   

    <View >
       <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮03')}>
      <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮05')}>
      <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮14')}>
      <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
  </TouchableOpacity> 
      
  <TouchableOpacity >
      <Image   style={styles.imglamb01} source={require("./assets/lamb_red.png")}/>
  </TouchableOpacity> 
  <TouchableOpacity >
      <Image   style={styles.imglamb_01} source={require("./assets/lamb_purple.png")}/>
  </TouchableOpacity> 
  
  <TouchableOpacity >
      <Image   style={styles.imglamb09} source={require("./assets/lamb_red.png")}/>
  </TouchableOpacity>
  
  <TouchableOpacity >
      <Image   style={styles.imglamb_09} source={require("./assets/lamb_red.png")}/>
  </TouchableOpacity>
  
   
    </View>
  )
}

//迷宮05
function DetailsScreen7({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
      <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮04')}>
      <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
  </TouchableOpacity>   

  
  <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮15')}>
      <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
  </TouchableOpacity> 

  <TouchableOpacity onPressIn={()=> navigation.navigate('怪獸01')}>
      <Image   style={styles.imgmonster01} source={require("./assets/monster01.png")}/>
  </TouchableOpacity> 


 
    </View>
  )
}

//迷宮12
function DetailsScreen7_2({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮02')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮13')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮22')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
   
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity>


 </View>
  )
}
//迷宮13
function DetailsScreen7_3({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮12')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮14')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮23')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮03')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_red.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮14

function DetailsScreen7_4({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮13')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮15')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮24')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮04')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_red.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_red.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮15
function DetailsScreen7_5({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮14')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮25')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮05')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_red.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_red.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮22

function DetailsScreen8_2({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
  
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮23')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮32')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮12')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮23
function DetailsScreen8_3({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮22')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮24')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮33')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮13')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮24
function DetailsScreen8_4({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮23')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮25')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮34')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮14')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮25
function DetailsScreen8_5({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮24')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 

<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮35')}>
   <Image   style={styles.imgarrow_right} source={require("./assets/arrow-right.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮15')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮32
function DetailsScreen9_2({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮33')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 

<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮22')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 



 </View>
  )
}

//迷宮33
function DetailsScreen9_3({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮32')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮34')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 

<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮23')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_yellow.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮34
function DetailsScreen9_4({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮33')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 
<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮35')}>
   <Image   style={styles.imgarrow_down01} source={require("./assets/arrow-down.png")}/>
</TouchableOpacity> 

<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮24')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb01} source={require("./assets/lamb_purple.png")}/>
</TouchableOpacity> 
<TouchableOpacity >
   <Image   style={styles.imglamb_01} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity> 

<TouchableOpacity >
   <Image   style={styles.imglamb09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>

<TouchableOpacity >
   <Image   style={styles.imglamb_09} source={require("./assets/lamb_green.png")}/>
</TouchableOpacity>


 </View>
  )
}

//迷宮35
function DetailsScreen9_5({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  
  return (
   

    <View >
    <TouchableOpacity onPressIn={()=> navigation.navigate('迷宮34')}>
   <Image   style={styles.imgarrow_top} source={require("./assets/arrow-top.png")}/>
</TouchableOpacity> 


<TouchableOpacity onPressIn={()=> navigation.navigate('迷宮25')}>
   <Image   style={styles.imgarrow_left} source={require("./assets/arrow-left.png")}/>
</TouchableOpacity> 



 </View>
  )
}


//怪獸1
function DetailsScreen8({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const [hp, setCount] = useState(500);
  const [playerhp, setpCount] = useState(50);
  // const onPress = () => setCount(prevCount => prevCount +1);
  function onPress(){
    if(hp>0 ) {
      setCount(prevCount => prevCount -50);
      if (playerhp>0) {
        setpCount(prevCount => prevCount -10);
      }
      else{
       
        Alert.alert('死亡','你被打敗了QQ',[{text:"OK",onPress :()=>navigation.navigate('卡塔利克村') } ])
      }
    }
    else{
      Alert.alert('成功','打敗怪獸了!',[{text:"OK",onPress :()=>navigation.goBack() } ])
    }
  }
 
  
  // function attack(){
  //   if (hp>0) {
  //     hp=hp-50;
    
  //   }
  //   else{
  //     Alert.alert('擊敗怪獸了!');
  //     // navigation.goBack(); 

  //   }
  // }
  return (
   

    <View >
     
     <TouchableOpacity onPressIn={onPress}>
      <Image   style={styles.imgmonster01_1} source={require("./assets/monster01.png")}/>
  </TouchableOpacity> 
  <Text style={styles.story_text}>怪獸血量:{hp} 角色血量:{playerhp} {STR}</Text>
    </View>
  )
}

const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={style.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button
    //     style={style.buttom}
    //     title="Press me"
    //     onPress={() => Alert.alert('Simple Button pressed')}
    //   />
    
    // </View>
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="首頁" component={HomeScreen} />  
        
        <Stack.Screen name="Details" component={DetailsScreen} />  
        <Stack.Screen name="轉生" component={DetailsScreen2}/>      
        
        <Stack.Screen name="1-1" component={DetailsScreen3}/>
        <Stack.Screen name="1-2" component={DetailsScreen4}/>
        <Stack.Screen name="卡塔利克村" component={DetailsScreen5}/>
        <Stack.Screen name="村長" component={DetailsScreen5_1}/>
        <Stack.Screen name="農夫" component={DetailsScreen5_2}/>
        <Stack.Screen name="鐵匠" component={DetailsScreen5_3}/>
        <Stack.Screen name='村莊外' component={DetailsScreen6}/>
        <Stack.Screen name='迷宮05' component={DetailsScreen7}/>
        <Stack.Screen name='怪獸01' component={DetailsScreen8}/>
        <Stack.Screen name='迷宮02' component={DetailsScreen6_2}/>
        <Stack.Screen name='迷宮03' component={DetailsScreen6_3}/>
        <Stack.Screen name='迷宮04' component={DetailsScreen6_4}/>
        <Stack.Screen name='迷宮12' component={DetailsScreen7_2}/>
        <Stack.Screen name='迷宮13' component={DetailsScreen7_3}/>
        <Stack.Screen name='迷宮14' component={DetailsScreen7_4}/>
        <Stack.Screen name='迷宮15' component={DetailsScreen7_5}/>
        <Stack.Screen name='迷宮22' component={DetailsScreen8_2}/>
        <Stack.Screen name='迷宮23' component={DetailsScreen8_3}/>
        <Stack.Screen name='迷宮24' component={DetailsScreen8_4}/>
        <Stack.Screen name='迷宮25' component={DetailsScreen8_5}/>
        <Stack.Screen name='迷宮32' component={DetailsScreen9_2}/>
        <Stack.Screen name='迷宮33' component={DetailsScreen9_3}/>
        <Stack.Screen name='迷宮34' component={DetailsScreen9_4}/>
        <Stack.Screen name='迷宮35' component={DetailsScreen9_5}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
;
