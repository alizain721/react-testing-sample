import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
 import * as renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

import Button from './../Button';

it("Button renders without crashing", ()=> {
  const div = document.createElement("div")
  ReactDom.render(<Button> </Button>, div)
});

it("Renders buutton correctly", ()=> {
  const { getByTestId } = render(<Button label="click me please"> </Button>)
  expect(getByTestId('button')).toHaveTextContent("click me please")
})

it("Matches snapshot", ()=> {
  const tree = renderer.create(<Button label="Save"> </Button>).toJSON();
  expect(tree).toMatchSnapshot();
})
