const express = require('express');
const router = express.Router();

const SessionController = require('./controllers/sessionController');
const AccessibilityController = require('./controllers/AccessibilityController');
const DashboardController = require('./controllers/DashboardController');
const ExportController = require('./controllers/ExportController');

router.post('/session/start', SessionController.start);
router.post('/session/:id/pause', SessionController.pause);
router.post('/session/:id/resume', SessionController.resume);
router.post('/session/:id/complete', SessionController.complete);

router.put('/accessibility', AccessibilityController.update);
router.get('/accessibility/:userId', AccessibilityController.get);

router.get('/dashboard/:userId', DashboardController.summary);

router.post('/export/csv', ExportController.exportCsv);

module.exports = router;
