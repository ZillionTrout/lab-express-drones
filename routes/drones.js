const express = require('express');
const Drones = require('../models/Drone.model');
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drones.find()
  .then(data => {
    res.render('drones/list', {data})
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed, image } = req.body
  Drones.create({name, propellers, maxSpeed, image})
  res.redirect('/drones')
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drones.findById(req.params.id)
  .then(drone =>{
    res.render('drones/update-form', {drone})
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed} = req.body
  Drones.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, { new : true })
  .then (drone=>{
    res.redirect('/drones')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drones.findByIdAndDelete(req.params.id)
  .then(data=> res.redirect('/drones'))
});

module.exports = router;
