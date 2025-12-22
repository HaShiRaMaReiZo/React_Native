import { Tabs } from "expo-router";
import Iconicons from '@expo/vector-icons/Ionicons';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";


export default function TabsLayout(){
    const isGlass= false;

    if (isGlass) {
    return (
    <NativeTabs>
      <NativeTabs.Trigger name="chats">
        <Label>Chat</Label>
        <Icon sf="message.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>

        <NativeTabs.Trigger name="search" role="search">
            <Label>Search</Label>
        </NativeTabs.Trigger>

    </NativeTabs>
    );
}

    return         <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="chats"
                options={{
                    title: "Chat",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles" size={size} color={color} />
                    ),
                }}
            />
            
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    
}