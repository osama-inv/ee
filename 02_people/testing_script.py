#!/usr/bin/python3
"""This is automated testing for this api"""
import requests

url = 'https://hngmus2.onrender.com/api/'

#create person
person_information = {
    'name': 'tester1'
}
person = requests.post(url + 'peoples', json=person_information)
print(person.status_code)
print(f"person {person.json().get('id')} created sucessfully: {person.json()}")
person_information = {
    'name': 'tester2'
}
person = requests.post(url + 'peoples', json=person_information)
print(person.status_code)
print(f"person {person.json().get('id')} created sucessfully: {person.json()}")
person_information = {
    'name': 'tester3'
}
person = requests.post(url + 'peoples', json=person_information)
print(person.status_code)
user_id = person.json().get('id')
print(f"person {person.json().get('id')} created sucessfully: {person.json()}")

#get all person
person = requests.get(url + 'peoples')
print(f"All people in the database are {person.json()}")

#get a person
person = requests.get(url + 'people/2')
print(f"get information about person with {person.json().get('id')} is {person.json()}")

#update a person
person = requests.put(url + 'people/1', json={'name': '1-tester'})
print(f"The updated information about person with {person.json().get('id')} is {person.json()}")

#search a person
person = requests.get(url + 'people_search', params={'name': 'tester3'})
print(f"search a person with name  tester3 amd they are {person.json()}")

#delete a person
person = requests.delete(url + f'people/{user_id}')
print(f"Deleted the perdon with id {person.json().get('id')} successfully")

#gethjjjjjjhg
stats = requests.get(url + 'stats')
print(stats.status_code)
print(f"The database stats is {stats.json()}")


