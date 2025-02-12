let friends = ["민준", "서윤", "지우", "지호", "준우"];
friends = friends.map(name => "김" + name);

// forEach & map
// 공통점 : 배열 값을 조작하여 원하는 결과값을 얻을 수 있다.

// 1. currentValue (배열 원소의 값)
// 2. index (현재 요소의 인덱스)
// 3. array (현재 배열)

// forEach()
// 반환 값: 없음 (undefined) 
// 용도: 배열의 각 요소에 대해 작업을 수행
// 특징: 원본 배열을 변경하지 않음 

// map()
// 반환 값: 새로운 배열 
// 용도: 배열의 각 요소를 변환하여 새로운 배열을 생성 
// 특징: 원본 배열을 변경하지 않음

// * 성능 : map > forEach