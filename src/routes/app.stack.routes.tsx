import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '../screens/Details';
import { HomeScreen } from '../screens/Home';

const Stack = createNativeStackNavigator();


function AppRoutes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export { AppRoutes }