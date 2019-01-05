import React from "react";
import { shallow } from "enzyme";
import GameHeader from "../src/components/GameHeader";
import { INITIALIZE } from "../src/constants";

test("Should render GameHeader correctly..", () => {
  const wrapper = shallow(<GameHeader players={INITIALIZE.players} />);
  expect(wrapper).toMatchSnapshot();

});
