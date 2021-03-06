/* Люди и места где они были(Город -> Топоним) */
let list = [
	['Иван', 'Москва', 'Питер', 'Нижний'],
	['Петр', 'Можайск', 'Смоленск'],
	['Саша', 'Москва', 'Смоленск']
];

function unique(list){						
	let result = [];		//Переменная для записи

	for(var val of list){
		if(!result.includes(val)){			//Если в result не найден элемент(город), то пушим город
		    result.push(val);
		}
	}
	return result;
};

function filterArray(city, list){
	city = city.map(val => [val]);			//Из каждого элемента массива - создание отдельного массива

	for(var town in city){
		for(var item of list){
		  	if(item.includes(city[town][0])){			//Если в исходном массиве найден город, то в массив с городом запушиваем имя
		  		city[town].push(item[0]);
		  	}
		}
	}
	return city;
}

function getToponym(list){
	let city = list.flatMap(val => val.slice(1));  //Формируем новый массив, удаляем все имена и поднимаем все на 1 уровень
	let toponym = unique(city);		//Вызов функции которая делает все элементы уникальными
	let filterResult = filterArray(toponym, list);		//Вызов функции которая создаст новый моссив топонимов к именам
	return filterResult;
}

getToponym(list);