import {StatusBar, StyleSheet} from 'react-native';



const styles = StyleSheet.create({

    container: {

    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    },
    item: {

      flex: 1,

      flexDirection: 'row',

      backgroundColor: '#00ffff',

      padding: 8,

      marginVertical: 8,

      marginHorizontal: 16,

    },

    title: {
      marginTop:200,
      textAlign: 'center',
      marginVertical: 8,
    },
    buttom:{
        textAlign: 'center',
        marginVertical: 8,
    },
    top:{
      width:"90%",
      height:"30%",
      alignSelf:"center",
      marginTop:30,

    },
    top1:{
      width:"70%",
      height:"30%",
      alignSelf:"center",
      marginTop:-200,
      
    },
    //故事字體
    story_text:{
      padding:20,
      textAlign:"center",
      justifyContent:"center",
      fontSize:20,
    },
    viallage:{
      padding:50,
      textAlign:"center",
      fontSize:30,
      

    },
    //圖片
    img主線:{
      width:'90%',
      height:"50%",
      alignSelf:"center",
      marginTop:0,
      resizeMode:"center"
    },
    img支線:{
      width:'45%',
      height:'19%',
      alignSelf:"center",
      padding:5,
      resizeMode:"stretch",
    //  marginRight:200,
  
    },
    img特:{
      width:'50%',
      height:'50%',
      alignSelf:"center",
    },
    img小:{
      width:100,
      height:100,
      padding:0,
      resizeMode:"stretch",
    },
    imgnpc01:{
      width:50,
      height:80,
      padding:0,
      top:50,
     alignSelf:'center',
      resizeMode:"stretch",
      position: 'absolute'
    },
    imgnpc02:{
      width:50,
      height:80,
      padding:0,
      top:150,
      left:30,
    
      resizeMode:"stretch",
      position: 'absolute'
    },
    imgnpc03:{
      width:50,
      height:80,
      padding:0,
      top:150,
      right:30,
    
      resizeMode:"stretch",
      position: 'absolute'
    },
    imghouse:{
      width:100,
      height:130,
      padding:0,
      top:-50,
      resizeMode:"stretch",
      alignSelf:'center',
      position: 'absolute'
    },
    imgtree01:{
      width:80,
      height:130,
      padding:0,
      top:-50,
      right:60,
      resizeMode:"stretch",
     
      position: 'absolute'
    },
    imgtree02:{
      width:80,
      height:130,
      padding:0,
      top:-50,
      left:60,
      resizeMode:"stretch",
      
     
      position: 'absolute'
    },
    imgwater:{
      width:50,
      height:80,
      padding:0,
      top:280,
      left:70,
      resizeMode:"stretch",
      
     
      position: 'absolute'
    },
    imgarrow_down:{
     width:100,
     height:80,
    alignSelf:'center',
    bottom:-500,
      resizeMode:"stretch",
      
      
     
      position: 'absolute'
    },
    imgarrow_down01:{
      width:80,
      height:60,
     alignSelf:'center',
     bottom:-650,
       resizeMode:"stretch",
       
       
      
       position: 'absolute'
     },
     imgarrow_top:{
      width:80,
      height:60,
     alignSelf:'center',
     top:20,
       resizeMode:"stretch",
       position: 'absolute'
     },
     imgarrow_left:{
      width:60,
      height:80,
     alignSelf:'center',
      top:280,
      left:0,
       resizeMode:"stretch",
       position: 'absolute'
     },
     imgarrow_right:{
      width:60,
      height:80,
     alignSelf:'center',
 top:280,
     right:0,
       resizeMode:"stretch",
       position: 'absolute'
     },
     
     imglamb:{
      width:70,
      height:70,
     alignSelf:'center',
     top:30,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },
     imglamb_:{
      width:70,
      height:70,
     alignSelf:'center',
     top:30,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },
     imglamb01:{
      width:70,
      height:70,
     alignSelf:'center',
     top:80,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },
     imglamb_01:{
      width:70,
      height:70,
     alignSelf:'center',
     top:80,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb02:{
      width:70,
      height:70,
     alignSelf:'center',
     top:130,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_02:{
      width:70,
      height:70,
     alignSelf:'center',
     top:130,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb03:{
      width:70,
      height:70,
     alignSelf:'center',
     top:180,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_03:{
      width:70,
      height:70,
     alignSelf:'center',
     top:180,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb04:{
      width:70,
      height:70,
     alignSelf:'center',
     top:230,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_04:{
      width:70,
      height:70,
     alignSelf:'center',
     top:230,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb05:{
      width:70,
      height:70,
     alignSelf:'center',
     top:280,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_05:{
      width:70,
      height:70,
     alignSelf:'center',
     top:280,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb06:{
      width:70,
      height:70,
     alignSelf:'center',
     top:330,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_06:{
      width:70,
      height:70,
     alignSelf:'center',
     top:330,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb07:{
      width:70,
      height:70,
     alignSelf:'center',
     top:380,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_07:{
      width:70,
      height:70,
     alignSelf:'center',
     top:380,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb08:{
      width:70,
      height:70,
     alignSelf:'center',
     top:430,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb_08:{
      width:70,
      height:70,
     alignSelf:'center',
     top:430,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imglamb09:{
      width:70,
      height:70,
     alignSelf:'center',
     top:480,
     left:20,
       resizeMode:"stretch",
       position: 'absolute'
     },
     imglamb_09:{
      width:70,
      height:70,
     alignSelf:'center',
     top:480,
     right:20,
       resizeMode:"stretch",
       position: 'absolute'
     },

     imgmonster01:{
      width:400,
      height:400,
     alignSelf:'center',
    top:150,
    left:-50,
     
       resizeMode:"stretch",
       position: 'absolute'
     },
     imgmonster01_1:{
      width:400,
      height:400,
     alignSelf:'center',
     top:50,
       resizeMode:"stretch",
       position: 'absolute'
     },
    page:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

  

  });

export default styles;