/**
 * ReactNative Button Components
 *
 * @class      RNButton (name)
 * @param      {<type>}  props   The properties
 * @return     {<type>}  { description_of_the_return_value }
 */

import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// const RaisedButton = props => <Button  {...props} />;
const RButton = ({title = 'Not Title', screenName, color}) => {
  const navigation = useNavigation();
  return (
    <Button
      title={title}
      onPress={() =>
        screenName &&
        navigation.navigate(screenName, {
          title,
        })
      }
      color={color}
    />
  );
};
export default RButton;
