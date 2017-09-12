/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BpkInput from './BpkInput';

describe('Android', () => {
  describe('BpkInput', () => {
    it('should render correctly', () => {
      const tree = renderer.create(
        <BpkInput text={'Input_text'} />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render placeholder correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={''}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render small correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          small
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render small placeholder correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={''}
          small
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render valid correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          valid
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render small valid correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          valid
          small
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render invalid correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          valid={false}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render small invalid correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          valid={false}
          small
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render disabled correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          disabled
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render small disabled correctly', () => {
      const tree = renderer.create(
        <BpkInput
          placeholder={'placeholder_text'}
          text={'Input_text'}
          disabled
          small
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should apply user-styling correctly', () => {
      const tree = renderer.create(
        <BpkInput
          style={{ width: 200, backgroundColor: 'blue' }}
          placeholder={'placeholder_text'}
          text={'Input_text'}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
