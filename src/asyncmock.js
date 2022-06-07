const products = [
    {
        id: '1',
        name: 'Bokken Incienso',
        price: 1000 ,
        category: 'Armas',
        img: 'https://www.budokanweb.com/wp-content/uploads/2020/01/hakama1-300x300.jpg',
        stock: 10,
        description:'Bokken para realizar artes marciales de incienso'
    },
    {
        id: '2',
        name: 'Tanto',
        price: 500 ,
        category: 'Armas',
        img: 'https://www.budokanweb.com/wp-content/uploads/2020/01/hakama1-300x300.jpg',
        stock: 10,
        description:'Tanto, cuchillo de madera para practicas de aikido'
    },

    {
        id: '3',
        name: 'Hambo',
        price: 400 ,
        category: 'Armas',
        img: 'https://www.budokanweb.com/wp-content/uploads/2020/01/hakama1-300x300.jpg',
        stock: 10,
        description:'hambo para realizar artes marciales'
    },

    {
        id: '4',
        name: 'Bokken Guatambu',
        price: 1000 ,
        category: 'Armas',
        img: '',
        stock: 10,
        description:'Bokken de guatambu para practicas de aikido'
    },

    {
        id: '5',
        name: 'Aikidogi Premium',
        price: 5000 ,
        category: 'Indumentaria',
        img: '',
        stock: 10,
        description:'Traje de aikido tramado grueso'
    },

    {
        id: '6',
        name: 'Aikidogi ',
        price: 3000 ,
        category: 'Indumentaria',
        img: '',
        stock: 10,
        description:'Traje de aikido estandar '
    },

    {
        id: '7',
        name: 'Hakama',
        price: 2500 ,
        category: 'Indumentaria',
        img: '',
        stock: 10,
        description:'Hakama para Danes'
    },

    {
        id: '8',
        name: 'Cinturones',
        price: 300 ,
        category: 'Sale',
        img: '',
        stock: 10,
        description:'Obis '
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
        
    })
}



export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}