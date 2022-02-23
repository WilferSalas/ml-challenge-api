// @packages
import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = 3001

app.use('/', (_: Request, res: Response) => {
  res.status(200).send('Hello from Express')
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
