import json

with open("professors_by_department.json", "r") as jsonfile:
    data = json.load(jsonfile)

new_list = []
for d in data:
    dept_dict = {}
    dept_dict["department"] = d
    dept_dict["professors"] = data[d]
    new_list.append(dept_dict)

print(new_list)

with open("professors_by_department_v2.json", "w") as jsonfile:
   json.dump(new_list, jsonfile, ensure_ascii=False, indent=4)


