import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
    TestComponent,
    TestLiveComponent,
} from '@appliedrec/react-native-plugin-ver-id';
import {Text, TouchableHighlight, View} from 'react-native';
import {Styles} from './styles';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View style={Styles.container}>
            <TouchableHighlight
                style={Styles.button}
                onPress={() => {
                    navigation.navigate('autoTests');
                }}>
                <Text style={Styles.buttonText}>Automatic tests</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={Styles.button}
                onPress={() => {
                    navigation.navigate('liveTests');
                }}>
                <Text style={Styles.buttonText}>Live tests</Text>
            </TouchableHighlight>
        </View>
    );
}

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Testing Menu'}}
                />
                <Stack.Screen name="autoTests" component={TestComponent} />
                <Stack.Screen name="liveTests" component={TestLiveComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
