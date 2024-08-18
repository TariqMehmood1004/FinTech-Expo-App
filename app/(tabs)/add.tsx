import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

const Add = () => {
  return (
    <ScreenWrapper backgroundColor={'white'}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Add

const styles = StyleSheet.create({})