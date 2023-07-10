import React, {useState} from 'react';
import { 
  Keyboard,
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import Task from './components/Task';

const App = () => {

  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
 
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }
  
  const completeTask = (index) => {
    const taskItem = [...taskList];
    taskItem.splice(index, 1);
    setTaskList(taskItem);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          <Octicons name="tasklist" size={24} color="black" /> Todos
        </Text>
        <View style={styles.taskItems}>
          {
            taskList.map((items, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={items} />
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add task'} value={task} onChangeText={text => setTask(text)} />
        
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addButton}> 
          <MaterialIcons name="add-task" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  taskItems: {
    marginTop: 30,
  },
  writeWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 60,
  },
  input: {
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000',
  },
});

export default App;