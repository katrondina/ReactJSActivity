import React from 'react';
import {Information} from './Information';
import {PassingGrade} from './PassingGrade';
import {Subject} from  './Subject';

export class StudentView extends React.Component{
    constructor(props){
        console.log('StudentView.constructor');
        super(props);
        this.state = {
            studentList: [
                {
                    name: 'Katrina',
                    grade: 90,
                    age: 21,
                    subject: ['Englist','Math','Science']
                },{
                    name: 'Taylor',
                    grade: 91,
                    age: 20,
                    subject: ['Math','Filipino','History']
                },{
                    name: 'Devaraj',
                    grade: 99,
                    age: 25,
                    subject: ['Math','Filipino','Statistics']
                }
            ]
        }
    }

    filterBySubject(subject){
        console.log('filterBySubject');
        // let newStudentList = this.state.studentList.filter( students => {
        //     for(let i=0; i<students.subject.length; i++){
        //         console.log(students.subject);
        //         if(subject === students.subject[i])
        //             return true;
        //     }
        //     return false;
        // })
        let newStudentList2 = this.state.studentList.filter( (students) => students.subject.includes(subject));
        return newStudentList2;
    }

    render(){
        console.log('StudentView.render');
        let passingGrade = 91;
        let subject = 'Math';
        let honorStudents = this.state.studentList.filter( (students) => students.grade >= passingGrade );
        let studentListBySubject = this.filterBySubject(subject);
        
        return(
            <div>
                <h2>Student Information</h2>
                <Information studentList={this.state.studentList} /><br /><br />
                <h2>Students with grades {'>'}= {passingGrade} </h2>
                <PassingGrade studentList={honorStudents} passingGrade={passingGrade} />
                <h2>Students who took {subject} </h2>
                <Subject subject={subject} studentList={studentListBySubject}/>
            </div>
        );
    }
}