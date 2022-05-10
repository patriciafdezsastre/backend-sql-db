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
import Admin from './src/views/Admin';
import BikeInfo from './src/views/BikeInfo';
import PatineteInfo from './src/views/PatineteInfo';
import modificarTarifas from './src/views/modificarTarifas';
import addVMP from './src/views/addVMP';
import deleteVMP from './src/views/deleteVMP';
import deletingVMP from './src/views/deletingVMP';
import verify from './src/views/verify';
import verifying from './src/views/verifying';

const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="BikeInfo" component={BikeInfo} />
          <Stack.Screen name="PatineteInfo" component={PatineteInfo} />
          <Stack.Screen name="modificarTarifas" component={modificarTarifas} />
          <Stack.Screen name="addVMP" component={addVMP} />
          <Stack.Screen name="deleteVMP" component={deleteVMP} />
          <Stack.Screen name="deletingVMP" component={deletingVMP} />
          <Stack.Screen name="verify" component={verify} />
          <Stack.Screen name="verifying" component={verifying} />
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
