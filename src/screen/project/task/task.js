/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import colors from '../../../utils/colors';
import Backcom from '../../../component/backcom';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../../utils/metrics';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: 1,
    task_name: 'Test',
    project_name: 'testing1',
    milestones: 'ws',
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
  {
    id: 2,
    task_name: 'Test',
    project_name: 'testing1',
    milestones: 'ws',
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
  {
    id: 3,
    task_name: 'Test',
    project_name: 'testing1',
    milestones: 'ws',
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
  {
    id: 4,
    task_name: 'Test',
    project_name: 'testing1',
    milestones: 'ws',
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
];

const Task = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.themecolor}}>
      <Backcom title="Tasks" navigation={props.navigation} />
      {/* <View style={style.serchview}>
        <Fontisto
          style={{}}
          name="search"
          color={colors.themecolor}
          size={20}
        />
        <TextInput
          keyboardType="default"
          placeholder="Search Here..."
          placeholderTextColor={colors.darkgray}
          style={style.searchtextin}
          onChangeText={() => {}}
        />
      </View> */}
      <FlatList
        data={data}
        contentContainerStyle={{paddingBottom: '16%'}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <LinearGradient
              animation="slideInLeft"
              colors={['#393E46', '#393E46', '#393E46']}
              style={{
                padding: '3%',
                borderRadius: 15,
                backgroundColor: '#393E46',
                marginVertical: '3%',
                paddingVertical: '5%',
                flexDirection: 'row',
                width: '90%',
                marginHorizontal: '5%',
                shadowColor: '#ffffff',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.17,
                shadowRadius: 2.54,
                elevation: 1,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: "red",
                    width: metrics.WIDTH * 0.9,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome
                      name="tasks"
                      size={20}
                      style={{
                        marginLeft: '13%',
                        marginRight: '6%',
                        color: '#00ADB5',
                      }}
                    />
                    <Text
                      style={{
                        color: '#00ADB5',
                        fontWeight: '600',
                        marginLeft: '2%',
                        fontSize: 16,
                      }}>
                      {item.task_name}
                    </Text>
                  </View>
                </View>
                {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: '3%',
                  marginHorizontal: '3%',
                  width: metrics.WIDTH * 0.83,
                }}>
                <View
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: colors.themecolor,
                  }}
                />
              </View> */}
                <View style={{marginTop: '6%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Project Name :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.project_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '2%',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Milestone :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.milestones}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '2%',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Start Date :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.start_date}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '2%',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      End Date :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.end_date}
                    </Text>
                  </View>
                </View>
                {/* <View
                  style={{
                    marginHorizontal: '4%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#009199',
                      width: metrics.WIDTH * 0.2,
                      paddingVertical: '1.7%',
                      borderRadius: 10,
                      borderWidth: 0.6,
                      borderColor: '#00ADB5',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={25}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#009199',
                      width: metrics.WIDTH * 0.35,
                      borderWidth: 0.4,
                      borderColor: '#00ADB5',
                      paddingVertical: '1.7%',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '6%',
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '500',
                        fontSize: 16,
                        marginRight: '8%',
                      }}>
                      Delete
                    </Text>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      size={25}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                </View> */}
                {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '6%',
                    marginRight: '5%',
                  }}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Edit')}>
                    <MaterialCommunityIcons
                      name="square-edit-outline"
                      color={colors.themecolor}
                      size={24}
                      style={{
                        backgroundColor: '#00ADB5',
                        paddingHorizontal: '4.5%',
                        paddingVertical: '3%',
                        borderRadius: 7,
                      }}
                    />
                    <Text
                      style={{
                        backgroundColor: '#00ADB5',
                        width: metrics.WIDTH * 0.23,
                        paddingVertical: '3%',
                        borderRadius: 7,
                        color: colors.black,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      EDIT
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        backgroundColor: '#00ADB5',
                        width: metrics.WIDTH * 0.23,
                        paddingVertical: '3%',
                        borderRadius: 7,
                        color: colors.black,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      DELETE
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        backgroundColor: '#00ADB5',
                        width: metrics.WIDTH * 0.23,
                        paddingVertical: '3%',
                        borderRadius: 7,
                        color: colors.black,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      REPORT
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </LinearGradient>
          );
        }}
      />
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('CreateTask', {
            item: '',
          })
        }
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00ADB5',
          width: 50,
          height: 50,
          //   width: metrics.WIDTH * 0.25,
          alignSelf: 'flex-end',
          padding: 10,
          borderRadius: 50,
          right: 20,
          position: 'absolute',
          bottom: 20,
        }}>
        <AntDesign name="plus" size={30} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const style = StyleSheet.create({
  textinputview: {
    // marginTop: metrics.HEIGHT * 0.02,
    marginHorizontal: '5%',
    elevation: 3,
    borderRadius: 5,
    backgroundColor: colors.white,
    height: metrics.HEIGHT * 0.07,
    justifyContent: 'center',
  },
  serchview: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 15,
    // height: metrics.HEIGHT * 0.07,
    // marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 8,
    marginHorizontal: '5%',
    marginBottom: '2%',
    background: 'transparent',
    paddingHorizontal: '3%',
    padding: 5,
    marginTop: 20,
  },
  searchtextin: {
    width: '80%',
    marginLeft: '5%',
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },
});
