const App = require('./app')

class Server {
    constructor() {
        this.app = new App();

        this.app.getApp().listen(8080, async () => {
            console.log('Project running on port 8080')
        })
    }
}

new Server()
