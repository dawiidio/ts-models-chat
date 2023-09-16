interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    subscriptionType: 'basic' | 'standard' | 'premium';
    paymentMethod: {
        cardNumber: string;
        expiryDate: string;
        cvv: string;
        cardHolderName: string;
    };
    watchList: string[];
    viewedMovies: string[];    
}