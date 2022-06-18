// install react-native-dropdown-picker
// install @react-navigation/native
// install @react-navigation/stack
// install @expo/vector-icons

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
let isFirst = true;
let isLoadFirst = true;
const Stack = createStackNavigator();
let currLabelKey = 0;
let currKey = 0;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Shopping List" component={MainScreen} />
        <Stack.Screen name="Edit Category" component={EditCategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Loading({ navigation }) {
  const [_labels, setLabels] = useState([{ label: 'All', value: 0 }]);
  const [_datalist, setDatalist] = useState([]);

  if (isLoadFirst) {
    getItemFromAsync('currKey').then((res) => {
      if (res !== null) currKey = res;
      // get Item
      for (let i = 0; i <= currKey; i++) {
        getItemFromAsync('i' + i).then((res) => {
          if (res !== null) _datalist.push(res);
        });
      }
    });
    getItemFromAsync('currLabelKey').then((res) => {
      if (res !== null) currLabelKey = res;
      // get Category
      for (let i = 0; i <= currLabelKey; i++) {
        getItemFromAsync('l' + i).then((res) => {
          if (res !== null) _labels.push(res);
        });
      }
    });

    isLoadFirst = false;
  }

  setTimeout(() => {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'Shopping List',
          params: { datalist: _datalist, labels: _labels },
        },
      ],
    });
  }, 1000);

  return (
    <View style={[styles.centeredView, { backgroundColor: 'skyblue' }]}>
      <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>
        Shopping List Application
      </Text>
    </View>
  );
}

function MainScreen({ route, navigation }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState(0);
  const [labels, setLabels] = useState(route.params.labels);

  const [openCategory, setOpenCategory] = useState(false);
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  const [addItemVisible, setAddItemVisible] = useState(false);
  const [editItemVisible, setEditItemVisible] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editOpenCategory, setEditOpenCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState(null);

  const [extra, setExtra] = useState(false);
  const [datalist, setDatalist] = useState(route.params.datalist);
  const [showList, setShowList] = useState([]);

  const [addItemVal, setAddItemVal] = useState('');
  const [addItemPrice, setAddItemPrice] = useState('');
  const [editItemVal, setEditItemVal] = useState('');
  const [editItemPrice, setEditItemPrice] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  function calculateTotal(id) {
    let total = 0;
    if (id === 0) {
      datalist.forEach((data) => {
        if (!data.checked) total += Number(data.price);
      });
    } else {
      datalist.forEach((data) => {
        if (data.labelId === id && !data.checked) total += Number(data.price);
      });
    }

    setTotalPrice(total);
    setExtra(!extra);
  }

  function doFilter(id) {
    const newList = [];

    if (id === 0) {
      datalist.forEach((data) => {
        newList.push(data);
      });
    } else {
      datalist.forEach((data) => {
        if (data.labelId === id) newList.push(data);
      });
    }
    setShowList(newList);
  }

  if (isFirst) {
    doFilter(filter);
    calculateTotal(filter);
    isFirst = false;
  }

  return (
    <View style={styles.container}>
      {/* add item modal */}
      <Modal animationType="none" transparent={true} visible={addItemVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.text_input}
              onChangeText={setAddItemVal}
              value={addItemVal}
              placeholder="Item Name"
            />
            <TextInput
              style={styles.text_input}
              onChangeText={setAddItemPrice}
              value={addItemPrice}
              placeholder="Price"
              keyboardType="number-pad"
            />
            <DropDownPicker
              style={{
                backgroundColor: 'white',
                borderColor: 'skyblue',
              }}
              containerStyle={{ width: 150 }}
              dropDownContainerStyle={{
                margin: 10,
                backgroundColor: 'white',
                borderColor: 'skyblue',
              }}
              open={openCategory}
              value={category}
              items={labels}
              setOpen={setOpenCategory}
              setValue={setCategory}
              setLabels={setLabels}
              placeholder="All"
              onChangeValue={(item) => {
                setCategoryId(item.id);
              }}
            />
            <View style={styles.modal_button}>
              <TouchableOpacity
                onPress={() => {
                  setAddItemVal(null);
                  setAddItemPrice(null);
                  setCategory(null);
                  setAddItemVisible(!addItemVisible);
                }}
              >
                <Text style={styles.button_text}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  currKey++;
                  const newData = {
                    key: currKey,
                    name: addItemVal,
                    price: Number(addItemPrice),
                    labelId: Number(category),
                  };
                  setItemToAsync('currKey', currKey);
                  setItemToAsync('i' + currKey, newData);
                  datalist.push(newData);
                  doFilter(filter);
                  calculateTotal(filter);
                  setAddItemVisible(!addItemVisible);
                  setAddItemVal(null);
                  setAddItemPrice(null);
                  setCategory(null);
                }}
              >
                <Text style={styles.button_text}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* edit item modal */}
      <Modal animationType="none" transparent={true} visible={editItemVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.text_input}
              onChangeText={setEditItemVal}
              value={editItemVal}
            />
            <TextInput
              style={styles.text_input}
              onChangeText={setEditItemPrice}
              value={editItemPrice.toString()}
              keyboardType="number-pad"
            />
            <DropDownPicker
              style={{
                backgroundColor: 'white',
                borderColor: 'skyblue',
              }}
              containerStyle={{ width: 150 }}
              dropDownContainerStyle={{
                margin: 10,
                backgroundColor: 'white',
                borderColor: 'skyblue',
              }}
              open={editOpenCategory}
              value={editCategory}
              items={labels}
              setOpen={setEditOpenCategory}
              setValue={setEditCategory}
              setLabels={setLabels}
              placeholder="All"
              onChangeValue={(item) => {
                setEditCategoryId(item);
              }}
            />
            <View style={styles.modal_button}>
              <TouchableOpacity
                onPress={() => {
                  setEditItemVisible(!editItemVisible);
                }}
              >
                <Text style={styles.button_text}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  editItem.name = editItemVal;
                  editItem.price = editItemPrice;
                  editItem.labelId = editCategoryId;
                  calculateTotal(filter);
                  setEditItemVisible(!editItemVisible);
                  setItemToAsync('i' + editItem.key, editItem);
                }}
              >
                <Text style={styles.button_text}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Banner */}
      <View style={styles.control_view}>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => {
            setAddItemVisible(true);
          }}
        >
          <Ionicons name="ios-add-circle" size={30} color="black" />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DropDownPicker
            style={{
              margin: 10,
              backgroundColor: 'white',
              borderColor: 'skyblue',
            }}
            containerStyle={{ width: 150 }}
            dropDownContainerStyle={{
              margin: 10,
              backgroundColor: 'white',
              borderColor: 'skyblue',
            }}
            open={openFilter}
            value={filter}
            items={labels}
            setOpen={setOpenFilter}
            setValue={setFilter}
            setLabels={setLabels}
            placeholder="All"
            onChangeValue={() => {
              doFilter(filter);
              calculateTotal(filter);
            }}
          />

          {/* Move to Edit Category */}
          <TouchableOpacity
            style={{ padding: 5, margin: 10 }}
            onPress={() => {
              navigation.navigate('Edit Category', {
                categories: labels,
                lastCategoryKey: currLabelKey,
              });
            }}
          >
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* List */}
      <View style={styles.list_view}>
        <FlatList
          data={showList}
          extraData={extra}
          renderItem={({ item }) => {
            const ifChecked = item.checked
              ? styles.item_checked
              : styles.item_unchecked;
            return (
              <View style={styles.item}>
                <Text
                  style={[styles.item_text, ifChecked]}
                  onPress={() => {
                    item.checked = !item.checked;
                    calculateTotal(filter);
                    setExtra(!extra);
                    setItemToAsync('i' + item.key, item);
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={[styles.item_price, ifChecked]}
                  onPress={() => {
                    item.checked = !item.checked;
                    calculateTotal(filter);
                    setExtra(!extra);
                    setItemToAsync('i' + item.key, item);
                  }}
                >
                  {item.price}
                </Text>
                <FontAwesome5
                  style={styles.item_icon}
                  name="edit"
                  onPress={() => {
                    setEditItem(item);
                    setEditItemVal(item.name);
                    setEditItemPrice(item.price.toString());
                    setEditItemVisible(!editItemVisible);
                    setExtra(!extra);
                  }}
                />
                <FontAwesome5
                  style={styles.item_icon}
                  name="trash"
                  onPress={() => {
                    datalist.splice(datalist.indexOf(item), 1);
                    showList.splice(showList.indexOf(item), 1);
                    setDatalist(datalist);
                    setShowList(showList);
                    removeItemFromAsync('i' + item.key).then(() => {});
                    setExtra(!extra);
                    calculateTotal(filter);
                  }}
                />
              </View>
            );
          }}
        />
      </View>

      {/* Total Price */}
      <View style={styles.price_container}>
        <Text style={styles.price_text}>Total Price: {totalPrice}</Text>
      </View>
    </View>
  );
}

function EditCategoryScreen({ route, navigation }) {
  const [labels, setLabels] = useState(route.params.categories);
  const [extra, setExtra] = useState(false);

  const [addItemVisible, setAddItemVisible] = useState(false);
  const [addItemVal, setAddItemVal] = useState('');

  const [editItemVisible, setEditItemVisible] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editItemVal, setEditItemVal] = useState('');

  return (
    <View>
      {/* add category modal */}
      <Modal animationType="none" transparent={true} visible={addItemVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.text_input}
              onChangeText={setAddItemVal}
              value={addItemVal}
              placeholder="Category Name"
            />
            <View style={styles.modal_button}>
              <TouchableOpacity
                onPress={() => {
                  setAddItemVisible(!addItemVisible);
                }}
              >
                <Text style={styles.button_text}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  currLabelKey++;
                  setItemToAsync('currLabelKey', currLabelKey);
                  const newData = {
                    label: addItemVal,
                    value: currLabelKey,
                  };
                  setItemToAsync('l' + currLabelKey, newData);
                  labels.push(newData);
                  setAddItemVal('');
                  setAddItemVisible(!addItemVisible);
                }}
              >
                <Text style={styles.button_text}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* edit category modal */}

      <Modal animationType="none" transparent={true} visible={editItemVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.text_input}
              onChangeText={setEditItemVal}
              value={editItemVal}
            />
            <View style={styles.modal_button}>
              <TouchableOpacity
                onPress={() => {
                  setEditItemVisible(!editItemVisible);
                }}
              >
                <Text style={styles.button_text}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  editItem.label = editItemVal;
                  setEditItemVisible(!editItemVisible);
                  setItemToAsync('l' + editItem.value, editItem);
                }}
              >
                <Text style={styles.button_text}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{ margin: 10 }}
        onPress={() => {
          setAddItemVisible(true);
        }}
      >
        <Ionicons name="ios-add-circle" size={30} color="black" />
      </TouchableOpacity>
      <FlatList
        data={labels}
        extraData={extra}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.item_text}>{item.label}</Text>

              <FontAwesome5
                style={styles.item_icon}
                name="edit"
                onPress={() => {
                  setEditItem(item);
                  setEditItemVal(item.label);
                  setEditItemVisible(!editItemVisible);
                  setExtra(!extra);
                }}
              />
              <FontAwesome5
                style={styles.item_icon}
                name="trash"
                onPress={() => {
                  labels.splice(labels.indexOf(item), 1);
                  removeItemFromAsync('l' + item.value);
                  setLabels(labels);
                  setExtra(!extra);
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const isEmpty = function (value) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};

// AsyncStorage get 함수 모듈
export const getItemFromAsync = (storageName) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result === null) {
        resolve(null);
      }

      resolve(JSON.parse(result));
    });
  });
};

// AsyncStorage set 함수 모듈
export const setItemToAsync = (storageName, item) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }

      resolve('입력 성공');
    });
  });
};

// AsyncStorage remove 함수 모듈
export const removeItemFromAsync = (storageName) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result === null) {
        resolve(null);
      }

      resolve(() => console.log('removed done'));
    });
  });
};

const styles = StyleSheet.create({
  // whole container
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: width / 2,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  // each sections
  title_view: {
    width: width,
    alignItems: 'center',
  },
  control_view: {
    width: width,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  list_view: {
    width: width,
    padding: 10,
    flex: 1,
  },
  price_view: {
    width: width,
    flex: 1,
  },
  modal_button: {
    flexDirection: 'row',
  },

  // each objects
  text_input: {
    width: (width * 2) / 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'skyblue',
    margin: 10,
  },
  item_unchecked: {},
  item_checked: {
    color: 'lightgrey',
    textDecorationLine: 'line-through',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'skyblue',
    padding: 10,
    margin: 5,
  },
  item_text: {
    flex: 6,
    fontSize: 20,
  },
  item_price: {
    flex: 2,
    fontSize: 15,
  },
  item_icon: {
    flex: 1,
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
  },
  price_text: {
    width: width,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'beige',
    padding: 10,
    textAlign: 'center',
  },
  button_text: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
});
