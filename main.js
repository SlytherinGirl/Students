name_student_array=[];
function Submit(){
    var name_1=document.getElementById("name_student_1").value;
    var name_2=document.getElementById("name_student_2").value;
    var name_3=document.getElementById("name_student_3").value;
    var name_4=document.getElementById("name_student_4").value;
    var name_5=document.getElementById("name_student_5").value;
    name_student_array.push(name_1);
    name_student_array.push(name_2);
    name_student_array.push(name_3);
    name_student_array.push(name_4);
    name_student_array.push(name_5);
console.log(name_student_array);
document.getElementById("display_name").innerHTML=name_student_array;
document.getElementById("Submit_button").style.display="none";
document.getElementById("Sorting_button").style.display="inline-block";
}


function Sorting(){
    name_student_array.sort();
    console.log(name_student_array);
    document.getElementById("display_name").innerHTML=name_student_array;
}