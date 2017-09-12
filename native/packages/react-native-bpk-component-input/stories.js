import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import BpkInput from '../../packages/react-native-bpk-component-input';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 12,
    width: '100%',
  },
});

storiesOf('BpkInput', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('Default', () => (
    <BpkInput
      placeholder={'placeholder'}
      value={'Large'}
    />
  ))
  .add('Default', () => (
    <BpkInput
      placeholder={'placeholder'}
      value={'Large'}
    />
  ))
  .add('With Clear Button', () => (
    <BpkInput
      small
      placeholder={'placeholder'}
      value={'Edit me!'}
      clearButtonMode={'while-editing'}
    />
  ))
  .add('Valid', () => (
    <BpkInput
      placeholder={'valid'}
      value={'Valid'}
      valid
    />
  ))
  .add('Invalid', () => (
    <BpkInput
      placeholder={'valid'}
      value={'Invalid'}
      valid={false}
    />
  ))
  .add('Placeholder', () => (
    <BpkInput
      placeholder={'Large placeholder'}
      value={''}
    />
  ))
  .add('Disabled', () => (
    <BpkInput
      disabled
      placeholder={'placeholder'}
      value={'disabled'}
    />
  ))
  .add('Password', () => (
    <BpkInput
      secureTextEntry
      placeholder={'password'}
      value={'password'}
    />
  ))
  .add('Phone', () => (
    <BpkInput
      keyboardType={'phone-pad'}
      placeholder={'Phone number'}
      value={''}
    />
  ));
