#include <fstream>
#include <iostream>
#include <vector>
#include <cctype>
using namespace std;

bool comparePairs(const pair<string, double>& a, const pair<string, double>& b) {
  return a.second > b.second;
}

int main() {
  string inputLine;
  int line = 0;
  vector<string> course;
  vector<string> instructor;
  vector<string> quarter;
  vector<string> year;
  vector<double> students;
  vector<double> avgGPA;
  vector<string> dept;
  ifstream inFS;
  inFS.open("allCourses.csv");
  getline(inFS, inputLine);
  getline(inFS, inputLine);
  while(!inFS.fail()) {
    //input professor names
    int start = 0;
    int found = inputLine.find(',', start);
    instructor.push_back(inputLine.substr(start,found - start));
    //input course names, eliminating duplicate spaces
    start = found + 1;
    found = inputLine.find(',', start);
    string courseSpace = (inputLine.substr(start,found - start));
    bool spaceFound = false;
    string result;
    for (int i = 0; i < courseSpace.length(); ++i) {
        if (courseSpace[i] == ' ' && !spaceFound) {
            result += courseSpace[i];
            spaceFound = true;
        } else if (courseSpace[i] != ' ') {
            result += courseSpace[i];
            spaceFound = false;
        }
    }
    course.push_back(result);
    //input quarter
    start = found + 1;
    found = inputLine.find(',', start);
    quarter.push_back(inputLine.substr(start,found - start));
    //input year
    start = found + 1;
    found = inputLine.find(',', start);
    year.push_back(inputLine.substr(start,found - start));
    //input number of students
    start = found + 1;
    found = inputLine.find(',', start);
    start = found + 1;
    found = inputLine.find(',', start);
    start = found + 1;
    found = inputLine.find(',', start);
    students.push_back(stod(inputLine.substr(start,found - start)));
    //input average GPA
    start = found + 1;
    found = inputLine.find(',', start);
    avgGPA.push_back(stod(inputLine.substr(start,found - start)));
    //input department from courses
    for (int i = 0; i < result.length(); i++) {
      if (isdigit(result[i])) {
        found = i - 1;
        break;
      }
    }
    dept.push_back(result.substr(0,found));
    line++;
    getline(inFS, inputLine);
  }
  inFS.close();

  //input all distinct professors, excluding professors that have taught less than 5 quarters of courses
  vector<string> allProf;
  inFS.open("professorCourseCount.csv");
  getline(inFS, inputLine);
  getline(inFS, inputLine);
  while (!inFS.fail()) {
    int found = inputLine.find(',');
    if (stoi(inputLine.substr(found+1)) > 4) {
      allProf.push_back(inputLine.substr(0,found));
    }
    getline(inFS, inputLine);
  }
  inFS.close();

  vector<vector<string> > allProfCoursesTaught;
  vector<vector<string> > allProfDeptCourses;
  for (int i = 0; i < allProf.size(); i++) {
    string findProf = allProf.at(i);
    vector<string> coursesTaught;
    int instructorRow = 0;
    for (int j = 0; j < instructor.size(); j++) {
      bool repeatCourse = false;
      if (findProf == instructor.at(j)) {
        instructorRow = j;
        if (coursesTaught.size() == 0 && avgGPA.at(j) > 0.001 && students.at(j) > 0) coursesTaught.push_back(course.at(j));
        else {
          for (int k = 0; k < coursesTaught.size(); k++) {
            if (course.at(j) == coursesTaught.at(k)) {
                repeatCourse = true;
                break;
            }
          }
          if (!repeatCourse && avgGPA.at(j) > 0.001 && students.at(j) > 0) {
            coursesTaught.push_back(course.at(j));
          }
        }
      }
    }
    
    vector<string> coursesTaughtSorted;
    vector<pair<string, double> > avgStudents;
    for (int j = 0; j < coursesTaught.size(); j++) {
      int sum = 0;
      int count = 0;
      for (int k = 0; k < instructor.size(); k++) {
        if (instructor.at(k) == findProf) {
          if (course.at(k) == coursesTaught.at(j)) {
            sum += students.at(k);
            count++;
          } else if (sum != 0) {
            break;
          }
        }
      }
      avgStudents.push_back(make_pair(coursesTaught.at(j), (double) sum / count));
    }

    sort(avgStudents.begin(), avgStudents.end(), comparePairs);
    for (int j = 0; j < avgStudents.size(); j++) {
      coursesTaughtSorted.push_back(avgStudents.at(j).first);
    }

    allProfCoursesTaught.push_back(coursesTaughtSorted);

    vector<string> deptCourses;
    for (int j = 0; j < instructor.size(); j++) {
      bool repeatDept = false;
      if (findProf == instructor.at(j)) {
        if (deptCourses.size() == 0 && avgGPA.at(j) > 0.001 && students.at(j) > 0) deptCourses.push_back(dept.at(j));
        else {
          for (int k = 0; k < deptCourses.size(); k++) {
            if (dept.at(j) == deptCourses.at(k)) {
                repeatDept = true;
                break;
            }
          }
          if (!repeatDept && avgGPA.at(j) > 0.001 && students.at(j) > 0) {
            deptCourses.push_back(dept.at(j));
          }
        }
      }
    }
    allProfDeptCourses.push_back(deptCourses);
  }

  ofstream outFS;
  outFS.open("finalData.csv");
  for (int i = 0; i < allProfCoursesTaught.size(); i++) {
    outFS << allProf.at(i) << ",\"";
    for (int j = 0; j < allProfDeptCourses.at(i).size(); j++) {
        if (j == allProfDeptCourses.at(i).size()-1) {
            outFS << allProfDeptCourses.at(i).at(j) << "\",\"";
        } else {
        outFS << allProfDeptCourses.at(i).at(j) << ", ";
        }
    }
    for (int j = 0; j < allProfCoursesTaught.at(i).size() && j < 5; j++) {
        if (j == allProfCoursesTaught.at(i).size()-1 || j == 4) {
            outFS << allProfCoursesTaught.at(i).at(j) << "\"";
        } else {
        outFS << allProfCoursesTaught.at(i).at(j) << ", ";
        }
    }
    outFS << endl;
  }
  outFS.close();
  return 0;
}
