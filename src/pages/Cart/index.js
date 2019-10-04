import React from 'react';

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
} from './styles';

export default function Cart() {
  function renderCart(product) {
    return (
      <CartItem>
        <Row>
          <CartImage source={{ uri: product.image }} />
          <Column>
            <CartTitle>{product.title}</CartTitle>
            <CartPrice>{product.price}</CartPrice>
          </Column>
          <CartDeleteButton>
            <CartDelete />
          </CartDeleteButton>
        </Row>
        <Row>
          <Wrapper>
            <Buttons>
              <OpButton>
                <Minus />
              </OpButton>
              <CartAmount value={3} />
              <OpButton>
                <Plus />
              </OpButton>
            </Buttons>
            <CartSubTotal>R$ 2.123,22</CartSubTotal>
          </Wrapper>
        </Row>
      </CartItem>
    );
  }

  return (
    <Container>
      <CartList
        data={[
          {
            id: 1,
            title: 'Tênis de Caminhada Leve Confortável',
            price: 179.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          },
          {
            id: 2,
            title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
            price: 139.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
          },
          {
            id: 3,
            title: 'Tênis Adidas Duramo Lite 2.0',
            price: 219.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
          },
          {
            id: 5,
            title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
            price: 139.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
          },
          {
            id: 6,
            title: 'Tênis Adidas Duramo Lite 2.0',
            price: 219.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
          },
          {
            id: 4,
            title: 'Tênis de Caminhada Leve Confortável',
            price: 179.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          },
        ]}
        renderItem={({ item }) => renderCart(item)}
        keyExtractor={item => item.id}
      />

      <TotalContainer>
        <CartTotalText>TOTAL</CartTotalText>
        <CartTotalPrice>R$ 2312312</CartTotalPrice>
        <FinishButton>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </TotalContainer>
    </Container>
  );
}
