// ch12 lab07 - Select, and delete
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [extra, setExtra] = useState(false);
  const [sel, setSel] = useState(null);

  return (
    <View style={styles.container}>
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <TextInput style={styles.input} onChangeText={setKey} />
        <TextInput style={styles.input} onChangeText={setName} />
        <Button
          title="Add"
          onPress={() => {
            datalist.push({ key: key, name: name });
            setExtra(!extra);
          }}
        />
        <View style={{ width: 5 }} />
        <Button
          title="Del"
          onPress={() => {
            if (sel != null) datalist.splice(sel, 1);
            setSel(null);
            setExtra(!extra);
          }}
        />
      </View>
      <FlatList
        data={datalist}
        extraData={extra}
        keyExtractor={(item) => item.num}
        renderItem={({ item, index }) => {
          const color = index === sel ? 'red' : 'black';
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                setSel(index);
                setExtra(!extra);
              }}
            >
              <Text style={styles.age}>{item.key}</Text>
              <Text style={[styles.text, { color }]}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

let datalist = [
  { num: '01', name: 'Devin' },
  { num: '02', name: 'Dan' },
  { num: '03', name: 'Dominic' },
  { num: '04', name: 'Jackson' },
  { num: '05', name: 'James' },
  { num: '06', name: 'Joel' },
  { num: '07', name: 'John' },
  { num: '08', name: 'Jilian' },
  { num: '09', name: 'Jimmy' },
  { num: '10', name: 'Julie' },
  { num: '11', name: 'Jay' },
  { num: '12', name: 'Ewha' },
];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  text: { fontSize: 30, marginHorizontal: 10 },
  age: { fontSize: 15, color: 'blue', marginVertical: 10 },
  input: { flex: 1, fontSize: 30, borderWidth: 1, marginHorizontal: 5 },
});

/* // ch12 lab06 - if no key, or id
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [extra, setExtra] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <TextInput style={styles.input} onChangeText={setKey} />
        <TextInput style={styles.input} onChangeText={setName} />
        <Button
          title="Add"
          onPress={() => {
            datalist.push({ key: key, name: name });
            setExtra(!extra);
          }}
        />
        <View style={{ width: 5 }} />
        <Button
          title="Del"
          onPress={() => {
            datalist.pop();
            setExtra(!extra);
          }}
        />
      </View>
      <FlatList
        data={datalist}
        extraData={extra}
        keyExtractor={(item) => item.num}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.age}>{item.key}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

let datalist = [
  { num: '01', name: 'Devin' },
  { num: '02', name: 'Dan' },
  { num: '03', name: 'Dominic' },
  { num: '04', name: 'Jackson' },
  { num: '05', name: 'James' },
  { num: '06', name: 'Joel' },
  { num: '07', name: 'John' },
  { num: '08', name: 'Jilian' },
  { num: '09', name: 'Jimmy' },
  { num: '10', name: 'Julie' },
  { num: '11', name: 'Jay' },
  { num: '12', name: 'Ewha' },
];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  text: { fontSize: 30, marginHorizontal: 10 },
  age: { fontSize: 15, color: 'blue', marginVertical: 10 },
  input: { flex: 1, fontSize: 30, borderWidth: 1, marginHorizontal: 5 },
});
*/

/* // ch12 lab05 - refresh by extraData
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [extra, setExtra] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <TextInput style={styles.input} onChangeText={setKey} />
        <TextInput style={styles.input} onChangeText={setName} />
        <Button
          title="Add"
          onPress={() => {
            datalist.push({ key: key, name: name });
            setExtra(!extra);
          }}
        />
        <View style={{ width: 5 }} />
        <Button
          title="Del"
          onPress={() => {
            datalist.pop();
            setExtra(!extra);
          }}
        />
      </View>
      <FlatList
        data={datalist}
        extraData={extra}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.age}>{item.key}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

let datalist = [
  { key: '01', name: 'Devin' },
  { key: '02', name: 'Dan' },
  { key: '03', name: 'Dominic' },
  { key: '04', name: 'Jackson' },
  { key: '05', name: 'James' },
  { key: '06', name: 'Joel' },
  { key: '07', name: 'John' },
  { key: '08', name: 'Jilian' },
  { key: '09', name: 'Jimmy' },
  { key: '10', name: 'Julie' },
  { key: '11', name: 'Jay' },
  { key: '12', name: 'Ewha' },
];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  text: { fontSize: 30, marginHorizontal: 10 },
  age: { fontSize: 15, color: 'blue', marginVertical: 10 },
  input: { flex: 1, fontSize: 30, borderWidth: 1, marginHorizontal: 5 },
});
*/

/* // ch12 lab04 - add, del item
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  return (
    <View style={styles.container}>
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <TextInput style={styles.input} onChangeText={setKey} />
        <TextInput style={styles.input} onChangeText={setName} />
        <Button
          title="Add"
          onPress={() => {
            datalist.push({ key: key, name: name });
          }}
        />
        <View style={{ width: 5 }} />
        <Button
          title="Del"
          onPress={() => {
            datalist.pop();
          }}
        />
      </View>
      <FlatList
        data={datalist}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.age}>{item.key}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

let datalist = [
  { key: '01', name: 'Devin' },
  { key: '02', name: 'Dan' },
  { key: '03', name: 'Dominic' },
  { key: '04', name: 'Jackson' },
  { key: '05', name: 'James' },
  { key: '06', name: 'Joel' },
  { key: '07', name: 'John' },
  { key: '08', name: 'Jilian' },
  { key: '09', name: 'Jimmy' },
  { key: '10', name: 'Julie' },
  { key: '11', name: 'Jay' },
  { key: '12', name: 'Ewha' },
];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  text: { fontSize: 30, marginHorizontal: 10 },
  age: { fontSize: 15, color: 'blue', marginVertical: 10 },
  input: { flex: 1, fontSize: 30, borderWidth: 1, marginHorizontal: 5 },
});
*/

/* // ch12 lab03 - 여러 데이터 넣기
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={datalist}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.age}>{item.key}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

let datalist = [
  { key: '01', name: 'Devin' },
  { key: '02', name: 'Dan' },
  { key: '03', name: 'Dominic' },
  { key: '04', name: 'Jackson' },
  { key: '05', name: 'James' },
  { key: '06', name: 'Joel' },
  { key: '07', name: 'John' },
  { key: '08', name: 'Jilian' },
  { key: '09', name: 'Jimmy' },
  { key: '10', name: 'Julie' },
  { key: '11', name: 'Jay' },
  { key: '12', name: 'Ewha' },
];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  text: { fontSize: 30, marginHorizontal: 10 },
  age: { fontSize: 15, color: 'blue', marginVertical: 10 },
});
*/

/* // ch12 lab02 - datalist는 밖으로
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={datalist}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.key}</Text>;
        }}
      />
    </View>
  );
}

let datalist = [
  { key: '01' },
  { key: '02' },
  { key: '03' },
  { key: '04' },
  { key: '05' },
  { key: '06' },
  { key: '07' },
  { key: '08' },
  { key: '09' },
  { key: '10' },
  { key: '11' },
  { key: '12' },
];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
*/

/* // ch12 lab01 - FlatList
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: '01' },
          { key: '02' },
          { key: '03' },
          { key: '04' },
          { key: '05' },
          { key: '06' },
          { key: '07' },
          { key: '08' },
          { key: '09' },
          { key: '10' },
          { key: '11' },
          { key: '12' },
        ]}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.key}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
*/

/* // ch11 lab02 - move the ball : To Do
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  function _slow() {
    Accelerometer.setUpdateInterval(1000);
  }

  function _fast() {
    Accelerometer.setUpdateInterval(40);
  }

  function _subscribe() {
    Accelerometer.addListener((d) => {
      setData(d);
    });
  }

  useEffect(() => {
    _subscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: </Text>
      <Text style={styles.text}>
        x: {data.x.toFixed(3)} y: {data.y.toFixed(3)} z: {data.z.toFixed(3)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_slow} style={styles.button}>
          <Text style={styles.button}>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text style={styles.button}>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40 },
  text: { fontSize: 20 },
  buttonContainer: { margin: 10 },
  button: { fontSize: 20, color: 'blue', margin: 5 },
});
*/

/*// ch11 lab01 - Read Accelerometer sensor
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  function _slow() {
    Accelerometer.setUpdateInterval(1000);
  }

  function _fast() {
    Accelerometer.setUpdateInterval(40);
  }

  function _subscribe() {
    Accelerometer.addListener((d) => {
      setData(d);
    });
  }

  useEffect(() => {
    _subscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: </Text>
      <Text style={styles.text}>
        x: {data.x.toFixed(3)} y: {data.y.toFixed(3)} z: {data.z.toFixed(3)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_slow} style={styles.button}>
          <Text style={styles.button}>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text style={styles.button}>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40 },
  text: { fontSize: 20 },
  buttonContainer: { margin: 10 },
  button: { fontSize: 20, color: 'blue', margin: 5 },
});*/

/* // ch10 lab04 - forecast (3시간 간격, up to 5 days)

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

let url =
  'http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&appid=에이피아이 아이디';
let st_text = { fontSize: 10 };

export default function App() {
  const [date, setDate] = useState([]);
  const [temp, setTemp] = useState([]);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        for (let i = 0; i < 5; i++) {
          setDate((date) => [...date, json.list[i * 8].dt_txt]);
          setTemp((temp) => [...temp, json.list[i * 8].main.temp]);
          setWeather((weather) => [
            ...weather,
            json.list[i * 8].weather[0].description,
          ]);
          setIcon((icon) => [
            ...icon,
            'http://openweathermap.org/img/w/' +
              json.list[i * 8].weather[0].icon +
              '.png',
          ]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function WeatherView(props) {
    const index = props.idx;
    return (
      <View>
        <Text style={st_text}>Date: {date[index]}</Text>
        <Text style={st_text}>Temp: {temp[index]}</Text>
        <Text style={st_text}>Weather: {weather[index]}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ url: icon[index] }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <WeatherView idx={0} />
      <WeatherView idx={1} />
      <WeatherView idx={2} />
      <WeatherView idx={3} />
      <WeatherView idx={4} />
    </View>
  );
}*/

/* // ch10 lab03 - Add weather icon

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

let url =
  'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=에이피아이 아이디';
let st_text = { fontSize: 20 };

export default function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setCity(json.name);
        setCountry(json.sys.country);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setWind(json.wind.speed);
        setIcon(
          'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png'
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <Text style={st_text}>City: {city}</Text>
      <Text style={st_text}>Country: {country}</Text>
      <Text style={st_text}>Temp: {temp}</Text>
      <Text style={st_text}>Weather: {weather}</Text>
      <Text style={st_text}>Wind: {wind}</Text>
      <Image style={{ width: 100, height: 100 }} source={{ url: icon }} />
    </View>
  );
}*/

/* // ch10 lab02 - Read weather data from JSON

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

let url =
  'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=에이피아이 아이디';
let st_text = { fontSize: 20 };

export default function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setCity(json.name);
        setCountry(json.sys.country);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setWind(json.wind.speed);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <Text style={st_text}>City: {city}</Text>
      <Text style={st_text}>Country: {country}</Text>
      <Text style={st_text}>Temp: {temp}</Text>
      <Text style={st_text}>Weather: {weather}</Text>
      <Text style={st_text}>Wind: {wind}</Text>
    </View>
  );
}*/

/* // ch10 lab01a - get data

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

let url =
  'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=에이피아이 아이디';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}*/

/* // ch10 lab01 - get data

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=에이피아이 아이디'
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}*/

/* // ch09 lab04 - Seperate Screen

// navigation ide: https://reactnavigation.org/docs/params/

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarPicker from 'react-native-calendar-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Memo" component={MemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  async function date_change(d) {
    console.log(d.format('YYYYMMDD'));
    let date = d.format('YYYYMMDD');

    let val_expense = '';
    let val_memo = '';

    let value = await AsyncStorage.getItem(date);
    let value_m = await AsyncStorage.getItem(date + 'm');

    console.log(value);

    if (value !== null) {
      val_expense = value;
      val_memo = value_m;
    }

    navigation.navigate('Memo', {
      date: d,
      expense: val_expense,
      memo: val_memo,
    });
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={date_change} />
    </View>
  );
}

function MemoScreen({ route, navigation }) {
  let d = route.params.date;

  const [date, setDate] = useState(d.format('YYYYMMDD'));
  const [date1, setDate1] = useState(d.format('MMMM DD, YYYY'));
  const [expense, setExpense] = useState(route.params.expense);
  const [memo, setMemo] = useState(route.params.memo);

  async function save_memo() {
    console.log(date);
    await AsyncStorage.setItem(date, expense);
    await AsyncStorage.setItem(date + 'm', memo);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.datetext}>{date1}</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Expense: </Text>
        <TextInput
          style={styles.expense}
          keyboardType="numeric"
          onChangeText={setExpense}
          value={expense}
        />
        <Button title="Save" onPress={save_memo} />
      </View>
      <TextInput
        style={styles.memo}
        placeholder="Memo"
        onChangeText={setMemo}
        value={memo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  box: {
    margin: 20,
  },
  datetext: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { fontSize: 16 },
  expense: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  memo: { borderBottomWidth: 1, fontSize: 16, marginTop: 10, color: 'blue' },
}); */

/*// ch09 lab03 - saving to Key-Value
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {
  const [date, setDate] = useState('');
  const [date1, setDate1] = useState('');
  const [expense, setExpense] = useState('');
  const [memo, setMemo] = useState('');

  async function onDateChange(d) {
    console.log(d.format('YYYYMMDD'));
    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'));

    let key = d.format('YYYYMMDD');
    let value = await AsyncStorage.getItem(key);
    let value_m = await AsyncStorage.getItem(key + 'm');

    console.log(value);

    if (value !== null) {
      setExpense(value);
      setMemo(value_m);
    } else {
      setExpense('');
      setMemo('');
    }
  }

  async function save_memo() {
    await AsyncStorage.setItem(date, expense);
    await AsyncStorage.setItem(date + 'm', memo);
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={styles.box}>
        <Text style={styles.datetext}>{date1}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Expense: </Text>
          <TextInput
            style={styles.expense}
            keyboardType="numeric"
            onChangeText={setExpense}
            value={expense}
          />
          <Button title="Save" onPress={save_memo} />
        </View>
        <TextInput
          style={styles.memo}
          placeholder="Memo"
          onChangeText={setMemo}
          value={memo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  box: {
    margin: 20,
  },
  datetext: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { fontSize: 16 },
  expense: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  memo: { borderBottomWidth: 1, fontSize: 16, marginTop: 10, color: 'blue' },
});
*/

/*// ch09 lab02 - Add Memo UI
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {
  const [date, setDate] = useState('');
  const [date1, setDate1] = useState('');
  const [expense, setExpense] = useState('');
  const [memo, setMemo] = useState('');

  function onDateChange(d) {
    console.log(d);
    console.log(d.toString());
    console.log(d.format('YYYYMMDD'));
    console.log(d.format('MMMM DD, YYYY'));

    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'));
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={styles.box}>
        <Text style={styles.datetext}>{date1}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Expense</Text>
          <TextInput
            style={styles.expense}
            keyboardType="numeric"
            onChangeText={setExpense}
          />
          <Button title="Save" />
        </View>
        <TextInput
          style={styles.memo}
          placeholder="Memo"
          onChangeText={setMemo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  box: {
    margin: 20,
  },
  datetext: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { fontSize: 16 },
  expense: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  memo: { borderBottomWidth: 1, fontSize: 16, marginTop: 10, color: 'blue' },
});
*/

/*// ch09 lab01 - create calendar
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {
  const [date, setDate] = useState('');
  const [date1, setDate1] = useState('');

  function onDateChange(d) {
    console.log(d);
    console.log(d.toString());
    console.log(d.format('YYYYMMDD'));
    console.log(d.format('MMMM DD, YYYY'));

    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'));
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={styles.box}>
        <Text>Date: {date}</Text>
        <Text style={styles.text}>{date1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  box: {
    margin: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});
*/

/*// ch08 lab03c&d - Touch image to take picture & Each image takes picture
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';

async function get_perm() {
  const { status } = await Camera.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    alert('We need camera permissions');
  }
}

let cam;

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);

  async function takePic(setImg) {
    let photo = await cam.takePictureAsync();
    console.log(photo);
    setImg(photo.uri);
  }

  useEffect(() => {
    get_perm();
  }, []);

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(r) => {
          cam = r;
        }}
        type={type}
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Front"
            onPress={() => {
              setType(Camera.Constants.Type.front);
            }}
          />
          <View style={{ width: 10 }} />
          <Button
            title="Back"
            onPress={() => {
              setType(Camera.Constants.Type.back);
            }}
          />
        </View>
      </Camera>

      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            takePic(1);
          }}
          style={styles.image}
        >
          <Image source={{ uri: img1 }} style={{ flex: 1 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            takePic(setImg2);
          }}
          style={styles.image}
        >
          <Image source={{ uri: img2 }} style={{ flex: 1 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            takePic(setImg3);
          }}
          style={styles.image}
        >
          <Image source={{ uri: img3 }} style={{ flex: 1 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            takePic(setImg4);
          }}
          style={styles.image}
        >
          <Image source={{ uri: img4 }} style={{ flex: 1 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { width: '100%', aspectRatio: 0.75, flexDirection: 'column-reverse' },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  image: { backgroundColor: 'grey', width: '25%', aspectRatio: 0.75 },
  imageContainer: {
    flexDirection: 'row',
    margin: 10,
  },
});
*/

/*// ch08 lab03b - UI can go inside Camera
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';
import { Camera } from 'expo-camera';

async function get_perm() {
  const { status } = await Camera.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    alert('We need camera permissions');
  }
}

let cam;

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  let [img, setImg] = useState(null);

  async function takePic() {
    let photo = await cam.takePictureAsync();
    console.log(photo);
    setImg(photo.uri);
  }

  useEffect(() => {
    get_perm();
  }, []);

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(r) => {
          cam = r;
        }}
        type={type}
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Front"
            onPress={() => {
              setType(Camera.Constants.Type.front);
            }}
          />
          <View style={{ width: 10 }} />
          <Button
            title="Back"
            onPress={() => {
              setType(Camera.Constants.Type.back);
            }}
          />
          <View style={{ width: 10 }} />
          <Button title="Take" onPress={takePic} />
        </View>
      </Camera>
      <Image source={{ uri: img }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { width: '100%', aspectRatio: 0.75, flexDirection: 'column-reverse' },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  image: { backgroundColor: 'grey', width: '25%', aspectRatio: 0.75 },
});
*/

/*// ch08 lab03 - Using Camera
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';
import { Camera } from 'expo-camera';

async function get_perm() {
  const { status } = await Camera.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    alert('We need camera permissions');
  }
}

let cam;

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  let [img, setImg] = useState(null);

  async function takePic() {
    let photo = await cam.takePictureAsync();
    console.log(photo);
    setImg(photo.uri);
  }

  useEffect(() => {
    get_perm();
  }, []);

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={function (r) {
          cam = r;
        }}
        type={type}
      ></Camera>
      <View style={styles.buttonContainer}>
        <Button
          title="Front"
          onPress={() => {
            setType(Camera.Constants.Type.front);
          }}
        />
        <View style={{ width: 10 }} />
        <Button
          title="Back"
          onPress={() => {
            setType(Camera.Constants.Type.back);
          }}
        />
        <Button title="Take" onPress={takePic} />
      </View>
      <Image source={{ uri: img }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { width: '100%', aspectRatio: 0.75 },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  image: { backgroundColor: 'grey', width: '25%', aspectRatio: 0.75 },
});
*/

/*// ch08 lab02 c - Touch image to pick, using TouchableOpacity
import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'expo-modules-core';

export default function ImagePickerExample() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  useEffect(() => {
    get_perm();
  }, []);

  async function pickImg1() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg1(result.uri);
    }
  }

  async function pickImg2() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg2(result.uri);
    }
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}
    >
      <TouchableOpacity onPress={pickImg1}>
        <Image
          source={{ uri: img1 }}
          style={{ backgroundColor: 'grey', width: 240, height: 240 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={pickImg2}>
        <Image
          source={{ uri: img2 }}
          style={{ backgroundColor: 'grey', width: 240, height: 240 }}
        />
      </TouchableOpacity>
    </View>
  );
}

async function get_perm() {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      alert('We need camera roll permissions');
    }
  }
}
*/

/*// ch08 lab 02b - pick two images
import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'expo-modules-core';

export default function ImagePickerExample() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  useEffect(() => {
    get_perm();
  }, []);

  async function pickImg1() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg1(result.uri);
    }
  }

  async function pickImg2() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg2(result.uri);
    }
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}
    >
      <Button title="Pick an Image1" onPress={pickImg1} />
      <Image source={{ uri: img1 }} style={{ width: 240, height: 240 }} />
      <Button title="Pick an Image2" onPress={pickImg2} />
      <Image source={{ uri: img2 }} style={{ width: 240, height: 240 }} />
    </View>
  );
}

async function get_perm() {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      alert('We need camera roll permissions');
    }
  }
}*/

/* // ch 08 lab 2a - get image from photo gallery
import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'expo-modules-core';

const text_st = {
  width: 100,
  fontSize: 30,
  backgroundColor: 'lightgrey',
  padding: 10,
  margin: 20,
};

export default function ImagePickerExample() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    get_perm();
  }, []);

  async function pickImg() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg(result.uri);
    }
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}
    >
      <Button title="Pick an Image" onPress={pickImg} />
      <Image source={{ uri: img }} style={{ width: 300, height: 400 }} />
    </View>
  );
}

async function get_perm() {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      alert('We need camera roll permissions');
    }
  }
}
*/

/* // ch 08 lab 01 - useEffect
import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const text_st = {
  width: 100,
  fontSize: 30,
  backgroundColor: 'lightgrey',
  padding: 10,
  margin: 20,
};

export default function App() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log('this is side effect', val);
  });

  return (
    <View style={{ marginTop: 30, alignItems: 'center' }}>
      <Text style={text_st}>{val}</Text>
      <Button
        title="Count up"
        onPress={() => {
          setVal(val + 1);
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Count Down"
        onPress={() => {
          setVal(val - 1);
        }}
      />
    </View>
  );
}
*/

/* // ch 07 lab05 - Children of Component
import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
      <BoxGroup>
        <Text style={styles.text}>ABCD</Text>
        <Text style={styles.text}>123</Text>
        <Button title="OK" />
      </BoxGroup>

      <BoxGroup>
        <BoxGroup>
          <Text style={styles.text}>ABCD</Text>
          <Button title="OK" />
        </BoxGroup>

        <BoxGroup>
          <Text style={styles.text}>123</Text>
          <Button title="OK" />
        </BoxGroup>
      </BoxGroup>
    </View>
  );
}

function BoxGroup(props) {
  return <View style={styles.box}>{props.children}</View>;
}

const styles = StyleSheet.create({
  box: {
    borderColor: 'blue',
    borderWidth: 2,
    margin: 5,
    padding: 5,
  },
  text: {
    backgroundColor: 'wheat',
    fontSize: 30,
    margin: 2,
    padding: 2,
  },
});

*/

/*// ch07 lab04 - TouchableHighlight, TouchableNativeFeedback(Android only)
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

export default function App() {
  const [N, setN] = useState(0);

  return (
    <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
      <Text style={styles.text}>Touched {N} Times</Text>

      <TouchableHighlight
        underlayColor="orange"
        onPress={() => {
          setN(N + 1);
        }}
      >
        <View>
          <Text style={[styles.text, styles.button]}>High, Touch Me</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback
        onPress={() => {
          setN(N - 1);
        }}
      >
        <View>
          <Text style={[styles.text, styles.button]}>
            NativeFeedback(Android only), Touch Me
          </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#2196F3')}
        onPress={() => {
          setN(N - 1);
        }}
      >
        <View>
          <Text style={[styles.text, styles.button]}>
            NativeFeedback backgroundColor, Touch Me
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 10,
    margin: 10,
  },
  button: {
    color: 'dodgerblue',
  },
});
*/

/*// ch07 lab02 - TouchableOpacity / lab03 touch Dice to roll
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [N, setN] = useState(1);
  const [t, setT] = useState(0);

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Text style={styles.text}>Dice</Text>
      <View style={{ flex: 1, marjinTop: 40, alignItems: 'center' }}>
        <Text>Touched {t} Times</Text>
        <TouchableOpacity
          onPress={() => {
            setN(Math.floor(Math.random() * 6 + 1));
            setT(t + 1);
          }}
        >
          <Dice num={N} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Circle() {
  return <View style={styles.circle} />;
}

function Blank() {
  return (
    <View
      style={[styles.circle, { backgroundColor: undefined, borderWidth: 0 }]}
    />
  );
}

function Dice(props) {
  switch (props.num) {
    case 1:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
        </View>
      );
    case 2:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 3:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 4:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 5:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 6:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    margin: 2,
  },
  dice: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
  },
});
*/

/*// ch07 lab01 - make <Mult> component
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const text_st = {
  fontSize: 30,
  padding: 10,
  margin: 10,
};

const input_st = {
  fontSize: 30,
  borderWidth: 1,
  padding: 10,
  margin: 10,
};

export default function App() {
  return (
    <View style={{ paddingTop: 30 }}>
      <Mult />
      <Mult />
      <Mult />
    </View>
  );
}

function Mult() {
  // 함수 안에서만 사용
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput style={input_st} onChangeText={setX} />
      <Text style={text_st}> X </Text>
      <TextInput style={input_st} onChangeText={setY} />
      <Text style={text_st}>= {Number(x) * Number(y)}</Text>
    </View>
  );
}
*/

/*// ch06 - Double Dice
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [N1, setN1] = useState(1);
  const [N2, setN2] = useState(1);

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Text style={styles.text}>Double Dice</Text>
      <Text style={styles.text}>{N1 + N2}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Dice num={N1} />
        <View style={{ padding: 10 }} />
        <Dice num={N2} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button
          title="Roll"
          onPress={() => {
            setN1(Math.floor(Math.random() * 6 + 1));
            setN2(Math.floor(Math.random() * 6 + 1));
          }}
        />
      </View>
    </View>
  );
}

function Circle() {
  return <View style={styles.circle} />;
}

function Blank() {
  return (
    <View
      style={[styles.circle, { backgroundColor: undefined, borderWidth: 0 }]}
    />
  );
}

function Dice(props) {
  switch (props.num) {
    case 1:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
        </View>
      );
    case 2:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 3:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 4:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 5:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 6:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    margin: 2,
  },
  dice: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
  },
});
*/

/*// ch06 - Roll the Dice
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [N, setN] = useState(1);

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Text style={styles.text}>Dice</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Dice num={N} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button
          title="Roll"
          onPress={() => {
            setN(Math.floor(Math.random() * 6 + 1));
          }}
        />
      </View>
    </View>
  );
}

function Circle() {
  return <View style={styles.circle} />;
}

function Blank() {
  return (
    <View
      style={[styles.circle, { backgroundColor: undefined, borderWidth: 0 }]}
    />
  );
}

function Dice(props) {
  switch (props.num) {
    case 1:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
        </View>
      );
    case 2:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 3:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 4:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 5:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
    case 6:
      return (
        <View style={styles.dice}>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Circle />
            <Circle />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Circle />
            <Blank />
            <Circle />
          </View>
        </View>
      );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    margin: 2,
  },
  dice: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
  },
});
*/

/*// piano app
import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

const key_st = {
  flex: 1,
  margin: 5,
  backgroundColor: 'rgba(100,100,100, 0.2}',
};

export default function App() {
  const [k0, setk0] = useState(0);
  const [k2, setk2] = useState(0);
  const [k4, setk4] = useState(0);
  const [k5, setk5] = useState(0);
  const [k7, setk7] = useState(0);
  const [k9, setk9] = useState(0);
  const [k11, setk11] = useState(0);
  const [k12, setk12] = useState(0);

  return (
    <View style={{ flex: 1, MarginTop: 30 }}>
      <ImageBackground
        style={{ height: '100%', width: '100%' }}
        resizeode="stretch"
        source={require('./assets/keyboard.png')}
      >
        <View
          style={key_st}
          opacity={k0}
          onTouchStart={() => {
            play00();
            setk0(1);
          }}
          onTouchEnd={() => {
            setk0(0);
          }}
        />
        <View
          style={key_st}
          opacity={k2}
          onTouchStart={() => {
            play02();
            setk2(1);
          }}
          onTouchEnd={() => {
            setk2(0);
          }}
        />
        <View
          style={key_st}
          opacity={k4}
          onTouchStart={() => {
            play04();
            setk4(1);
          }}
          onTouchEnd={() => {
            setk4(0);
          }}
        />
        <View
          style={key_st}
          opacity={k5}
          onTouchStart={() => {
            play05();
            setk5(1);
          }}
          onTouchEnd={() => {
            setk5(0);
          }}
        />
        <View
          style={key_st}
          opacity={k7}
          onTouchStart={() => {
            play07();
            setk7(1);
          }}
          onTouchEnd={() => {
            setk7(0);
          }}
        />
        <View
          style={key_st}
          opacity={k9}
          onTouchStart={() => {
            play09();
            setk9(1);
          }}
          onTouchEnd={() => {
            setk9(0);
          }}
        />
        <View
          style={key_st}
          opacity={k11}
          onTouchStart={() => {
            play11();
            setk11(1);
          }}
          onTouchEnd={() => {
            setk11(0);
          }}
        />
        <View
          style={key_st}
          opacity={k12}
          onTouchStart={() => {
            play12();
            setk12(1);
          }}
          onTouchEnd={() => {
            setk12(0);
          }}
        />
      </ImageBackground>
    </View>
  );
}

async function play00() {
  console.log('Loading Sound');
  var s = await Audio.Sound.createAsync(require('./assets/note00.m4a'));

  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play02() {
  var s = await Audio.Sound.createAsync(require('./assets/note02.m4a'));
  s.sound.playAsync();
}

async function play04() {
  var s = await Audio.Sound.createAsync(require('./assets/note04.m4a'));
  s.sound.playAsync();
}

async function play05() {
  var s = await Audio.Sound.createAsync(require('./assets/note05.m4a'));
  s.sound.playAsync();
}

async function play07() {
  var s = await Audio.Sound.createAsync(require('./assets/note07.m4a'));
  s.sound.playAsync();
}

async function play09() {
  var s = await Audio.Sound.createAsync(require('./assets/note09.m4a'));
  s.sound.playAsync();
}

async function play11() {
  var s = await Audio.Sound.createAsync(require('./assets/note11.m4a'));
  s.sound.playAsync();
}

async function play12() {
  var s = await Audio.Sound.createAsync(require('./assets/note12.m4a'));
  s.sound.playAsync();
}
*/

/*ch05 lab2 - add background image

import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

key_st = { flex: 1, margin: 5, backgroundColor: 'rgb(100,100,100, 0.2}' };

export default function App() {
  return (
    <View style={{ flex: 1, MarginTop: 30 }}>
      <ImageBackground
        style={{ height: '100%', width: '100%' }}
        resizeode="stretch"
        source={require('./assets/keyboard.png')}
      >
        <View
          style={key_st}
          onTouchStart={() => {
            play00();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play02();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play04();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play05();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play007();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play09();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play11();
          }}
        />

        <View
          style={key_st}
          onTouchStart={() => {
            play12();
          }}
        />
      </ImageBackground>
    </View>
  );
}
async function play00() {
  console.log('Loading Sound');
  var s = await Audio.Sound.createAsync(require('./assets/note00.m4a'));

  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play02() {
  var s = await Audio.Sound.createAsync(require('./assets/note02.m4a'));
  s.sound.playAsync();
}

async function play04() {
  var s = await Audio.Sound.createAsync(require('./assets/note04.m4a'));
  s.sound.playAsync();
}

async function play05() {
  var s = await Audio.Sound.createAsync(require('./assets/note05.m4a'));
  s.sound.playAsync();
}

async function play07() {
  var s = await Audio.Sound.createAsync(require('./assets/note07.m4a'));
  s.sound.playAsync();
}

async function play09() {
  var s = await Audio.Sound.createAsync(require('./assets/note09.m4a'));
  s.sound.playAsync();
}

async function play11() {
  var s = await Audio.Sound.createAsync(require('./assets/note11.m4a'));
  s.sound.playAsync();
}

async function play12() {
  var s = await Audio.Sound.createAsync(require('./assets/note12.m4a'));
  s.sound.playAsync();
}
*/

/*//ch04 lab04 - drawer navigator
import React, { useState } from 'react';
import { Text, View, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const text_st = {
  fontSize: 20,
  margin: 10,
};

const input_style = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Hello" component={HelloScreen} />
        <Drawer.Screen name="구구단" component={MultiplicationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function MultiplicationScreen() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  const [result, setResult] = useState(x * y);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ paddingTop: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={text_st}>
            {x} X {y} = {result}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              x++;
              setX(x);
              setResult(x * y);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              x--;
              setX(x);
              setResult(x * y);
            }}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              y++;
              setY(y);
              setResult(x * y);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              y--;
              setY(y);
              setResult(x * y);
            }}
          />
        </View>
      </View>
    </View>
  );
}

function HelloScreen() {
  const [greet, setGreet] = useState('Hello');
  const [name, setName] = useState('User');

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>
        {greet}, {name}
      </Text>
      <TextInput style={input_style} onChangeText={setName} />
      <View style={{ margin: 10, flexDirection: 'row-reverse' }}>
        <Button
          title="Nice"
          onPress={() => {
            setGreet('Nice to meet you');
          }}
        />
        <Button
          title="Hello"
          onPress={() => {
            setGreet('Hello');
          }}
        />
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View>
      <Text style={text_st}>This is about the app</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('./assets/cat-icon.png')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Hello"
        onPress={() => {
          navigation.navigate('Hello');
        }}
      />

      <Button
        title="구구단"
        onPress={() => {
          navigation.navigate('구구단');
        }}
      />
    </View>
  );
}
*/

/*//ch04 lab03 - add 구구단 screen, add image in about
import React, { useState } from 'react';
import { Text, View, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const text_st = {
  fontSize: 20,
  margin: 10,
};

const input_style = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="구구단" component={MultiplicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MultiplicationScreen() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  const [result, setResult] = useState(x * y);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ paddingTop: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={text_st}>
            {x} X {y} = {result}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              x++;
              setX(x);
              setResult(x * y);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              x--;
              setX(x);
              setResult(x * y);
            }}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              y++;
              setY(y);
              setResult(x * y);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              y--;
              setY(y);
              setResult(x * y);
            }}
          />
        </View>
      </View>
    </View>
  );
}

function HelloScreen() {
  const [greet, setGreet] = useState('Hello');
  const [name, setName] = useState('User');

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>
        {greet}, {name}
      </Text>
      <TextInput style={input_style} onChangeText={setName} />
      <View style={{ margin: 10, flexDirection: 'row-reverse' }}>
        <Button
          title="Nice"
          onPress={() => {
            setGreet('Nice to meet you');
          }}
        />
        <Button
          title="Hello"
          onPress={() => {
            setGreet('Hello');
          }}
        />
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View>
      <Text style={text_st}>This is about the app</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('./assets/cat-icon.png')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Hello"
        onPress={() => {
          navigation.navigate('Hello');
        }}
      />

      <Button
        title="구구단"
        onPress={() => {
          navigation.navigate('구구단');
        }}
      />
    </View>
  );
}
*/

/*//ch04 lab02 - cange Hello --> Hello Ewha
import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const text_st = {
  fontSize: 20,
  margin: 10,
};

const input_style = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HelloScreen() {
  const [greet, setGreet] = useState('Hello');
  const [name, setName] = useState('User');

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>
        {greet}, {name}
      </Text>
      <TextInput style={input_style} onChangeText={setName} />
      <View style={{ margin: 10, flexDirection: 'row-reverse' }}>
        <Button
          title="Nice"
          onPress={() => {
            setGreet('Nice to meet you');
          }}
        />
        <Button
          title="Hello"
          onPress={() => {
            setGreet('Hello');
          }}
        />
      </View>
    </View>
  );
}

function AboutScreen() {
  return <Text style={text_st}>This is about the app</Text>;
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Hello"
        onPress={() => {
          navigation.navigate('Hello');
        }}
      />
    </View>
  );
}
*/

/*//ch04 lab01 - Navigating Screens 
import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const text_st = {
  fontSize: 20,
  margin: 10,
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HelloScreen() {
  return (
    <View>
      <Text style={text_st}>Hello, Navigation</Text>
      <Button title="Hello" />
    </View>
  );
}

function AboutScreen() {
  return <Text style={text_st}>This is about the app</Text>;
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Hello"
        onPress={() => {
          navigation.navigate('Hello');
        }}
      />
    </View>
  );
}
*/

/*// ch03 lab09 - 구구단 using <TextInput>

import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const text_st = {
  fontSize: 30,
  padding: 10,
  margin: 10,
};

const input_st = {
  fontSize: 30,
  borderWidth: 1,
  padding: 10,
  margin: 10,
};

export default function App() {
  // 함수 안에서만 사용
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={input_st} onChangeText={setX} />
        <Text style={text_st}> X </Text>
        <TextInput style={input_st} onChangeText={setY} />
        <Text style={text_st}>= {Number(x) * Number(y)}</Text>
      </View>
    </View>
  );
}
*/

/*// ch03 lab08 - add two numbers
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const text_st = {
  fontSize: 30,
  padding: 10,
  margin: 10,
};

const input_st = {
  fontSize: 30,
  borderWidth: 1,
  padding: 10,
  margin: 10,
};

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={input_st} onChangeText={setX} />
        <Text style={text_st}> + </Text>
        <TextInput style={input_st} onChangeText={setY} />
        <Text style={text_st}>= {Number(x) + Number(y)}</Text>
      </View>
    </View>
  );
}*/

/*// ch03 lab07 - 구구단 앱
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const text_st = {
  fontSize: 30,
  backgroundColor: 'lightgray',
  padding: 10,
  margin: 10,
};

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState(x * y);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ paddingTop: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={text_st}>
            {x} X {y} = {result}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              x++;
              setX(x);
              setResult(x * y);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              x--;
              setX(x);
              setResult(x * y);
            }}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              y++;
              setY(y);
              setResult(x * y);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              y--;
              setY(y);
              setResult(x * y);
            }}
          />
        </View>
      </View>
    </View>
  );
}
*/

/*// ch03 lab06 - Two Counters
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const text_st = {
  fontSize: 30,
  backgroundColor: 'lightgray',
  padding: 10,
  margin: 10,
};

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ paddingTop: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={text_st}>{x}</Text>
          <Text style={text_st}>{y}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              setX(x + 1);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              setX(x - 1);
            }}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Button
            title="  +  "
            onPress={() => {
              setY(y + 1);
            }}
          />
          <Button
            title="  -  "
            onPress={() => {
              setY(y - 1);
            }}
          />
        </View>
      </View>
    </View>
  );
}
*/

/*// ch03 lab05 - Counter App
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const text_st = {
  fontSize: 30,
  backgroundColor: 'lightgray',
  padding: 10,
  margin: 10,
};

export default function App() {
  const [val, setval] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>{val}</Text>
      <Button
        title="Count Up"
        onPress={() => {
          setval(val + 1);
        }}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Count Down"
        onPress={() => {
          setval(val - 1);
        }}
      />
    </View>
  );
}
*/

/*// ch03 lab04 - Hello, Name(chap03 lab2 + lab3a)
import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

const text_style = {
  fontSize: 30,
  backgroundColor: 'lightgrey',
  padding: 10,
  margin: 10,
};
let input_style = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

export default function App() {
  const [greet, setGreet] = useState('Hello');
  const [name, setName] = useState('User');

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_style}>
        {greet}, {name}
      </Text>
      <TextInput style={input_style} onChangeText={setName} />
      <View style={{ margin: 10, flexDirection: 'row-reverse' }}>
        <Button
          title="Nice"
          onPress={() => {
            setGreet('Nice to meet you');
          }}
        />
        <Button
          title="Hello"
          onPress={() => {
            setGreet('Hello');
          }}
        />
      </View>
    </View>
  );
}
*/

/*// chap03 Text Input
import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

let text_style = {
  fontSize: 30,
  backgroundColor: 'lightgrey',
  padding: 10,
  margin: 10,
};
let input_style = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

export default function App() {
  const [name, setName] = useState('User');

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_style}>Hello, {name}</Text>
      <TextInput style={input_style} onChangeText={setName} />
    </View>
  );
}

 */

/*// chap02 카운터 앱
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const text_st = {
  fontSize: 30,
  backgroundColor: 'lightgray',
  padding: 10,
  margin: 10,
};

export default function App() {
  let [val, setval] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>{val}</Text>
      <Button
        title="Count Up"
        onPress={() => {
          setval(() => (val += 1));
        }}
      />
      // 버튼을 구분하기 위해 의미 없는 view를 넣어줌
      <View style={{ height: 10 }}></View>
      <Button
        title="Count Down"
        onPress={() => {
          setval(() => (val -= 1));
        }}
      />
    </View>
  );
}
*/

/* //ch 01 - Hello World
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const head_st = {
  fontSize: 40,
  color: 'blue',
  backgroundColor: 'orange',
  padding: 10,
  maring: 10,
};
const text_st = {
  fontSize: 30,
  backgroundColor: 'lightgrey',
  padding: 10,
  marin: 10,
};

let hello = 'Nice to meet you';

export default function App() {
  const [hello, sethello] = useState('Hello');

  function action() {
    sethello('Nice to meet you');
  }

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={head_st}>Hello Ewha</Text>
      <Text style={text_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Button
        title="PressMe"
        onPress={() => {
          sethello('Hello Ewha');
        }}
      />
      <View style={{ height: 10 }} />
      <Button title="Touch me" onPress={action} />
    </View>
  );
}

*/
