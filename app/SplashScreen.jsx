import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { Colors } from '@/constants/Colors'
import {wp, hp} from '../helpers/common';
import { useRouter } from 'expo-router';
import {routes} from '../Routes/routes';
import { StatusBar } from 'react-native';

const Splashscreen = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push(routes.login, {}, { transition: 'fade' })
        }, 3000)
    })
  return (
      <ScreenWrapper backgroundColor={Colors.colors.blue}>
          <StatusBar style="light" />
          <View style={styles.container}>
              <Image
                  resizeMode='contain'
                  style={ styles.image}
                  source={require('../assets/images/react-logo.png')}
              />
          </View>
    </ScreenWrapper>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(4),
    },
    image: {
        width: wp(50),
        height: hp(50),
    },
})