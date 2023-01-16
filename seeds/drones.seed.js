//No se que está mal aquí, terminé metiendo los drones a mano :_)
const mongoose = require('mongoose');
const Drones = require('../models/Drone.model');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drones.create(drones)
    .then((drones) => {
    console.log(`Created ${drones.length} drones`);
    // mongoose.connection.close();
    })
    .catch((err) =>
    console.log(`An error occurred while creating drones from the DB: ${err}`)
    );