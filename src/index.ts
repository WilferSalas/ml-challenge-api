// @packages
const express = require('express');
const cors = require('cors');

// @scripts
const routerApi = require('./routes/index.ts')

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())
routerApi(app)

app.get('/', (_: any, res: any) => {
  res.status(200).send('Hello from Express')
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
