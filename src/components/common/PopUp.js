import React from 'react';
import { View, Text, Modal, TextInput } from 'react-native';
import { Button } from '../common';

const PopUp = ({ visible, title, subTitle, onChangeValue, onAccept, onRefuse, defaultValue }) => {
  const {
    buttonStyle,
    textAreaStyle,
    popupBackground,
    popupContainer,
    subTitleStyle,
    buttonRow
  } = styles;

  const renderTitle = () => {
    if (title) {
      return (<Text style={{ fontSize: 16, texAlign: 'center' }}>{title}</Text>);
    }
    return;
  };

  const renderInput = () => {
    if (onChangeValue) {
      return (
        <View >
          <TextInput
            style={textAreaStyle}
            onChangeText={(text) => onChangeValue(text)}
            multiline
            numberOfLines={4}
            defaultValue={defaultValue}
          />
        </View>
      );
    }
    return;
  };

  return (
    <Modal
      animationType={'slide'}
      transparent
      visible={visible}
    >
      <View style={popupBackground}>
        <View style={popupContainer}>
        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 25, justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 }}>
          {renderTitle()}
          <Text style={subTitleStyle}>{subTitle}</Text>
          {renderInput()}
          <View style={buttonRow}>
            <Button Style={buttonStyle} label="Yes" onPress={() => onAccept()} />
            <Button Style={buttonStyle} label="No" onPress={() => onRefuse()} />
          </View>
        </View>
        </View>
      </View>
     </Modal>
  );
};

const styles = {
  popupBackground: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popupContainer: {
    flexDirection: 'row',
    marginHorizontal: 6,
    padding: 5,
    borderRadius: 15
  },

  buttonStyle: {
    shadowColor: 'rgba(162, 162, 162, 0.50)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingHorizontal: 20,
    borderRadius: 4,
    margin: 10
  },
  textAreaStyle: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    width: 220,
    height: 100
  },
  subTitleStyle: {
    marginTop: 5,
    fontSize: 14,
    color: 'grey'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
export { PopUp };
