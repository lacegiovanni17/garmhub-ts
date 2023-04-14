import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import mongoose from 'mongoose'

dotenv.config()

const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost/garmhubdb'
mongoose.set('strictQuery', true)
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to mongodb')
    })
    .catch(() => {
        console.log('error connecting to mongodb')
    })

const app = express()

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
)

app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})

app.get('/api/products/:slug', (req: Request, res: Response) => {
    res.json(sampleProducts.find((x) => x.slug === req.params.slug))
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})