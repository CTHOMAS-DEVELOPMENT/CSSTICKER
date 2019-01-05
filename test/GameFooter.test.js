import React from "react";
import { shallow } from "enzyme";
import GameFooter from "../src/components/GameFooter";
import { INITIALIZE } from "../src/constants";

test("Should render GameFooter correctly..", () => {
  const wrapper = shallow(<GameFooter players={INITIALIZE.players} />);
  expect(wrapper).toMatchSnapshot();

});
