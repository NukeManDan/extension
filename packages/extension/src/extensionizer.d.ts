// Copyright 2019 @polkadot/extension authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

declare var gBrowser: undefined | {
  selectedBrowser: {
    contentDocument: Document
  }
};

declare module 'extensionizer' {
  const extensionizer: typeof chrome;

  export default extensionizer;
}