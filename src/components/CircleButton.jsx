import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
// import { Feather } from '@expo/vector-icons';
import Icon from './Icon';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size="40" color="#fff" />
      {/* <Feather name={name} size={32} color="#fff" /> */}
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  //   children: string.isRequired, // childrenが必須の場合
  style: shape(),
  name: string.isRequired,
  onPress: func,
};
CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

// childrenが無い場合初期値を設定(上のisRequiredは記述しない)
// CircleButton.defaultProps = {
//   children: '',
// };

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4174D8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevation: 8,//android
  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: '40',
    lineHeight: 40,
  },
});
