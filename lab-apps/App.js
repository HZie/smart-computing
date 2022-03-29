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
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

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
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

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
}
*/

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
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [result, setResult] = useState(x * y);

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
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

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
  let [val, setval] = useState(0);

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
