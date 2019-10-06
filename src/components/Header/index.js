import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  Button,
} from './styles';

Icon.loadFont();

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Button onPress={() => navigation.navigate('Home')}>
          <Logo />
        </Button>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
