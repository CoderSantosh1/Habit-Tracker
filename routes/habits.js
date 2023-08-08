const express = require('express');
const router = express.Router();
const weekViewController = require('../controllers/weekView');
const homeController = require('../controllers/home')

router.get('/dailyView',homeController.home);
router.post('/createHabit',homeController.create)
router.get('/toggleStatus',homeController.toggleStatus)
router.get('/deleteHabit/:id',homeController.delete)

router.get('/weeklyView', weekViewController.weekView);
router.get('/weeklyView/toggleStatus', weekViewController.toggleStatus);


module.exports = router;