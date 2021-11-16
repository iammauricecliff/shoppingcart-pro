import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography, Container, Grid } from '@material-ui/core';
import { useStyles } from '../styles';
import Filter from './Filter';
import Products from './Products';


const theme = createTheme({
    typography: {
      fontFamily: 'Arial',
      fontSize: 16,
    }
});

export default function BaseComponent(props) {
    const { products, count, productType, productPrice, filterByProductType, filterByProductPrice} = props;
    const styles = useStyles()
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>
            <AppBar className={styles.navColor}>
              <Toolbar className={styles.justifyBetween}>
                  <Box>
                    <a href="/" 
                       style={{textDecoration: 'none', color: '#ff8000'}}>
                         React Shopping Pro
                    </a>
                  </Box>
                  <Box>
                    <Typography>Admin</Typography>
                  </Box>
              </Toolbar>
            </AppBar>
          </header>
            <main className={styles.product}>
                <Container className={styles.container}>
                  <Grid container className={styles.justifyCenter} spacing={2}>
                    <Grid md={9} sm={9} xs={12} item>
                      <Filter 
                        count={count} 
                        productPrice={productPrice}
                        productType={productType}
                        filterByProductType={filterByProductType}
                        filterByProductPrice={filterByProductPrice}
                        />
                      <Products products={products} />
                    </Grid>
                    <Grid md={3} sm={3} xs={12} item>
                      cart list
                    </Grid>
                  </Grid>
                </Container>
            </main>
          <footer>
            <Box className={[styles.navColor, styles.main]}>
              <Box className={styles.justifyCenter}>
                  <Typography 
                    component="h6" 
                    variant="h6">
                    All Right Reserve
                  </Typography>
              </Box>
            </Box>
          </footer>
        </div>
      </ThemeProvider>
    );
}
