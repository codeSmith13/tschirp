import * as express from 'express';
import { CreateChirp, GetChirp, DeleteChirp, GetChirps, UpdateChirp } from './chirpstore'
const router = express.Router();

router.get('/:chirpid?', (req, res) => {
    const chirpid = req.params.id;
    if (chirpid) {
        const chirp = GetChirp(chirpid);
        res.json({ id: chirpid, ...chirp })
    } else {
       res.send(GetChirps())
        
    }
})



router.post('/', (req, res) => {
    console.log(req.body)
    CreateChirp(req.body)
    res.sendStatus(200)
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    DeleteChirp(id)
    res.status(200).json(`Chirp #${id} deleted!`)
})


router.put('/:id', (req, res) => {
    const updatedChirp = {
        name: req.body.name,
        text: req.body.text
    }
    const id = req.params.id
    console.log(id, updatedChirp)
    UpdateChirp(id, updatedChirp)

    res.status(200).json(`Chirp ${id} Updated!`)
})

export default router;