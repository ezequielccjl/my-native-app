import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import ButtonCamera from './ButtonCamera'

const Camara = () => {

  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const cameraRef = useRef(null);

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status==='granted')
    })()
  }, [])

  if (hasCameraPermission === false){
    return <Text>No access to camera</Text>
  }

  const takePicture = async ()=>{
    if(cameraRef){
      try{
        const data = await cameraRef.current.takePictureAsync()
        console.log(data)
        setImage(data.uri)
      }catch(e){
        console.log(e)
      }
    }
  }

  const saveImage = async () =>{
    if(image){
      try{
        await MediaLibrary.createAssetAsync(image);
        alert('Se guardo la foto papu!');
        setImage(null);
      }catch(e){
        console.log(e)
      }
    }
  }

  return (
    <View style={styles.camaraContainer}>
      {
        !image ?
        <Camera
        style={styles.camara}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:30}}>
          <ButtonCamera icon={'retweet'} onPress={()=>{
            setType(type === CameraType.back ? CameraType.front : CameraType.back)
          }}/>
          <ButtonCamera icon={'flash'} onPress={()=>{
            setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
          }}/>
        </View>
      </Camera>
      :
      <Image source={{uri:image}} style={styles.camara}></Image>
      }
      {
        image ?
        <View>
            <ButtonCamera title={'Re-take'} icon={'retweet'} onPress={setImage(null)}/>
            <ButtonCamera title={'Save'} icon={'check'} onPress={saveImage}/>
        </View> 
        :
        <ButtonCamera title='Sacar foto' icon='camera' onPress={takePicture}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  camaraContainer:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:'center'
  },
  camara:{
    flex:1,
  },
  textoCam:{
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:'white'
  }
})

export default Camara