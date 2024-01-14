# v1 output format:
# [
#   {
#       "name": "",
#       "departments": ["", ...],
#       "rating": #,
#       "difficulty": #,
#       "courses": ["", ...]
#   },
#   {
#       ...
#   },
#   ...
# ]
#

import csv
import json
import itertools

professor_list = []
with open("professor_data_lastfirst.csv") as csvfile:
    reader = csv.reader(csvfile, delimiter=",", quotechar="\"")
    for row in itertools.islice(reader, 1, None):
        professor_dict = {}
        name = row[0]
        departments = row[1]
        rating = row[2]
        difficulty = row[3]
        courses = row[4]
        professor_dict["name"] = name.upper()
        professor_dict["departments"] = departments.split("; ")
        professor_dict["rating"] = rating
        professor_dict["difficulty"] = difficulty
        professor_dict["courses"] = courses.split(", ")
        professor_list.append(professor_dict)

with open("professor_data.json", 'w') as jsonfile:
    json.dump(professor_list, jsonfile, indent=4)