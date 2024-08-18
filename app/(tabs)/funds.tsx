import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Colors } from '@/constants/Colors'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import CallBackAppBar from '@/components/CallBackAppBar'
import SearchBar from '@/components/SearchBar'
import { Ionicons } from '@expo/vector-icons'
import { Button, Icon, TouchableRipple } from 'react-native-paper'
import TileListCard from '@/components/TileListCard'

const Funds = () => {
  const router = useRouter();

  const mapList = [
    {
      title: "National Bank of Pakistan (NBP)",
      imageSource: "https://play-lh.googleusercontent.com/difHQcn76tzvEPaCUb7MGhNJF0aTMJdt6hP1EG5lc1R2FxBGId8trq_46ep1faZrGOQP",
      returnRate: "+20.20%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for NBP'),
    },
    {
      title: "Habib Bank Limited (HBL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLc2ZZ7HzfKmeYjtLs13AAY9jCT2olEYMJxsbnbxaJHqOPqI0QfWvrsM7M2n4nH9mSVps&usqp=CAU",
      returnRate: "+18.75%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for HBL'),
    },
    {
      title: "United Bank Limited (UBL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CD5xeSepduhdoZQi8kK_5AbuM575VZF4dg&s",
      returnRate: "+15.50%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for UBL'),
    },
    {
      title: "Meezan Bank Limited (MBL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7DV9cb_Fz42nq_AhQx0vjG_VwEGEhjmT9A&s",
      returnRate: "+22.30%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for MBL'),
    },
    {
      title: "Bank Alfalah (BAFL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuO2aumQRQFmXwNBy0v9Xedc3imVG_S4Lrw&s",
      returnRate: "+19.40%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for BAFL'),
    },
    {
      title: "Askari Bank Limited (AKBL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuO2aumQRQFmXwNBy0v9Xedc3imVG_S4Lrw&s",
      returnRate: "+17.10%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for AKBL'),
    },
    {
      title: "Faysal Bank Limited (FBL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuO2aumQRQFmXwNBy0v9Xedc3imVG_S4Lrw&s",
      returnRate: "+16.80%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for FBL'),
    },
    {
      title: "Standard Chartered Bank (SCB)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuO2aumQRQFmXwNBy0v9Xedc3imVG_S4Lrw&s",
      returnRate: "+14.90%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for SCB'),
    },
    {
      title: "Allied Bank Limited (ABL)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuO2aumQRQFmXwNBy0v9Xedc3imVG_S4Lrw&s",
      returnRate: "+18.25%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for ABL'),
    },
    {
      title: "MCB Bank Limited (MCB)",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuO2aumQRQFmXwNBy0v9Xedc3imVG_S4Lrw&s",
      returnRate: "+20.50%",
      isPositive: true,
      onPress: () => console.log('View Details clicked for MCB'),
    },
  ];


  return (
    <ScreenWrapper backgroundColor={Colors.colors.white}>
      <CallBackAppBar title='Mutual Funds' />

      <SafeAreaView style={{ flex: 1, paddingHorizontal: wp(5) }}>
        <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', gap: wp(2), flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ width: wp(70) }}>
              <SearchBar />
            </View>
            <TouchableRipple children={<Ionicons name="filter" size={20} color="black" />}
              style={{
                width: wp(14), height: wp(15),
                backgroundColor: Colors.colors.grey,
                paddingVertical: hp(1), borderRadius: wp(2),
                justifyContent: 'center', alignItems: 'center'
              }}
              rippleColor={Colors.colors.grey}
              onPress={() => router.back()}>
            </TouchableRipple>
          </View>

          <View style={{ width: '100%', gap: wp(2), flex: 1, paddingVertical: hp(2) }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total Funds (63)</Text>
          </View>

          {mapList.map((item, index) => (
            <TileListCard
              key={index}
              title={item.title}
              imageSource={item.imageSource}
              returnRate={item.returnRate}
              isPositive={item.isPositive}
              onPress={item.onPress}
            />
          ))}

        </ScrollView>
      </SafeAreaView>
    </ScreenWrapper>
  )
}

export default Funds

const styles = StyleSheet.create({})