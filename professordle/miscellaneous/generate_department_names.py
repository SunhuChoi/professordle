# Dont run this lmao it doesnt work properly
import csv
import itertools

departments_list = []
with open("professor_data_lastfirst.csv", "r") as inputfile:
    reader = csv.reader(inputfile, delimiter=",")
    for row in itertools.islice(reader, 1, None):
        departments_list.append(row[1].split("; "))

departments_list = sum(departments_list, [])
departments_list = set(departments_list)
   
with open("department_list.csv", "w", newline="") as outputfile:
    writer = csv.writer(outputfile, delimiter=",", quotechar="\"", quoting=csv.QUOTE_ALL)
    for d in departments_list:
        writer.writerow(["{}".format(d)])
print(departments_list)