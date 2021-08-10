import React from 'react'
import { Text, View, Button } from "react-native";

function ReviewDetails({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ReviewDetails Screen</Text>
        <Button 
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

export default ReviewDetails;