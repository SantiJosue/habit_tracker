import 'dotenv/config'
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true
}

console.log(corsOptions)
console.log(JSON.stringify(process.env.FRONTEND_URL))

export default corsOptions