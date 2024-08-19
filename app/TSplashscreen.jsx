import { Image, StyleSheet, View, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '../helpers/common';
import { useRouter } from 'expo-router';
import { getTokenAndUser } from '@/utils/storage';

const TSplashscreen = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Added state to manage loading

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const data = await getTokenAndUser();

        console.log('Checking auth status...', data);

        if (data && data.token) {
          console.log('User already logged in');
          router.push('/HomePage');
        } else {
          console.log('User not logged in');
          router.replace('/Login');
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        router.replace('/Login');
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      checkAuthStatus();
    }, 3000)
  }, [router]);

  if (isLoading) {
    return (
      <ScreenWrapper backgroundColor={Colors.colors.blue}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/images/react-logo.png')}
          />
        </View>
      </ScreenWrapper>
    );
  }

  return null;
};

export default TSplashscreen;

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
});
