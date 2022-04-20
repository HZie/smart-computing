// Double Dice
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

/*
// Roll the Dice
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

/*
// piano app
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

/*
//ch04 lab04 - drawer navigator
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

/*
//ch04 lab03 - add 구구단 screen, add image in about
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

/*
//ch04 lab02 - cange Hello --> Hello Ewha
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

/*
//ch04 lab01 - Navigating Screens 
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
/*
// ch03 lab09 - 구구단 using <TextInput>

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

/*
// ch03 lab08 - add two numbers
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

/*
// ch03 lab07 - 구구단 앱
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

/*
// ch03 lab06 - Two Counters
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

/*
// ch03 lab05 - Counter App
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
/*
// ch03 lab04 - Hello, Name(chap03 lab2 + lab3a)
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
/*

// chap03 Text Input
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

/*
// chap02 카운터 앱
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

/*
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
