import User from 'models/User'

export const list = async () => {
  return await User.find().lean().exec()
}

export const create = async (userId, addressEth, balanceEth) => {
  return await new User({
    userId,
    addressEth,
    balanceEth
  }).save()
}

export const findById = async (id) => {
  return await User.findById(id).lean()
}

export const findByUserId = async (userId) => {
  return await User.findOne({ userId }).lean()
}

export const findByAddress = async (addressEth) => {
  return await User.findOne({ addressEth }).lean()
}

export const setBalanceEth = async (id, balance) => {
  return await User.findByIdAndUpdate(id, {
    balanceEth: balance
  }, {
    safe: true,
    new: true
  }).exec()
}
