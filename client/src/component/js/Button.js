import React from 'react';
import { Button } from 'semantic-ui-react';
import Common from '../../commonStyle';

const style = {
  primary: {
    color: Common.grey,
    padding: '0.2em 0.6em',
    margin: '0.3em 0.3em 0.3em 0',
    fontSize: Common.buttonTextSize,
    fontWeight: 400,
    backgroundColor: Common.white,
  },
  primaryActive: {
    color: Common.black,
    padding: '0.2em 0.6em',
    margin: '0.3em 0.3em 0.3em 0',
    fontSize: Common.buttonTextSize,
    fontWeight: 400,
    backgroundColor: Common.green,
  },
}

const MyButton = (props) => {
  return <Button size='small' style={(props.active)? style.primaryActive : style.primary} onclick={props.onClick}>{props.children}</Button>;
}

export default MyButton;
