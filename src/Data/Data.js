var Faker = require('faker')


// Users
export const Contacts = [{
    "id": 1,
    "name": "Ervin Howell",
    "status" : "online",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1501143779831-7639ccda8d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
  },
  {
    "id": 2,
    "name": "Clementine Bauch",
    "status" : "offline",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
  },
  {
    "id": 3,
    "name": "Patricia Lebsack",
    "status" : "offline",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
  },
  {
    "id": 4,
    "name": "Robel-Corkery",
    "status" : "online",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
  },
  {
    "id": 5,
    "name": "Dennis Schulist",
    "status" : "offline",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" 
  },
  {
    "id": 6,
    "name": "Kurtis Weissnat",
    "status" : "online",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
  },
  {
    "id": 7,
    "name": "Nicholas Runolfsdottir V",
    "status" : "offline",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
  },
  {
    "id": 8,
    "name": "Glenna Reichert",
    "status" : "offline",
    "email": '${Faker.internet.email()}' ,
    "phone": '${Faker.phone.phoneNumber()}',
    "avatar" : "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
  },
]

//Messages
export const MessageBoxs = [
  {
    "id": 1,
    "contact": {
      "id": 1,
      "status" : "online",
      "name": "Ervin Howell",
      "avatar" : "https://images.unsplash.com/photo-1501143779831-7639ccda8d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
    },
    "totalNew": 3,
    "lastMsg": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "id": 2,
    "contact": {
      "id" : 3,
      "status" : "offline",
      "name": "Patricia Lebsack",
      "avatar" : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
    },
    "totalNew": 0,
    "lastMsg": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "id": 3,
    "contact": {
      "id": 2,
      "status" : "offline",
      "name": "Clementine Bauch",
      "avatar" : "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
    },
    "totalNew": 2,
    "lastMsg": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "id": 4,
    "contact": {
      "id": 8,
      "status" : "offline",
      "name": "Glenna Reichert",
      "avatar" : "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"   
    },
    "totalNew": 0,
    "lastMsg": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "id": 5,
    "contact": {
      "id": 6,
      "status" : "online",
      "name": "Kurtis Weissnat",
      "avatar" : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
    },
    "totalNew": 2,
    "lastMsg": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "id": 6,
    "contact": {
      "id": 5,
      "status" : "offline",
      "name": "Dennis Schulist",
      "avatar" : "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" 
    },
    "totalNew": 3,
    "lastMsg": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
]

//Calls

export const CallsHistory = [
  {
    "id": 1,
    "contact": {
      "id": 1,
      "status" : "online",
      "name": "Ervin Howell",
      "avatar" : "https://images.unsplash.com/photo-1501143779831-7639ccda8d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
    },
    "callFrq": 3,
    "type": "Call"
  },
  {
    "id": 2,
    "contact": {
      "id" : 3,
      "status" : "offline",
      "name": "Patricia Lebsack",
      "avatar" : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
    },
    "callFrq": 0,
    "type": "Missed Call"
  },
  {
    "id": 3,
    "contact": {
      "id": 2,
      "status" : "offline",
      "name": "Clementine Bauch",
      "avatar" : "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
    },
    "callFrq": 2,
    "type": "FaceTime"
  },
  {
    "id": 4,
    "contact": {
      "id": 8,
      "status" : "offline",
      "name": "Glenna Reichert",
      "avatar" : "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"   
    },
    "callFrq": 0,
    "type": "Call"
  },
  {
    "id": 5,
    "contact": {
      "id": 6,
      "status" : "online",
      "name": "Kurtis Weissnat",
      "avatar" : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
    },
    "callFrq": 2,
    "type": "FaceTime"
  },
  {
    "id": 6,
    "contact": {
      "id": 5,
      "status" : "offline",
      "name": "Dennis Schulist",
      "avatar" : "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" 
    },
    "callFrq": 3,
    "type": "Missed Call"
  },
  {
    "id": 7,
    "contact": {
      "id": 8,
      "status" : "offline",
      "name": "Glenna Reichert",
      "avatar" : "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"   
    },
    "callFrq": 0,
    "type": "Call"
  },
  {
    "id": 8,
    "contact": {
      "id": 6,
      "status" : "online",
      "name": "Kurtis Weissnat",
      "avatar" : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
    },
    "callFrq": 2,
    "type": "FaceTime"
  },
  {
    "id": 9,
    "contact": {
      "id": 5,
      "status" : "offline",
      "name": "Dennis Schulist",
      "avatar" : "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" 
    },
    "callFrq": 3,
    "type": "Missed Call"
  },
  {
    "id": 10,
    "contact": {
      "id": 8,
      "status" : "offline",
      "name": "Glenna Reichert",
      "avatar" : "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"   
    },
    "callFrq": 0,
    "type": "Call"
  },
  {
    "id": 11,
    "contact": {
      "id": 6,
      "status" : "online",
      "name": "Kurtis Weissnat",
      "avatar" : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" 
    },
    "callFrq": 2,
    "type": "FaceTime"
  },
  {
    "id": 12,
    "contact": {
      "id": 5,
      "status" : "offline",
      "name": "Dennis Schulist",
      "avatar" : "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" 
    },
    "callFrq": 3,
    "type": "Missed Call"
  },
]