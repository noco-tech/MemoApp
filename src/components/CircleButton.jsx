import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

// childrenが必須の場合
CircleButton.propTypes = {
  children: string.isRequired,
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
