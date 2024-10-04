// // **************************************CH#  ARRAYS**************************************************
// // **************************************Q1**************************************************

// var students  = [] // JS Literal Notation
// // **************************************Q2**************************************************

// var colors = new Array // Object Notation 
// // **************************************Q3**************************************************

// var str_arr=["Imran","Hamza","Mubaris","Hassan"]
// // **************************************Q4**************************************************

// var num_arr=[9,8,6,5,0,7]
// // **************************************Q5**************************************************

// var bool_arr=[True,False]
// // **************************************Q6**************************************************

// var mix_arr=["Imran","Hamza","Mubaris",5,0,7,True,False]
// // **************************************Q7**************************************************

var education_qualifications=["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM" , "6) MS", "7) M. Phil", "8) PhD"]
document.write(`<h1>Qualifications:</h1><br/>
    ${education_qualifications.join("<br>")}
    
    `)
// // **************************************Q8**************************************************
document.write(`<h2>Percentage: </h2>`)

var students=["Imran","Hamza","Bazeem"]
var stud_1marks=+prompt("Enter marks of "+students[0])
var stud_2marks=+prompt("Enter marks of "+students[1])
var stud_3marks=+prompt("Enter marks of "+students[2])

var total_marks_each=500

var percentage_std_1=stud_1marks/total_marks_each*100
var percentage_std_2=stud_2marks/total_marks_each*100
var percentage_std_3=stud_3marks/total_marks_each*100

var scores=[stud_1marks,stud_2marks,stud_3marks]
document.write(`
    <p> Score of ${students[0]} is ${scores[0]} and Percentage:${percentage_std_1}%</p>
        <p> Score of ${students[1]} is ${scores[1]} and Percentage:${percentage_std_2}%</p>

            <p> Score of ${students[2]} is ${scores[2]} and Percentage:${percentage_std_3}%</p>

    `)


// // **************************************Q9**************************************************

document.write(`<h2>COLORS</h2>`)

var colors=["Red","Green","Yellow","Blue","Purple"]
document.write(colors.join("<br>"))

var add_color_in_beginning=prompt("Add Color in the beginning")
colors.unshift(add_color_in_beginning)
document.write(colors.join("<br>")+"<br><hr>")

var add_color_in_end=prompt("Add Color in the end")
colors.push(add_color_in_end)
document.write(colors.join("<br>")+"<br><hr>")

colors.unshift("Dark Green","Black")
document.write(colors.join("<br>")+"<br><hr>")

colors.shift()
document.write(colors.join("<br>")+"<br><hr>")

colors.pop()
document.write(colors.join("<br>")+"<br><hr>")


var color_index=prompt("Enter index to add color in array")
var choose_color=prompt("Enter color")
colors.splice(color_index,0,choose_color)

document.write(colors.join("<br>")+"<br><hr></hr>")


var color_index_for_deletion=prompt("Enter index to delete color in array")
var count=prompt("How many colors you wants to delete")
colors.splice(color_index_for_deletion,count)

document.write(colors.join("<br>")+"<br><hr></hr>")

// **************************************Q10**************************************************

var std_scores=[99,234,123,543,232,130]
document.write("Scores of students: "+std_scores+"</br>")
std_scores.sort()
document.write("Ordered scores of students: "+std_scores+"</br><hr>")

// **************************************Q11**************************************************

var cities_names=["Karachi","islamabad","Lahore","Multan","Quetta"]
document.write(`<b>Cities list:</b><br/>${cities_names}<br/>`)

document.write(`<b>Selected cities list:</b><br/>${cities_names.slice(1,4)}<br/><hr>`)
// **************************************Q12**************************************************

var arr = ["This", "is", "my", "cat"];
document.write(`<b>Array:</b><br/>${arr}<br/>`)

document.write(`<b>String:</b><br/>${arr.join(" ")}<br/><hr>`)

// **************************************Q13FIFO**************************************************

var devices=["keyboard","Mouse","Printer","Monitor"]

document.write(`Devices:<br/>${devices}<br/><br/>`)

var return_val=devices.shift()
document.write(`Out:<br/>${return_val}<br/>`)

var return_val=devices.shift()
document.write(`Out:<br/>${return_val}<br/>`)

var return_val=devices.shift()
document.write(`Out:<br/>${return_val}<br/>`)

var return_val=devices.shift()
document.write(`Out:<br/>${return_val}<br/><hr>`)


// **************************************Q14 LIFO**************************************************


var devices=["keyboard","Mouse","Printer","Monitor"]


document.write(`Devices:<br/>${devices}<br/><br/>`)

var return_val=devices.pop()
document.write(`Out:<br/>${return_val}<br/>`)

var return_val=devices.pop()
document.write(`Out:<br/>${return_val}<br/>`)

var return_val=devices.pop()
document.write(`Out:<br/>${return_val}<br/>`)

var return_val=devices.pop()
document.write(`Out:<br/>${return_val}<br/><hr>`)


// **************************************Q15**************************************************

//array dropdown

var phone_manufacturers=["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

document.write(`
      <label for="phoone manufacturers">Choose a phone manufacturers:</label>
    <select id="phone manufacturers" name="phone manufacturers">
        <option value="Apple">${phone_manufacturers[0]}</option>
        <option value="Samsung">${phone_manufacturers[1]}</option>
        <option value="Motorola">${phone_manufacturers[2]}</option>
        <option value="Nokia">${phone_manufacturers[3]}</option>
        <option value="Sony">${phone_manufacturers[4]}</option>
        <option value="Haier">${phone_manufacturers[5]}</option>

    </select><br/><hr>`)

// **************************************CH# ARRAYS AND LOOP***************************************************

// 

// **************************************Q1**************************************************

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)



var empty_array=[[],[],[]]
// **************************************Q2**************************************************
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var multidimensional_array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]




// **************************************Q3**************************************************


for(var i=1;i<=10;i++){
    document.write(`${i}<br><hr>`)
}




// **************************************Q4**************************************************



 var table_num=+prompt("Enter number for multiplication table")
 var table_length=+prompt("Enter length of multiplication table")
 document.write(`multiplication table of ${table_num} <br/>Length ${table_length}<br><hr>`)
 for(var i=1;i<=table_length;i++){
    document.write(`${table_num} x ${i} = ${table_num*i}<br><hr>`)
  
}

// **************************************Q5**************************************************
document.write(`<h3>Array</h3>`)
fruits = ["apple", "banana", "mango", "orange","strawberry"]

for(var i=0;i<fruits.length;i++){
    document.write(`${fruits[i]}<br>`)
}

for(var i=0;i<fruits.length;i++){
    document.write(`Elements at index ${i} is ${fruits[i]}<br>`)
}

// **************************************Q6*************************************************
document.write(`<h2>Loops</h2>`)
document.write(`<h3>Counting:<br></h3>`)
for(i=1;i<=15;i++){
    document.write(`${i} , `)
}
document.write(`<br><h3>Reverse counting:</h3>`)

for(var i=10;i>=1;i--){
    document.write(`${i} , `)
}

document.write(`<br><h3>Even:</h3>`)

for(var i=0;i<=20;i++){
if(i%2==0){
    document.write(`${i} , `)}
}
document.write(`<br><h3>Odd:</h3>`)

for(vari=0;i<=20;i++){
if(i%2!=0){
    document.write(`${i} , `)}
}
for(var i=0;i<=20;i++){
    if(i%2!=0){
        document.write(`${i} , `)}
    }

document.write(`<br><h3>Series:</h3>`)

for(i=1;i<=20;i++){
    if(i%2==0){
        document.write(`${i}k , `)}
    }

// **************************************Q7**************************************************

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var bakery = prompt("Welcome to Imran's Bakery. What do you want to order, sir/ma'am?");

var found = false; 
var itemIndex; 


for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === bakery.toLowerCase()) {
        found = true;
        itemIndex = i;
        break; 
    }
}

if (found) {
    alert(bakery + " is available at index " + itemIndex + " in our bakery.");
} else {
    alert("We are sorry, " + bakery + " is not available in our bakery.");
}

// **************************************Q8**************************************************

var A = [24, 53, 78, 91, 12];

var largest = A[0];

for(i=1;i<=A.length;i++){
    if(A[i]>largest){
        largest=A[i]
    }
}
document.write(`<br/><hr>Array items: ${A}<br/>`)
document.write(`The largest number in the array is: ${largest}<br/>`)


// **************************************Q9**************************************************

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for(i=1;i<=A.length;i++){
    if(A[i]<smallest){
        smallest=A[i]
    }
}
document.write(`<hr>Array items: ${A}<br/>`)
document.write(`The smallest number in the array is: ${smallest}<br/><hr>`)

// **************************************Q10**************************************************
document.write(`<h2>Loops</h2>`)

for (var i = 1; i <= 100; i++) {
    
    if (i % 5 === 0)
    {
      document.write(`${i} , `) 
    }}