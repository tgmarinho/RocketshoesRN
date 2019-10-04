import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ProductItem = styled.View`
  border-radius: 4px;
  margin: 10px;
  padding: 15px;
  background: #fff;
  width: 250px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
`;
export const ProductPrice = styled.Text`
  margin-top: 10px;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
