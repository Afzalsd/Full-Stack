const exp = require('express');
let app = exp();
app.use(exp.json())

// Flats data
let flats = [
    { id: 1, type: "3BHK", location: "Downtown", price: 7500000 },
    { id: 2, type: "2BHK", location: "Suburb", price: 5000000 },
    { id: 3, type: "Duplex", location: "City Center", price: 15000000 },
    { id: 4, type: "1BHK", location: "Suburb", price: 3000000 }
]

// Sites data
let sites = [
    { id: 1, location: "Greenfield", area: "500 sq ft", price: 2500000 },
    { id: 2, location: "Bluefield", area: "1000 sq ft", price: 5000000 },
    { id: 3, location: "Redfield", area: "1500 sq ft", price: 7500000 },
]

// Flats endpoints
app.get('/flats', (req, res) => {
    res.send({ message: 'All Flats', payload: flats });
});

app.get('/flats/:id', (req, res) => {
    let idUrl = Number(req.params.id);
    let inFlat = flats.find((flat) => flat.id === idUrl);
    if (inFlat === undefined) {
        res.send({ message: 'Flat not found' });
    } else {
        res.send({ message: 'Flat found', payload: inFlat });
    }
});

app.post('/flats', (req, res) => {
    let newFlat = req.body;
    flats.push(newFlat);
    res.send({ message: 'Flat added', payload: newFlat });
});

app.put('/flats', (req, res) => {
    let editFlat = req.body;
    let ind = flats.findIndex((flat) => flat.id === editFlat.id);
    if (ind === -1) {
        res.send({ message: "Flat not found" });
    } else {
        flats[ind] = editFlat;
        res.send({ message: "Flat updated", payload: editFlat });
    }
});

app.delete('/flats/:id', (req, res) => {
    let idUrl = Number(req.params.id);
    let ind = flats.findIndex((flat) => flat.id === idUrl);
    if (ind === -1) {
        res.send({ message: "Flat not found" });
    } else {
        flats.splice(ind, 1);
        res.send({ message: "Flat deleted" });
    }
});

// Sites endpoints
app.get('/sites', (req, res) => {
    res.send({ message: 'All Sites', payload: sites });
});

app.get('/sites/:id', (req, res) => {
    let idUrl = Number(req.params.id);
    let inSite = sites.find((site) => site.id === idUrl);
    if (inSite === undefined) {
        res.send({ message: 'Site not found' });
    } else {
        res.send({ message: 'Site found', payload: inSite });
    }
});

app.post('/sites', (req, res) => {
    let newSite = req.body;
    sites.push(newSite);
    res.send({ message: 'Site added', payload: newSite });
});

app.put('/sites', (req, res) => {
    let editSite = req.body;
    let ind = sites.findIndex((site) => site.id === editSite.id);
    if (ind === -1) {
        res.send({ message: "Site not found" });
    } else {
        sites[ind] = editSite;
        res.send({ message: "Site updated", payload: editSite });
    }
});

app.delete('/sites/:id', (req, res) => {
    let idUrl = Number(req.params.id);
    let ind = sites.findIndex((site) => site.id === idUrl);
    if (ind === -1) {
        res.send({ message: "Site not found" });
    } else {
        sites.splice(ind, 1);
        res.send({ message: "Site deleted" });
    }
});

app.listen(3500, () => console.log('http server running on port 3500'));