import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Box} from '@material-ui/core';
import React, { Component } from 'react'

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    
    render() {
        return (
            <div>
                <Grid container >
                    {this.props.products.map(product => (
                        <Grid item md={4} sm={6} xs={12} className="justifyContent" key={product._id}>
                            <Card size="sm" className="productimages">
                                <CardActionArea>
                                    <a href={'#' + product._id}>
                                        <CardMedia 
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                        className="images"
                                        >
                                        </CardMedia>
                                    </a>
                                </CardActionArea>
                                <CardContent>
                                    <Box>
                                      <Typography component="h5" variant="h5">
                                        { product.name } - ${ product.price }
                                      </Typography>
                                    </Box>
                                    <Box>
                                      <Typography component="p" variant="body1">
                                        { product.description }
                                      </Typography>
                                    </Box>
                                </CardContent>
                                <Box style={{display: 'flex', justifyContent:'center'}}>
                                    <Button variant="contained" 
                                      style={{background: '#ff8000', color: 'white'}}>
                                          <Typography component="p" variaant="button">
                                            Add To Cart
                                          </Typography>
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid> 
            </div>
        )
    }
}

