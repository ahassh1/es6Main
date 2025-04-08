 class Student{
    constructor(sid,sName){
        this.id= sid;
        this.name=sName
        this.school= 'ist'
    }
 }
 const student1 = new Student(12,'ahasan')
 const student2 = new Student(35,'polash')
 console.log(student1,student2)
 console.log(student1.name, student2.name)