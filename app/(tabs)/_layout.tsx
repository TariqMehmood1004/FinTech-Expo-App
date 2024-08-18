import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: true,
            tabBarShowLabel: true,
            tabBarStyle: { backgroundColor: 'white', height: 60 },
            tabBarHideOnKeyboard: true,
            tabBarIconStyle: {
                display: 'flex',
                width: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
            },
            tabBarActiveTintColor: Colors.colors.black
        }}>
            <Tabs.Screen
                name="HomePage"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size = 20 }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: Colors.colors.black,
                    tabBarInactiveTintColor: Colors.colors.dark,
                    tabBarStyle: {
                        backgroundColor: Colors.colors.white,
                        height: 60,
                        borderTopWidth: 0,
                        elevation: 10,
                        shadowColor: Colors.colors.black,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.3,
                        shadowRadius: 10,
                    },
                }}
            />
            <Tabs.Screen
                name="funds"
                options={{
                    title: 'Funds',
                    headerShown: false,
                    tabBarIcon: ({ color, size = 20 }) => (
                        <Ionicons name="wallet" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    title: 'Add',
                    headerShown: false,
                    tabBarIcon: ({ color, size = 20 }) => (
                        <Ionicons name="add-circle" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    headerShown: false,
                    tabBarIcon: ({ color, size = 20 }) => (
                        <Ionicons name="time" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="withdraw"
                options={{
                    title: 'Withdraw',
                    headerShown: false,
                    tabBarIcon: ({ color, size = 20 }) => (
                        <Ionicons name="cash" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>

    )
}

export default _layout

const styles = StyleSheet.create({})