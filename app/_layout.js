import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync();
export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold : require('./DMSans-Bold.ttf'),
    DMMedium: require('./DMSans-Medium.ttf'),
    DMRegular: require('./DMSans-Regular.ttf'),
    
  })
  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();

    }
  },[fontsLoaded])
  if(!fontsLoaded) return null;
  return <Stack onLayout = {onLayoutRootView} />;
  }