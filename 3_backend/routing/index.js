const express = require('express')
const app = express()

app.use(express.json())

let plants = [
    { id: 1, name: 'Snake Plant', type: 'Indoor', sunlight: 'Low', watering: 'Low' },
    { id: 2, name: 'Fiddle Leaf Fig', type: 'Indoor', sunlight: 'High', watering: 'Medium' },
    { id: 3, name: 'Peace Lily', type: 'Indoor', sunlight: 'Low', watering: 'High' },
    { id: 4, name: 'Cactus', type: 'Outdoor', sunlight: 'High', watering: 'Low' },
    { id: 5, name: 'Succulent', type: 'Outdoor', sunlight: 'Medium', watering: 'Low' }
];

// Read all plants or filter by type and/or sunlight requirements
app.get('/plants', (req, res) => {
    const { type, sunlight } = req.query;
  
    let filteredPlants = plants;
  
    // Filter by type if type query parameter is provided
    if (type) {
      filteredPlants = filteredPlants.filter(plant => plant.type.toLowerCase() === type.toLowerCase());
    }
  
    // Filter by sunlight if sunlight query parameter is provided
    if (sunlight) {
      filteredPlants = filteredPlants.filter(plant => plant.sunlight.toLowerCase() === sunlight.toLowerCase());
    }
  
    res.status(200).send(filteredPlants)
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});