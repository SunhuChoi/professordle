# v2 output format:
# {
#   name: {
#       "departments": ["", ...],
#       "rating": #,
#       "difficulty": #,
#       "courses": ["", ...]
#   },
#   name: {
#       ...
#   },
#   ...
# }

import csv
import json
import itertools

professor_dict = {}
with open("professor_data_lastfirst.csv") as csvfile:
    reader = csv.reader(csvfile, delimiter=",", quotechar="\"")
    for row in itertools.islice(reader, 1, None):
        name = row[0]
        departments = row[1]
        rating = row[2]
        difficulty = row[3]
        courses = row[4]
        professor_dict[name.upper()] = {}
        professor_dict[name.upper()]["departments"] = departments.split("; ")
        professor_dict[name.upper()]["rating"] = rating
        professor_dict[name.upper()]["difficulty"] = difficulty
        professor_dict[name.upper()]["courses"] = courses.split(", ")

with open("professor_data.json", 'w') as jsonfile:
    json.dump(professor_dict, jsonfile, indent=4)