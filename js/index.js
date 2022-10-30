const store = {
    name: 'Boston',
    address: {
        country: 'New Zealand',
        city: 'Wellington',
        street: 'Hunter St',
        houseNumber: '77',
    }
};
store.clients = {};
store.clients['Olena Demchyk'] = {
    quantity: 1,
    bonuses: 100,
};
store.clients['Yuriy Duchev'] = {
    quantity: 2,
    bonuses: 200,
};
store.clients['Mikhail Hitko'] = {
    quantity: 3,
    bonuses: 300,
};
store.clients['Viacheslav Koniev'] = {
    quantity: 4,
    bonuses: 400,
};
store.clients['Bohdan Onatskyi'] = {
    quantity: 5,
    bonuses: 500,
};
console.log(store)
