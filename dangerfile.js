/*
 *
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
 *
 */

// See http://danger.systems/js if you're not sure what this is.

import includes from 'lodash.includes';
import { danger, warn, message } from 'danger';

const fileChanges = [...danger.git.modified_files, ...danger.git.created_files];

// If any of the packages have changed, the changelog should have been updated.
const changelogModified = includes(fileChanges, 'changelog.md');
const packagesModified = fileChanges.filter(filePath => filePath.startsWith('packages/')).length > 0;
if (packagesModified && !changelogModified) {
  warn('One or more packages have changed, but `changelog.md` wasn\'t updated.');
}

// Always be nice
message('Thanks for the PR 🎉.');
