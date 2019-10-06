import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProductList,
  ProductItem,
  AddButton,
  ProductPrice,
  ProductTitle,
  ProductImage,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function renderProductItem({ id, image, title, price }) {
    return (
      <ProductItem>
        <ProductImage source={{ uri: image }} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
        <AddButton onPress={() => dispatch(CartActions.addToCartRequest(id))}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText> {amount[id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </ProductItem>
    );
  }

  return (
    <Container>
      <ProductList
        data={products}
        renderItem={({ item }) => renderProductItem(item)}
        keyExtractor={item => item.id}
        horizontal
      />
    </Container>
  );
}
