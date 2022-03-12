import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import { dirname } from 'path/posix';
import mainRoutes from './routes/index'


dotenv.config();

const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')))

//Rotas

server.use(mainRoutes);

server.use((req, res)=>{
    res.send('pagina não encontradan')
})

server.listen(process.env.PORT)
