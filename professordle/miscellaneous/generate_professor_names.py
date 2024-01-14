# Returns professor names as a csv
import csv
import itertools

with open("professor_data_lastfirst.csv", "r") as inputfile:
    reader = csv.reader(inputfile, delimiter=",")
    with open("professor_names.csv", "w", newline="") as outputfile:
        writer = csv.writer(outputfile, delimiter=",", quotechar="\"")
        for row in itertools.islice(reader, 1, None):
            name = row[0].upper()
            writer.writerow([name, ""])

