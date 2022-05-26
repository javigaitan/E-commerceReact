const products = [
    {
        id: '1',
        name: 'Bokken Incienso',
        price: 1000 ,
        category: 'Armas',
        img: '',
        stock: 10,
        description:''
    },
    {
        id: '2',
        name: 'Tanto',
        price: 500 ,
        category: 'Armas',
        img: '',
        stock: 10,
        description:''
    },

    {
        id: '3',
        name: 'Hambo',
        price: 400 ,
        category: 'Armas',
        img: '',
        stock: 10,
        description:''
    },

    {
        id: '4',
        name: 'Bokken Guatambu',
        price: 1000 ,
        category: 'Armas',
        img: '',
        stock: 10,
        description:''
    },

    {
        id: '5',
        name: 'Aikidogi Premium',
        price: 5000 ,
        category: 'Indumentaria',
        img: '',
        stock: 10,
        description:''
    },

    {
        id: '6',
        name: 'Aikidogi ',
        price: 3000 ,
        category: 'Indumentaria',
        img: '',
        stock: 10,
        description:''
    },

    {
        id: '7',
        name: 'Hakama',
        price: 2500 ,
        category: 'Indumentaria',
        img: '',
        stock: 10,
        description:''
    },

    {
        id: '8',
        name: 'Cinturones',
        price: 300 ,
        category: 'Sale!',
        img: '',
        stock: 10,
        description:''
    },

]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
        
    })
}