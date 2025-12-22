import { Tabs } from "expo-router";
import Iconicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout(){
    return <Tabs>
        <Tabs.Screen name="index" options={{title: "Chat" , tabBarIcon: ({color,size}) => (
            <Iconicons name="chatbubbles-outline" size={size} color={color} />
        )}} />
        <Tabs.Screen name="setting" options={{title: "Settings"}} />
    </Tabs>;
}