import { Drawer } from "expo-router/drawer";

export default function RootLayout(){
    return (
    <Drawer>
        <Drawer.Screen name="(home)" options={{title: "Home"}} />
        <Drawer.Screen name="about" options={{title: "About"}} />
    </Drawer>
    );
};