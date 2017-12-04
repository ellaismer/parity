// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import Home from './';

const TEST_APP_HISTORY = [];

let api;
let component;
let instance;
let store;

function createStore () {
  store = {
    dispatch: sinon.stub(),
    subscribe: sinon.stub(),
    getState: () => {
      return {
        nodeStatus: {
          nodeKind: {
            'availability': 'personal'
          }
        }
      };
    }
  };

  return store;
}

function createApi () {
  api = {
    parity: {
      listRecentDapps: sinon.stub().resolves(TEST_APP_HISTORY)
    }
  };

  return api;
}

function render () {
  component = shallow(
    <Home />
  );
  instance = component.instance();

  return component;
}

describe('views/Home', () => {
  beforeEach(() => {
    render();
  });

  it('renders defaults', () => {
    expect(component).to.be.ok;
  });

  describe('components', () => {
    it('renders News', () => {
      expect(component.find('News').length).to.equal(1);
    });
  });
});
