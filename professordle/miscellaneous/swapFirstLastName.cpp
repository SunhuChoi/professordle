#include <fstream>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  string inputLine;
  int line = 0;
  vector<string> firstName;
  vector<string> lastName;
  ifstream inFS;
  inFS.open("professor_names.csv");
  getline(inFS, inputLine);
  getline(inFS, inputLine);
  while (!inFS.fail()) {
    int found = inputLine.find(' ');
    int start = 0;
    firstName.push_back(inputLine.substr(start,found));
    start = found + 1;
    found = inputLine.find(',');
    lastName.push_back(inputLine.substr(start,found - start));
    getline(inFS, inputLine);
  }
  inFS.close();

  /*ofstream outFS;
  outFS.open("professorNamesSwitched.csv");
  for (int i = 0; i < firstName.size(); i++) {
    outFS << "\"" << lastName.at(i) << ", " << firstName.at(i) << "\",\n";
  }
  outFS.close();*/

}