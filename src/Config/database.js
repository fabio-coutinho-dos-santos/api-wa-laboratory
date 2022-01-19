const mongoose = require('mongoose')
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

//configuration to use quth docker--------------------------------------------------

// const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

// mongoose.connect(
//   `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
//   {
//     useNewUrlParser: true,
//   }
// )

// mongoose.connection.on('error', () => console.error('connection error:'))
// mongoose.connection.once('open', () => console.log('database connected'))

//------------------------------------------------------------------------------------

mongoose.Promise = global.Promise;
const url =  process.env.DB_NAME ? `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin` : 'mongodb://localhost/db_gate'
// const urlProd = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
// const urlProd = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    // reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

  module.exports = mongoose.createConnection(url, options, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + url + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + url);
    
    }
  });

//mongoose.connect(url,{useMongoClient:true})Necessário na versão 4.13.17 do mongoose
 
  
mongoose.connect(url,options)


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'!"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'!"

//----------------------------------------------------------------------------------------------- ANTIGO -------------------------------------------------------------------------------------
// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise

// const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/db_gateway'

// const options = {
//     useNewUrlParser: true,
//     autoIndex: false, // Don't build indexes
//     reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//     reconnectInterval: 500, // Reconnect every 500ms
//     poolSize: 10, // Maintain up to 10 socket connections
//     // If not connected, return errors immediately rather than waiting for reconnect
//     bufferMaxEntries: 0,
//     connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
//   };
  
//   module.exports = mongoose.createConnection(url, options, function (err, res) {
//     if (err) {
//     console.log ('ERROR connecting to: ' + url + '. ' + err);
//     } else {
//     console.log ('Succeeded connected to: ' + url);
//     }
//   });
  
//  mongoose.connect(url,{useNewUrlParser: true})
  
//  //mongoose.connect(url, options)
  
  
//  mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
//  mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'!"
 