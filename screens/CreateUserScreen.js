import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleChangeText = (name, value) =>{
        setState({...state, [name]: value})

    };

    const SaveNewUser = async () => {
        if(state.name === ''){
            alert('Please provide a name')
        }
        else{
           try{
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
           props.navigation.navigate('UsersList');
           }catch(error){
               console.log(error)
           }
        }

    }

    return (
       <ScrollView style={styles.container}>
           <View style={styles.inputGroup}>
          <TextInput placeholder='Nome do usuário' onChangeText={(value) => handleChangeText('name', value)  } />
          </View>
          <View style={styles.inputGroup}>
          <TextInput placeholder='Email' onChangeText={(value) => handleChangeText('email', value)  } />
          </View>
          <View style={styles.inputGroup}>
          <TextInput placeholder='Telefone' onChangeText={(value) => handleChangeText('phone', value)  } />
          </View>
          <View>
              <Button title="Salvar Usuário" onPress={()=> SaveNewUser()}  />
          </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})


export default CreateUserScreen