import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/views/Signup';
import Home from './src/views/Home';
import LogIn from './src/views/Login';
import Map from './src/views/Map';
import User from './src/views/User';
import EditUser from './src/views/EditUser';
import Bike from './src/views/Bike';
import Patinete from './src/views/Patinete';
import malAparcado from './src/views/malAparcado';
import QR from './src/views/QR';
import encurso from './src/views/encurso';
import resumen from './src/views/resumen';
import noDisponible from './src/views/noDisponible';
import Record from './src/views/Record';
import ListaViajes from './src/views/ListaViajes';
import Admin from './src/views/Admin';
import BikeInfo from './src/views/BikeInfo';
import PatineteInfo from './src/views/PatineteInfo';
import FotoEnviada from './src/views/FotoEnviada';

const Stack = createNativeStackNavigator();
//<Stack.Screen name="Record" component={Record} />
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName=" Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="EditUser" component={EditUser} />
          <Stack.Screen name="Bike" component={Bike} />
          <Stack.Screen name="Patinete" component={Patinete} />
          <Stack.Screen name="malAparcado" component={malAparcado} />
          <Stack.Screen name="QR" component={QR} />
          <Stack.Screen name="encurso" component={encurso} />
          <Stack.Screen name="resumen" component={resumen} />
          <Stack.Screen name="noDisponible" component={noDisponible} />
          <Stack.Screen name="Record" component={Record} />
          <Stack.Screen name="ListaViajes" component={ListaViajes} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="BikeInfo" component={BikeInfo} />
          <Stack.Screen name="PatineteInfo" component={PatineteInfo} />
          <Stack.Screen name="FotoEnviada" component={FotoEnviada} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
