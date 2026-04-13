const router = require('express').Router();
const ctrl   = require('../controllers/artistaController');

router.get('/',       ctrl.listArtistas);
router.get('/:id',    ctrl.getArtista);
router.post('/',      ctrl.newArtista);
router.put('/:id',    ctrl.modifyArtista);
router.delete('/:id', ctrl.deleteArtista);

module.exports = router;