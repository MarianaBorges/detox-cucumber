import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '../screens/Details';
import { HomeScreen } from '../screens/Home';
import { CountsScreen } from '../screens/Counts';
import { ImagesScreen } from '../screens/Images';
import { MemberListScreen } from '../screens/Members/MemberListScreen';
import AddMemberScreen from '../screens/Members/AddMemberScreen';
import EditMemberScreen from '../screens/Members/EditMemberScreen';
import ShowMemberScreen from '../screens/Members/ShowMemberScreen';
import { AddButton } from '../screens/Members/MemberListScreen';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();


function AppRoutes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Counts" component={CountsScreen} />
          <Stack.Screen name="Cities" component={ImagesScreen}/>

          <Stack.Screen 
            name="Members" 
            component={MemberListScreen} 
            options={({ navigation }) => ({
              title: 'Members',
              headerTitleAlign: 'center',
              headerRight: () => (
                <AddButton navigate={() => navigation.navigate('AddMember')} />
              ),
            })}
          />

          <Stack.Screen name="AddMember" component={AddMemberScreen}/>
          <Stack.Screen name="EditMember" component={EditMemberScreen}/>
          <Stack.Screen name="ShowMember" component={ShowMemberScreen}/>
        </Stack.Navigator>
    );
}

export { AppRoutes }