 const students=[
    {id:23,name:'omar faruk'},
    {id:21,name:'sufiyan'},
    {id:25,name:'shawlin'},
    {id:26,name:'marlin'},
    {id:22,name:'deepjol'},
 ]
 const names = students.map(stu => stu.name);
 const ids = students.map(stu => stu.id);
 const bigger = students.filter(s => s.id>20);
 const biggerOne = students.find(st => st.id>21)
 console.log(bigger,biggerOne,ids,names)
