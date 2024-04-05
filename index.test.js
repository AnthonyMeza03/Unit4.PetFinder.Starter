const express = require('express');
const app = express();
let pets = [
    { id: 1, name: 'Fluffy', species: 'Cat', owner: 'Alice' },
    { id: 2, name: 'Rex', species: 'Dog', owner: 'Bob' }
];
app.get('/api/pets', (req, res) => {
    res.json(pets);
});
app.get('/api/pets/:name', (req, res) => {
    const petName = req.params.name;
    const foundPets = pets.filter(pet => pet.name.toLowerCase() === petName.toLowerCase());
    res.json(foundPets);
});
app.get('/api/pets/owner/:ownerName', (req, res) => {
    const ownerName = req.params.ownerName;
    const foundPets = pets.filter(pet => pet.owner.toLowerCase() === ownerName.toLowerCase());
    res.json(foundPets);
});
app.get('/index.html', (req, res) => {
});
app.get('/app', (req, res) => {
});
r
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});