product {
    id: Number,
    productName: String,
    price: Number
}

user {
    id: Number,
    login: String,
    password: String,
    likedProducts: [Number, Number, Number, ...],
    purchasedProducts: [Number, Number, Number, ...],
    shoppingCart: [Number, Number, Number, ...],
    //массивы с id товаров
    isUserAdmin: Boolean
}