import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [labels, setLabels] = useState([
    { id: 1, label: 'Grocery Store', value: 'grocery' },
    { id: 2, label: 'Office', value: 'office' },
  ]);

  const [extra, setExtra] = useState(false);
  const [checked, setChecked] = useState(new Set());
  const [datalist, setDatalist] = useState([
    { name: 'apple', labelId: 1 },
    { name: 'banana', labelId: 1 },
    { name: 'milk', labelId: 1 },
    { name: 'yogurt', labelId: 1 },
    { name: 'pencil', labelId: 2 },
    { name: 'notepad', labelId: 2 },
    { name: 'bread', labelId: 1 },
    { name: 'basil pesto', labelId: 1 },
    { name: 'tomato', labelId: 1 },
    { name: 'bagel', labelId: 1 },
    { name: 'spinach', labelId: 1 },
  ]);

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.title}>
        <Text>List</Text>
      </View>
      {/* Banner */}
      <View style={styles.control_panel}>
        <TouchableOpacity>
          <Image source="+ icon image source" />
        </TouchableOpacity>
        <DropDownPicker
          open={open}
          value={value}
          items={labels}
          setOpen={setOpen}
          setValue={setValue}
          setLabels={setLabels}
          placeholder="All"
        />
      </View>

      {/*
      // add item into the list
      <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // concat array into items
            const added = labels.concat({ label: 'added', value: 'added' });
            // set item
            setLabels(added);
          }}
        >
          <Text> add into dropdown</Text>
        </TouchableOpacity>
       */}

      {/* List */}
      <View style={styles.list_container}>
        <FlatList
          data={datalist}
          extraData={extra}
          renderItem={({ item, index }) => {
            const ifChecked = checked.has(index)
              ? styles.item_checked
              : styles.item;
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  if (!checked.has(index)) checked.add(index);
                  else checked.delete(index);
                  setChecked(checked);
                  setExtra(!extra);
                }}
              >
                <Text style={[styles.item_text, ifChecked]}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
  control_panel: {
    zIndex: 100,
  },
  item: {},
  item_checked: {
    color: 'lightgrey',
    textDecorationLine: 'line-through',
  },
  item_text: {},
});
