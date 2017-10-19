import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import path from 'path';

import serverRenderer from '../renderers/server';

export class Server {
    app;
    server;
    io;
    port;

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIo(this.server);

        this.config();
        this.listen();
    }

    config() {
        this.port = process.env.PORT || 8080;
        this.app.use(express.static('public'));
        this.app.set('view engine', 'ejs');
    }

    listen() {

        this.app.get('/', function (req, res) {
            res.render(path.join(process.cwd(), 'views', 'index.ejs'), {
                initialContent: serverRenderer()
            });
        });


        this.io.on('connection', function (socket) {
            console.log('a user connected');

            socket.on('disconnect', function () {
                console.log('user disconnected');
            });

            socket.on('block-position', function (msg) {
                console.log('posision - ', msg);
                socket.broadcast.emit('block-position', msg);
            });
        });


        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }
}

new Server();