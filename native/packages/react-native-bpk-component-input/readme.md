# react-native-bpk-component-input

> Backpack React Native text input component.

## Installation

```sh
npm install react-native-bpk-component-input --save-dev
```

## Usage

```js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BpkInput from 'react-native-bpk-component-input';
import * as TOKENS from 'bpk-tokens/tokens/ios/base.react.native.es6';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BpkInput
          style={styles.input}
          placeholder={'placeholder'}
          value={'Large'}
        />
        <BpkInput
          style={styles.input}
          placeholder={'placeholder'}
          value={'Small'}
          small
        />
        <BpkInput
          style={styles.input}
          placeholder={'valid'}
          value={'Valid'}
          valid
          small
        />
        <BpkInput
          style={styles.input}
          placeholder={'valid'}
          value={'Invalid'}
          valid={false}
          small
        />
        <BpkInput
          style={styles.input}
          placeholder={'placeholder'}
          value={''}
          small
        />
        <BpkInput
          style={styles.input}
          disabled
          placeholder={'placeholder'}
          value={'disabled'}
          small
        />
        <BpkInput
          style={styles.input}
          secureTextEntry
          placeholder={'password'}
          value={'password'}
          small
        />
        <BpkInput
          style={styles.input}
          keyboardType={'phone-pad'}
          placeholder={'Phone number'}
          value={''}
          small
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: TOKENS.spacingBase,
  },
  input: {
    marginBottom: TOKENS.spacingBase,
  }
});
```

## Props

| Property    | PropType  | Required | Default Value |
| ----------- | --------- | -------- | ------------- |
| value       | string    | true     | -             |
| disabled    | bool      | false    | false         |
| small       | bool      | false    | false         |
| style       | style     | false    | null          |
| valid       | bool      | false    | null          |
