import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import BpkInput from '../../packages/react-native-bpk-component-input';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    padding: 12,
    width: '100%',
  },
  input: {
    marginBottom: 12,
  },
});

storiesOf('BpkInput', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('Default', () => (
    <View
      style={styles.container}
    >
      <BpkInput
        style={styles.input}
        placeholder={'placeholder'}
        text={'Large'}
      />
      <BpkInput
        style={styles.input}
        small
        placeholder={'placeholder'}
        text={'Small'}
      />
      <BpkInput
        style={styles.input}
        small
        placeholder={'valid'}
        text={'Valid'}
        valid
      />
      <BpkInput
        style={styles.input}
        placeholder={'valid'}
        text={'Invalid'}
        valid={false}
      />
      <BpkInput
        style={styles.input}
        placeholder={'Large placeholder'}
        text={''}
      />
      <BpkInput
        style={styles.input}
        disabled
        small
        placeholder={'placeholder'}
        text={'disabled'}
      />
      <BpkInput
        style={styles.input}
        small
        secureTextEntry
        placeholder={'password'}
        text={'password'}
      />
      <BpkInput
        style={styles.input}
        small
        keyboardType={'phone-pad'}
        placeholder={'Phone number'}
        text={''}
      />
    </View>
    ));
