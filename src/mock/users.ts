import { User } from '../models/User'

export const MOCK_USERS: Array<User> = [
  new User(1, 'Rupa', 'Singh', 28, [
    'Meeting at 7',
    'Take car to mechanic',
    'Call insurance',
    'Chill at home',
    'Water the plants',
    'Call HR',
    'Read a book',
    'Plan next week'
  ]),
  new User(2, 'Marco', 'Terra', 24, [
    'Clean garage',
    'Call mother',
    'Wash the car',
    'Fix the fence'
  ]),
  new User(3, 'Lisa', 'Chen', 33, ['Contact manager', 'Find dress for party', 'Clean the attic']),
  new User(4, 'Aarav', 'Patel', 30, [
    'Prepare presentation',
    'Yoga class',
    'Finish work report',
    'Pick up groceries',
    'Water plants'
  ])
]
