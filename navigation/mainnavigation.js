import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./routes";
import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import MessageScreen from "../screens/MessageScreen";
import ChatScreen from "../screens/chatScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "../screens/notificationScreen";
import SearchScreen from "../screens/searchScreen";
import Icon from "react-native-vector-icons/Ionicons"; 
import { SafeAreaView } from "react-native";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomNavigation = createBottomTabNavigator();


const BottomNavigationBar = () => {
   return (
      <SafeAreaView style={{
         flex: 1,
         backgroundColor: "#f0f0f0",
      }}>
         <BottomNavigation.Navigator
         initialRouteName={Routes.HomeScreen}
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               // Define icons for each route
               let iconName;

               if (route.name === Routes.HomeScreen) {
                  iconName = focused ? "home" : "home-outline";
               } else if (route.name === Routes.NotificationScreen) {
                  iconName = focused ? "notifications" : "notifications-outline";
               } else if (route.name === Routes.SearchScreen) {
                  iconName = focused ? "search" : "search-outline";
               }

               // Return the icon
               return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#6200ee", // Active icon color
            tabBarInactiveTintColor: "gray", // Inactive icon color
            tabBarStyle: {
               position: "absolute", // Makes the bar float
               bottom: 20, // Distance from the bottom
               left: 20, // Distance from the left
               right: 20, // Distance from the right
               height: 60, // Adjusted height
               borderRadius: 30, // Rounded corners
               backgroundColor: "black", // Background color
               elevation: 5, // Shadow for Android
               shadowColor: "#000", // Shadow for iOS
               shadowOffset: { width: 0, height: 3 }, // Shadow offset
               shadowOpacity: 0.2, // Shadow opacity
               shadowRadius: 5, // Shadow blur radius
               borderWidth: 0, // Avoid border effects
            },
            tabBarLabelStyle: {
               fontSize: 12, // Font size of labels
               fontWeight: "600", // Bold font
            },
         })}
      >
         <BottomNavigation.Screen
            name={Routes.HomeScreen}
            component={HomeScreen}
            options={{ headerShown: false, tabBarLabel: "Home" }}
         />
         <BottomNavigation.Screen
            name={Routes.NotificationScreen}
            component={NotificationScreen}
            options={{ headerShown: false, tabBarLabel: "Notifications" }}
         />
         <BottomNavigation.Screen
            name={Routes.SearchScreen}
            component={SearchScreen}
            options={{ headerShown: false, tabBarLabel: "Search" }}
         />
      </BottomNavigation.Navigator>
      </SafeAreaView>
   );
};

const Drawernavigation = () => {
   return(
    <Drawer.Navigator screenOptions={{headerShown:true}}>
       <Drawer.Screen name={Routes.HomeScreen} component={HomeScreen}/>
       <Drawer.Screen name={Routes.ProfileScreen} component={ProfileScreen}/>
    </Drawer.Navigator>
   )
}



const MainNavigation = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Bottomnavigation" component={BottomNavigationBar}/>
           <Stack.Screen name="Drawer" component={Drawernavigation} />
           <Stack.Screen name={Routes.MessageScreen} component={MessageScreen}/>
           <Stack.Screen name={Routes.ChatScreen} component={ChatScreen}/>
       </Stack.Navigator>
    );
} 


export default MainNavigation;

