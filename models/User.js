import mongoose from 'config/mongoose'

const schema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  addressEth: {
    type: String,
    required: true,
    unique: true
  },
  balanceEth: {
    type: String
  }
})

export default mongoose.model('User', schema)
