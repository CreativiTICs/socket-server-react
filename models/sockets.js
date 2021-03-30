class Sockets {
    constructor(io) {
        this.io = io;
        this.SocketEvents();
    }
    
    SocketEvents(){
        //On Connection
        this.io.on('connection', (socket) => {
            //Escuchar el Evento
            socket.on('mensaje-to-server', (data)=>{
                console.log(data);
                //Enviar mensajes a todos
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}

module.exports = Sockets;