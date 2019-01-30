import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../src/store";
import NewsTicker from "../src/components/NewsTicker";

test("Should render NewsTicker correctly..", () => {
  const wrapper = shallow(<Provider store={store}><NewsTicker/></Provider>);
  expect(wrapper).toMatchSnapshot();

});

