import { Grid, Box } from '@material-ui/core'
import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <Grid container className="borderBottom">
                <Grid md={4}  xs={6} className="justifyContent" item>
                    <Box className="filter-result">
                    {this.props.count}  Products
                    </Box>
                </Grid>
                <Grid md={4}  xs={6} className="justifyContent" item>
                    <Box>
                        Order By Price {" "}
                        <select value={this.props.productPrice} onChange={this.props.filterByProductPrice}>
                            <option value="">All Price</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </Box>
                </Grid>
                <Grid md={4}  xs={12} className="justifyContent" item>
                    <Box>
                        Filter Available Product {" "}
                        <select value={this.props.productType} onChange={this.props.filterByProductType}>
                            <option value="">All Product</option>
                            <option value="burgers">Burgers</option>
                            <option value="drinks">Drinks</option>
                            <option value="breakfast">Breakfast</option>
                        </select>
                    </Box>
                </Grid>
                <hr></hr>
            </Grid>
        )
    }
}
