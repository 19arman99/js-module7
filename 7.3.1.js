//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
//только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
    a: 100,
    b: "name",
    c: true
}
function func(object){
    for (const key in object) {
        console.log(key);
        console.log(object[key]);
    }
}
func(obj);