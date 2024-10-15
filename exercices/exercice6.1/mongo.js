require('dotenv').config()

const mongoose = require('mongoose')

if (process.argv.length<4) {
  console.log('give password as argument')
  process.exit(1)
}
const url = process.env.MONGODB_URI;

const name = process.argv[2]
const phone = process.argv[3]



console.log(process.env.MONGODB_URI);

mongoose.set('strictQuery',false)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  name: String,
  phone: String,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  name: name,
  phone: phone,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})


module.exports = mongoose.model('Note', noteSchema)