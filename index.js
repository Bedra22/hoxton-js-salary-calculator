var gross_salary=500;
var contributions=gross_salary-(gross_salary*0.05);
console.log(contributions);
const taxUnder80=contributions*0;
console.log(taxUnder80);
const taxtUnder250=(250-80)*0.04;
console.log(taxtUnder250)
const taxtUnder450=(450-250)*0.08;
console.log(taxtUnder450)
const tax450above=(contributions-450)*0.1;
console.log(tax450above)
var result=contributions-(taxUnder80+taxtUnder250+taxtUnder450+tax450above);
console.log(result)