import requests
import json

r = requests.get('https://api.scryfall.com/sets').json()
trimmed_sets = {set["code"]: { "name": set["name"], "date": set["released_at"]} for set in r['data'] if (set['set_type'] in ['core', 'expansion'])}

with open('./cast-through-time/src/data/set-data.json', 'w') as datafile:
    json.dump(trimmed_sets, datafile)