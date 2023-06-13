const products = [
    {
        id: '1',
        name: 'Flautita',
        price: 10,
        category: 'pan',
        img:'',
        stock: 50,
        description: 'Pan tostado'
    },
    
    {
        id: '2',
        name: 'Croissant',
        price: 20,
        category: 'medialuna',
        img:'',
        stock: 60,
        description: 'Croissant'
    },
    
    {
        id: '3',
        name: 'Oreo Gigante',
        price: 30,
        category: 'galleta',
        img:'',
        stock: 30,
        description: 'Galleta Oreo gigante'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

