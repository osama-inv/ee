#!/usr/bin/python3
"""Create a test for the endpoint task"""
import requests

data = {
    'slack_name': 'slack',
    'track': 'backend'
}
url = 'https://hngmus1.onrender.com/api'


result = requests.get(url, params=data)
print(result.json())
