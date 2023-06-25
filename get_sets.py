import requests
import json

r = requests.get('https://api.scryfall.com/sets').json()
trimmed_sets = {set["code"]: { "name": set["name"], "img_url": set['icon_svg_uri'], "date": set["released_at"]} for set in r['data'] if (set['set_type'] in ['core', 'expansion'])}

print(trimmed_sets['mom'])
for set_code in trimmed_sets.keys():
    set_symbol = requests.get(trimmed_sets[set_code]['img_url']).text
    print(set_symbol)
    with open('./cast-through-time/src/data/card_images/{}.svg'.format(set_code), 'w+') as img_file:
        img_file.write(set_symbol)

with open('./cast-through-time/src/data/set-data.json', 'w+') as datafile:
    json.dump(trimmed_sets, datafile)