const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Grapes' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Dragon fruit' },
    { id: 6, name: 'Orange' }
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.listen(5006, () => console.log('Server running on port 5006'));