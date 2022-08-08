// Напишите функцию mapObject, которая
// в чем-то очень похожа на функцию map для массивов.

// Эта функция должна принимать объект джаваскрипта
// и функцию transformer, которую нужно применить к каждому из полей того объекта,
// ...а из результата применения функции transformer к каждому полю входящего объекта
// собрать новый объект и вернуть его.

// Так например можно будет замэппить объект типа
// { "roma" : 5, "vasya": 2 } оценок студентов
// на функцию вроде (x) => x > 2
// чтобы получить объект
// { "roma": true, "vasya": false } зачетов студентов

// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами-типами
// 2) такую штуку как Record (globalThis.Record, если быть точным ;) )

type Obj<T> = Record<string, T>;

function mapObject<T, N>(obj: Obj<T>, callback: (fieldValue: T) => N): Obj<N> {
  const copyObj: Obj<N> = {};
  Object.keys(obj).forEach((f) => {
    copyObj[f] = callback(obj[f]);
  });
  return copyObj;
}
console.log(mapObject({ roma: 5, vasya: 4 }, (x) => x > 2));
