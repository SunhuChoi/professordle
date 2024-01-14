import ratemyprofessor
import csv
import json
import itertools
inputname = "input_data.csv"
outputname = "balls.csv"
with open("department_names.json", "r") as jsonfile:
	department_dict = json.loads(jsonfile.read())
with open(inputname, "r") as inputfile:
	csvreader = csv.reader(inputfile, delimiter=",")
	with open(outputname, "w", newline="") as outputfile:
		csvwriter = csv.writer(outputfile, delimiter=",", quotechar="\"")
		csvwriter.writerow(["Name", "Departments", "Rating", "Difficulty", "Courses"])
		start_index = 20
		end_index = None
		rownum = start_index
		for row in itertools.islice(csvreader, start_index, end_index):
			rownum += 1
			input_name = row[0]
			# If name has middle initial, remove it
			name_split = input_name.split(" ")
			if len(name_split) == 3:
				input_name = "{} {}".format(name_split[0], name_split[1])
			input_departments = row[1].split(", ")
			# Format as list to account for multiple departments
			input_courses = row[2]
			school = ratemyprofessor.get_school_by_name("University of California, Santa Barbara")
			p = ratemyprofessor.get_professors_by_school_and_name(school, input_name)
			correct_candidates = []
			department_names = [department_dict[d][0] for d in input_departments if d in department_dict]
			department_names = sum(department_names,[])
			department_names = list(filter(None, department_names))
			# If a professor has multiple RMP entries, consider all possible candidates
			for professor in p:
				if professor.department in department_names:
						correct_candidates.append(professor)
			correct_professor = None
			# If the professor has more than one entry, choose one with most ratings
			if len(correct_candidates) > 1:
				correct_professor = correct_candidates[0]
				for candidate in correct_candidates[1:]:
					if candidate.num_ratings > correct_professor.num_ratings:
						correct_professor = candidate
			elif len(correct_candidates) == 1:
				correct_professor = correct_candidates[0]
			else:
				print("{}) {} not found on RateMyProfessor, skipping".format(rownum, input_name))
			if correct_professor:
				if correct_professor.rating > 0 and correct_professor.difficulty > 0:
					# Replace double spaces or other whitespace anomalies with single space
					output_name = " ".join(correct_professor.name.split())
					# Give list of departments in unabbreviated form
					output_departments = "; ".join(department_names)
					# Preserve courses structure from input
					output_courses = input_courses
					output = [output_name, output_departments, correct_professor.rating, correct_professor.difficulty, output_courses]
					csvwriter.writerow(output)
					print("{}) {}".format(rownum, output))
				else:
					print("{}) {} has no ratings on RateMyProfessor, skipping".format(rownum, correct_professor.name))




