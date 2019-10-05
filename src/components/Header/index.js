import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  Button,
} from './styles';

Icon.loadFont();

function Header({ navigation, cartSize }) {
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

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
