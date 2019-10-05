import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../styles/colors';

Icons.loadFont();

export const Buttons = styled.View`
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Wrapper = styled.View`
  background: #eee;
  border-radius: 4px;
  flex-grow: 1;
  flex-direction: row;
  padding: 15px;

  justify-content: space-between;
`;

export const Container = styled.SafeAreaView`
  background: ${colors.dark};
  flex: 1;
`;

export const TotalContainer = styled.View`
  height: 200px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  /* flex: 1; */
`;

export const CartItem = styled.View`
  background: #fff;
  /* margin: 10px; */
  padding: 0 10px;
  height: 180px;
  justify-content: space-evenly;
  border-radius: 4px;
`;

export const CartImage = styled.Image`
  width: 80px;
  height: 80px;
  margin: 10px;
`;

export const CartTitle = styled.Text`
  font-size: 16px;
  width: 160px;
`;

export const CartPrice = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const CartDeleteButton = styled.TouchableOpacity``;

export const CartDelete = styled(Icon).attrs({
  name: 'delete-forever',
  color: `${colors.primary}`,
  size: 32,
})``;

export const Plus = styled(Icons).attrs({
  name: 'plus',
  color: `${colors.primary}`,
  size: 20,
})``;

export const OpButton = styled.TouchableOpacity``;

export const Minus = styled(Icons).attrs({
  name: 'minus',
  color: `${colors.primary}`,
  size: 20,
})``;

export const CartAmount = styled.TextInput.attrs({
  editable: false,
})`
  width: 60px;
  background: #fff;
  color: #000;
  margin: 0 5px 0 5px;
  padding: 0 5px 0 5px;
  border-radius: 5px;
  border-color: #999;
`;

export const CartSubTotal = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: ${colors.primary};
  margin: 10px;
  padding: 10px;
  flex-direction: row;
  align-self: stretch;
  height: 50px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const FinishButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

export const CartTotalText = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 22px;
  color: #999;
`;

export const CartTotalPrice = styled.Text`
  font-weight: bold;
  font-size: 26px;
  margin-top: 10px;
`;

export const EmptyCart = styled.View`
  margin-top: 30px;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  height: 180px;
  background: ${colors.light};
`;

export const EmptyCartIcon = styled(Icon).attrs({
  name: 'remove-shopping-cart',
  color: `${colors.primary}`,
  size: 40,
})``;

export const EmptyCartText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #999;
`;
