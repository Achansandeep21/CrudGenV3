import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/Count', GetDataOnlyFunc);

export { router };