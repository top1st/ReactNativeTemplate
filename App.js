import React from "react";
import Setup from "./src/boot/setup";
import { Container, Button, Text } from 'native-base';

export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}
