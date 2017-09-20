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

import React from 'react';
import pickBy from 'lodash/pickBy';
import includes from 'lodash/includes';
import TOKENS from 'bpk-tokens/tokens/base.common';

import breakpointReadme from 'bpk-component-breakpoint/readme.md';

import DocsPageBuilder from './../../components/DocsPageBuilder';
import Paragraph from './../../components/Paragraph';

const breakpoints = pickBy(TOKENS, (value, key) => includes(key, 'breakpoint') && !includes(key, 'breakpointQuery'));

const BreakpointsPage = () => <DocsPageBuilder
  title="Breakpoints"
  blurb={[
    <Paragraph>
      To simplify things, Backpack uses only three breakpoints optimised for mobile, tablet and desktop viewports.
    </Paragraph>,
  ]}
  tokenMap={breakpoints}
  readme={breakpointReadme}
  sassdocId="breakpoints"
/>;

export default BreakpointsPage;