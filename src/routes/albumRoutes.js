const router = require('express').Router();
const ctrl   = require('../controllers/albumController');

router.get('/',       ctrl.listAlbums);
router.get('/:id',    ctrl.getAlbum);
router.post('/',      ctrl.newAlbum);
router.put('/:id',    ctrl.modifyAlbum);
router.delete('/:id', ctrl.deleteAlbum);

module.exports = router;