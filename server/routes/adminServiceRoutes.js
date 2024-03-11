import express from 'express'
import { addPlayer, addTeam, changeCaptian, changeCoach, getTeams } from '../controllers/adminServiceController.js'

const router=express.Router()

router.post('/addTeam',addTeam)

router.get('/getTeams',getTeams)

router.patch('/addPlayer/:id',addPlayer)

router.patch('/changeCaptain/:id',changeCaptian)

router.patch('/changeCoach/:id',changeCoach)

export default router