import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";

export default function ChatLayout(){
    return<Stack>
        <Stack.Screen name="index" 
        options={({navigation}) => ({
            title: "Chats",
            headerLargeTitle: true,
            headerTransparent: true,
            headerLeft: () => (
                <Ionicons 
                onPress={()=> navigation.openDrawer()}
                name="menu-outline" 
                className="px-1" 
                size={30} color="gray" />
            ),
            headerRight: () => (
                <Ionicons 
                onPress={()=> navigation.openDrawer()}
                name="add" 
                className="px-1" 
                size={30} color="gray" />
            ),
            })} />
    </Stack>;
}