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
      text={'Large'}
    />
    ))
      .add('Small', () => (
        <BpkInput
          small
          placeholder={'placeholder'}
          text={'Small'}
        />
    ))
      .add('Valid', () => (
        <BpkInput
          placeholder={'valid'}
          text={'Valid'}
          valid
        />
    ))
      .add('Invalid', () => (
        <BpkInput
          placeholder={'valid'}
          text={'Invalid'}
          valid={false}
        />
    ))
      .add('Placeholder', () => (
        <BpkInput
          placeholder={'Large placeholder'}
          text={''}
        />
    ))
      .add('Disabled', () => (
        <BpkInput
          disabled
          placeholder={'placeholder'}
          text={'disabled'}
        />
    ))
      .add('Password', () => (
        <BpkInput
          secureTextEntry
          placeholder={'password'}
          text={'password'}
        />
    ))
      .add('Phone', () => (
        <BpkInput
          keyboardType={'phone-pad'}
          placeholder={'Phone number'}
          text={''}
        />
    ));
