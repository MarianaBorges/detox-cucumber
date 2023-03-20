import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '../screens/Details';
import { HomeScreen } from '../screens/Home';
import { CountsScreen } from '../screens/Counts';

const Stack = createNativeStackNavigator();


function AppRoutes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Counts" component={CountsScreen} />
        </Stack.Navigator>
    );
}

export { AppRoutes }