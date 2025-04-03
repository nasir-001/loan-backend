const express = require('express');
const router = express.Router();
const { authenticate, isSuperAdmin } = require('../middlewares/authMiddleware');
const { 
  getAllLoans, 
  getUserLoans, 
  getExpiredLoans, 
  deleteLoan 
} = require('../controllers/loanController');

router.use(authenticate);

router.get('/', getAllLoans);
router.get('/:userEmail/get', getUserLoans);
router.get('/expired', getExpiredLoans);
router.delete('/:loanId/delete', isSuperAdmin, deleteLoan);

module.exports = router;