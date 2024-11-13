#include <iostream>
#include <string>
using namespace std;

// it take some text and return the text into the terminal//
void isRobotOnline(string text) {
    cout<< text <<endl;
    
    }

int main() {

    int age = 17;                   
    float temperature = 72.5;        
    string robotName = "IoT-Bot";    
    bool isActive = false;            
    cout << "Age: " << age << endl;
    cout << "Temperature: " << temperature << " °f" << endl;
    cout << "Robot Name: " << robotName << endl;
    cout << "Is the robot active? "  << endl;


    if(isActive){
        cout << "yes" << endl;
    }
    else{
        cout <<"no" << endl;
        
    }
    isRobotOnline("Hello World"); 
    return 0;
}