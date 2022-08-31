import requests
from flask import jsonify

def getNews():
    url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-30&pageSize=5&sortBy=publishedAt&apiKey=e212e3fc2e16410a9854a11abbad0fcb' 
    data =  requests.get(url).json()
    return jsonify(data['articles'])
    
