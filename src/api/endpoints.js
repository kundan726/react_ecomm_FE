const ENDPOINTS = {
    'dev': {
        'LOGIN_MODULE': {
            'SIGN_UP': 'http://localhost:3000/api/auth/signUp',
            'LOGIN': 'http://localhost:3000/api/auth/login'
        },
        'PRODUCT_MODULE': {
            'productApi': 'https://freetestapi.com/api/v1/products',
            'addProduct': 'http://localhost:3000/api/products/addProduct'
        }
    }
}

export default ENDPOINTS ;