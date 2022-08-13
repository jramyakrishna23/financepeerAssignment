import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import SaveTestData from "./Screens/SaveTestData";
import GetTestData from "./Screens/GetTestData";

import APIData from "./Screens/APIData";
import CameraAccess from "./Screens/CameraAccess";
import LocationAccess from "./Screens/LocationAccess";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'API Data') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'ios-star-half-outline' : 'ios-star-outline';
            } else if (route.name === 'Save Data') {
              iconName = focused
                ? 'ios-download-outline'
                : 'ios-download-outline';
            } else if (route.name === 'Location') {
              iconName = 'ios-chatbox-outline';
            } else if (route.name === 'Save Test Data') {
              iconName = focused
                ? 'ios-download-outline'
                : 'ios-download-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#8a19e6",
          tabBarInactiveTintColor: "#8a19e6"
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          activeColor="red"
          inactiveColor="white"
          activeBackgroundColor="green"
        />
        <Tab.Screen name="Camera" component={CameraAccess} />
        <Tab.Screen name="Location" component={LocationAccess} />
        <Tab.Screen name="Save Test Data" component={SaveTestData} />
        <Tab.Screen name="Display Test Data" component={GetTestData} />
        <Tab.Screen name="API Data" component={APIData} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
