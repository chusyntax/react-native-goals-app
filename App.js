import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function cancelAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,{text: enteredText, id: Math.random().toString()}]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    
  }

  return (
    <>
    <StatusBar style="light" />
   <View style={styles.appContainer}>
    <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
  { modalIsVisible && <GoalInput onCancel={cancelAddGoalHandler} addGoalHandler={addGoalHandler} visible={modalIsVisible}/>}
    <View>
      <FlatList alwaysBounceVertical={true} data={courseGoals} renderItem={(itemData) =>{
        return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
      }}
      keyExtractor={(item, index) => {return item.id}}
      />
    </View>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
 appContainer:{
    paddingTop: 50,
    paddingHorizontal:16,
 },
 inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
 },
 TextInput:{
  borderWidth: 1,
  borderColor: '#cccccc',
  width: '70%',
  padding: 10,
  borderRadius: 5,
  marginRight: 8
 },


});
