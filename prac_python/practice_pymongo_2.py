from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbjungle

## 코딩 할 준비 ##

target_movie = db.movies.find_one({'title':'악마들'})
print (target_movie['star'])

movies = list(db.movies.find({'star':'10.0'}))

for movie in movies:
    print(movie['title'])

db.movies.update_one({'title':'악마들'},{'$set':{'star':'0.0'}})