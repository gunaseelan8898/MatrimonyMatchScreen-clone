import User from '../models/user';
const USER = [
    new User(
        'u1',
        'Priya',
        require('../assets/user/priya.jpeg'),
        26,
        `5'5`,
        'Mudaliyar',
        'Chithirai',
        'BE',
        'Software Engineer',
        'Chennai',
        'TamilNadu',

    ),
    new User(
        'u2',
        'Mirnal',
        require('../assets/user/mirnal.jpeg'),
        24,
        `5'9`,
        'Naidu',
        'Avittam',
        'B.Sc',
        'Test Analyst',
        'Madurai',
        'TamilNadu',
    ),
    new User(
        'u3',
        'Bala',
        require('../assets/user/bala.jpeg'),
        28,
        `6'3`,
        'Thevar',
        'Unknown',
        'BE',
        'Fitness model',
        'Chennai',
        'TamilNadu',
    ),
   
]

export default USER;