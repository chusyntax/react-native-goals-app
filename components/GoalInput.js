import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image}from "react-native";

function GoalInput(props) {
      const [enteredText, setEnteredText] = useState('');
      function goalInputHandler(enteredText){
        setEnteredText(enteredText);
      }

      function addGoalHandler(){
        props.addGoalHandler(enteredText);
        setEnteredText('');
      }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image source={require('../assets/images/goal.png')} style={styles.image}/>
      <TextInput placeholder="Your course goals" style={styles.TextInput} onChangeText={goalInputHandler} value={enteredText}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add New Goal" onPress={addGoalHandler} color="#b180f0"/>
        </View>
    <View style={styles.button}>
      <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>

    </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
       backgroundColor: '#311b6b',
    },
    image:{
      width: 100,
      height: 100,
      margin: 20,
  },
    TextInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:"#e4d0ff",
        width: '100%',
        color:"#120438",
        padding: 10,
        borderRadius: 5,
        marginRight: 8
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 16,
    },
   button:{
        width: '40%',
        marginHorizontal: 8,
    },
 
});