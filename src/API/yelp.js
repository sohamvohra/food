import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer LQNpJF9E3w4cXwQ3KYhNn_CFo-ukggE4I57CokyuRbcyUHJI8xM7bYsZmmcZ9-quAg8tquxCl1exVi5EcAYOmfjaD67qN2uBGSHz2ur6IJnop4sha4ylKoByn7o5ZHYx'
    }
})