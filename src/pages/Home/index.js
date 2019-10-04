import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  state = {
    products: [
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
    ],
  };

  renderProductItem = ({ image, title, price }) => (
    <ProductItem>
      <ProductImage source={{ uri: image }} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{formatPrice(price)}</ProductPrice>
      <AddButton>
        <ProductAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <ProductAmountText>0</ProductAmountText>
        </ProductAmount>
        <AddButtonText>ADICIONAR</AddButtonText>
      </AddButton>
    </ProductItem>
  );

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    // const { addToCartRequest } = this.props;
    // addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    // const { amount } = this.props;
    return (
      <Container>
        <ProductList
          data={products}
          renderItem={({ item }) => this.renderProductItem(item)}
          keyExtractor={item => item.id}
          horizontal
        />
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;
//     return amount;
//   }, {}),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

export default Home;
