var config = {}

// Update to have your correct username and password
config.mongoURI = {
<<<<<<< HEAD
    production: 'mongodb+srv://richardgitonga:Quality@cluster0.igm2h.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://richardgitonga:Quality@cluster0.igm2h.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb+srv://richardgitonga:Quality@cluster0.igm2h.mongodb.net/darkroom?retryWrites=true&w=majority',
=======
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
>>>>>>> test
}
module.exports = config;
