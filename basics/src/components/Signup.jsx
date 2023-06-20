import React from "react";

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = { color: 'green' };
    }
    componentDidMount() {
        if (this.props.product.title.includes('iPhone')) {
            this.setState({ color: "red" });
        }
    }
    componentDidUpdate() {
        console.log("Color changed");
    }
    shouldComponentUpdate() {
        
    }
    render() {
        return <div style={{
            color:this.state.color
        }}>
            {this.props.product.title}
        </div>
    }
}
export class Signup extends React.Component{

    constructor(props) {
        super(props);
        console.log("Component initiated");
        this.state = { products:[] };
    }
    async getProducts() {
        const response = await fetch("https://dummyjson.com/products");
        const {products} = await response.json();
        this.setState({ products });
    }
    componentDidMount() {
        this.getProducts();
        console.log("Mounted");
    }
    componentDidUpdate() {
        console.log("Updated")
        console.log(this.state.products)
    }
    doSum () {
        //do sum
        this.setState({sum:this.state.sum+1})
    }
    componentWillUnmount() {
        console.log("Unmounting")   
        this.setState({sum:0})
    }
    
    render() {
        console.log("Render")
        return <div>
            {this.state.products && this.state.products.map((product) => <Product product={product} />)}
        </div>
    }
}
