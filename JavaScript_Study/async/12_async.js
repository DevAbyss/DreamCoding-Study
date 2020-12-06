// async & await
// clear style of using promise :)

// ! 1. async
// async 써보기
// 'async'를 함수 앞에 사용하면,
// 함수 안에 있는 코드 블럭들이 Promise로 변환
async function fetchUser() {
  // do network request in 10 secs..
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// ! 2. await
// 기다려
// 'async'가 붙은 함수 안에서만 사용 가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나';
}

async function pickFruits() {
  // callback Hell
  // return getApple().then((apple) => {
  //   return getBanana().then((banana) => `${apple} + ${banana}`);
  // });

  // 병렬적으로 기능을 수행할 수 있는 경우 아래처럼 코드 작성 x
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then((value) => console.log(value));

// ! 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(', ')
  );
}

pickFruits().then((value) =>
  console.log(`useful Promise APIs 'all': ${value}`)
);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then((value) =>
  console.log(`useful Promise APIs 'race': ${value}`)
);
