/*const products = [
    {
        id: '1',
        name: 'Flautita',
        price: 10,
        category: 'pan',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRqL1KEiRmsTLCcGgmYDX1WDZ54raMgjPdw&usqp=CAU',
        stock: 50,
        description: 'Pan tostado'
    },
    
    {
        id: '2',
        name: 'Croissant',
        price: 20,
        category: 'medialuna',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24rdg5QPV6QZuiPiDeasp2OwRx7a_YRj_-A&usqp=CAU',
        stock: 60,
        description: 'Croissant'
    },
    
    {
        id: '3',
        name: 'Oreo Gigante',
        price: 30,
        category: 'galleta',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3joec6uvGL0lQkHaMDOyEQx1Zp9lWSyIvfw&usqp=CAU',
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

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}*/