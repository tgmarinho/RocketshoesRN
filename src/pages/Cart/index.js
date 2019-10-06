import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      price: formatPrice(product.price),
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
          <CartDeleteButton
            onPress={() => dispatch(CartActions.removeFromCart(product.id))}
          >
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
