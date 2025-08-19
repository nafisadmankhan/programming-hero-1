const actor = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Movie Cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [
            {   name: 'No: 1',  year: 2025  },
            {   name: 'King Khan', year: 2018   },
        ],
    act: function() {
        console.log('Acting like Sakib Khan');
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Musk',
            country: 'USA',
        }
    }
}

// console.log(actor)
// console.log(actor.car)
console.log(actor.act)
actor.act()