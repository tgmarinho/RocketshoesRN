import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

import {
  Container,
  CartList,
  CartItem,
  CartImage,
  CartTitle,
  CartDelete,
  Minus,
  CartAmount,
  Plus,
  CartPrice,
  FinishButton,
  CartTotalText,
  Row,
  Column,
  Wrapper,
  CartDeleteButton,
  CartSubTotal,
  Buttons,
  CartTotalPrice,
  FinishButtonText,
  OpButton,
  TotalContainer,
  EmptyCart,
  EmptyCartIcon,
  EmptyCartText,
} from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function renderCart(product) {
    return (
      <CartItem>
        <Row>
          <CartImage source={{ uri: product.image }} />
          <Column>
            <CartTitle>{product.title}</CartTitle>
            <CartPrice>{product.price}</CartPrice>
          </Column>
          <CartDeleteButton onPress={() => removeFromCart(product.id)}>
            <CartDelete />
          </CartDeleteButton>
        </Row>
        <Row>
          <Wrapper>
            <Buttons>
              <OpButton
                disabled={product.amount <= 1}
                onPress={() => decrement(product)}
              >
                <Minus />
              </OpButton>
              <CartAmount value={String(product.amount)} />
              <OpButton onPress={() => increment(product)}>
                <Plus />
              </OpButton>
            </Buttons>
            <CartSubTotal>{product.subtotal}</CartSubTotal>
          </Wrapper>
        </Row>
      </CartItem>
    );
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <CartList
            data={cart}
            renderItem={({ item }) => renderCart(item)}
            keyExtractor={item => item.id}
          />

          <TotalContainer>
            <CartTotalText>TOTAL</CartTotalText>
            <CartTotalPrice>{total}</CartTotalPrice>
            <FinishButton>
              <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
            </FinishButton>
          </TotalContainer>
        </>
      ) : (
        <EmptyCart>
          <EmptyCartIcon />
          <EmptyCartText>Seu carrinho está vazio!</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    price: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
