import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

const History = () => {
  return (
    <ScreenWrapper backgroundColor={'white'}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>History</Text>
      </View>
    </ScreenWrapper>
  )
}

export default History

const styles = StyleSheet.create({})