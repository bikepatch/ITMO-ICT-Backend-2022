import { Sequelize } from 'sequelize-typescript'
import User from '../models/user/User'
import Booking from '../models/booking/Booking'
import Hotel from '../models/hotel/Hotel'

const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [User, Hotel, Booking],
  logging: console.log,
})

export default sequelize