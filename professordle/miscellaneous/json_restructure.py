import json

with open("professor_data.json", "r") as jsonfile:
    professor_data = json.load(jsonfile)

departments = [professor_data[p]["departments"] for p in professor_data]
departments = sum(departments, [])
departments = set(departments)

new_dict = {}
for d in departments:
    new_dict[d] = []
for p in professor_data:
    for dept in professor_data[p]["departments"]:
        new_dict[dept].append(p)

assert len(new_dict) == len(departments)
with open("professors_by_department.json", "w") as jsonfile:
    json.dump(new_dict, jsonfile, ensure_ascii=False, indent=4)


