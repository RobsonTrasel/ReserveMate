import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Server root req working')
})


export default router