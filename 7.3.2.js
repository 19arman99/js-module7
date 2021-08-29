//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
//переданного объекта свойство с данным именем. Функция должна возвращать true или false.
let a;
let arr = ["name", "A", "Hello", "student"];
const obj = {
    name: "Ivan",
    age: 20,
    student: true,
    surname: "ivanov"
}
function f(str, object){
    for (let i = 0; i < str.length; i++) {
        a = arr[i];
        for (const key in object) {
            if(key == a){
                console.log(true);
            }
        }
    }
}
f(arr, obj);