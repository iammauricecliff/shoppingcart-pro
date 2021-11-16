import data from './data.json';
import React from 'react';
import BaseComponent from './Components/BaseComponent';



class App extends  React.Component {
    constructor(props){
      super(props);
      this.state = {
        products: data.products,
        productType: "",
        productPrice: ""
      }
    }

    filterByProductPrice = (e) => { 
          const productType = e.target.value;
          this.setState((state) => ({
             productType: productType,
             products: state.products.slice().sort((a, b) => (
               productType === 'lowest' ?
               ((a.price > b.price) ? 1: -1):
               productType === 'highest' ?
               ((a.price < b.price) ? 1: -1):
                ((a._id > b._id) ? 1: -1)
             )) 
          }))
    }
    
    filterByProductType = (e) => { 
     if(e.target.value === ""){
       this.setState({productType: e.target.value, products: data.products})
     }else {
        this.setState({
          productType: e.target.value,
          products: data.products.filter(product => (
            product.availableProducts.indexOf(e.target.value) >= 0
          ))
        })
     }
    }


    render(){
      return (
        <BaseComponent 
          products={this.state.products} 
          count={this.state.products.length} 
          productType={this.state.productType}
          productPrice={this.state.productPrice}
          filterByProductPrice={this.filterByProductPrice}
          filterByProductType={this.filterByProductType}
        />
      )
  }
}

export default App

