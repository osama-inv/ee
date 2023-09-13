## Running of the code

Requirements: Have mongodb, node of version greater than 17

1. Type `npm install`
2. Link you mongodb with .env files
3. Type `npm start`


## Documentation of the People API

The documentation of ***People API*** written by [Oyebamiji Mustapha](https://twitter.com/musoye1)


### People

The url for testing [ngjfkf]()

Data inside {id, name}

GET /api/peoples -> get all people

POST /api/peoples -> create a new people
The json must contain **name** key with a value

PUT /api/people/:id -> update a person with a particular id

GET /api/people/:id-> get all info about a particular person with a particular id

DELETE /api/people/:id -> delete a particular person with a particular id

GET /api/people_search-> search for a person with a name


### Stats

GET /api/stats -> state the number of people in the api database


