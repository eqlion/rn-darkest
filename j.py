import json

from pprint import pprint 

with open('./assets/curios.json') as f:
    j = json.load(f)

l = []
for curio in j:
    d = {
        "name": curio["name"],
        "location": curio["location"],
        "use": [
            {
                "item": i,
                "result": curio["use"][i]
            } for i in curio["use"].keys()
        ]
    }
    l.append(d)

with open('./assets/curios.json', 'w') as f:
    json.dump(l, f)