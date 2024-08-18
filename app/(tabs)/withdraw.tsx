import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

const Withdraw = () => {
  return (
    <ScreenWrapper backgroundColor={'white'}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Withdraw</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Withdraw

const styles = StyleSheet.create({})