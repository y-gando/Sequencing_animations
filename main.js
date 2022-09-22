const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

// aliceTiming
const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// CSS のアニメーションが終了したときだけっぽい
alice1.addEventListener('animationend', (e) => {
  console.log(e);
});

/* async -> await バージョン */
const startSyncAnimation = async () => {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  alice3.animate(aliceTumbling, aliceTiming);
};

// const alices = [alice1, alice2, alice3];
// const startSyncAnimation = async () => {
//   for (let i = 0; i <= alices.length; i++) {
//    await alices[i].animate(aliceTumbling, aliceTiming).finished; 
//   }
// };

startSyncAnimation();

/* Promise チェーンバージョン */
// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//   return alice2.animate(aliceTumbling, aliceTiming).finished;
// }).then(() => {
//   return alice3.animate(aliceTumbling, aliceTiming).finished;
// }).then(() => {
//   console.log("all finished!!!!!");
// });

/* 模範解答 */
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
//   .catch((error) => console.error(`Error animating Alices: ${error}`));




// ↓ 頑張った軌跡


// Promise.all(() => {
//   const animations = elem.getAnimations(); // [Animation, Animation, ....]
//   const promises = animations.map((animation) => animation.finished); // [animations[0].finished, animations[1].finished, ...]
//   /*
//     let promises = [];
//     for(let i = 0; animations.length <= i; i++) {
//       const animation = animations[i];
//       const finishedPromise = animation.finished;
//       promises.push(finishedPromise);
//     }
//   */
//   return promises;
// }).then(
//   () => elem.remove()
// );

// // 元
// Promise.all(elem.getAnimations().map((animation) => animation.finished)).then(
//   () => elem.remove()
// );

// Promise.all([animation1.finished, animation2.finished, ...]).then(
//   () => {
//     // Promise.all 全て終わったらくる
//   }
// );

// const anime1Promise = animation1.finished;
// const anime2Promise = animation2.finished;



// // async and await
// async function ali1() {
//   return await alice1.animate(aliceTumbling, aliceTiming).finished;
// }

// async function ali2() {
//   return await alice2.animate(aliceTumbling, aliceTiming).finished;
// }

// async function ali3() {
//   return await alice3.animate(aliceTumbling, aliceTiming).finished;
// }

// ali1().then(() => {
//   return ali2();
// }).then(() => {
//   return ali3();
// }).then(() => {

// });

// const ali1Promise = alice1.animate(aliceTumbling, aliceTiming).finished;
// const ali2Promise = alice2.animate(aliceTumbling, aliceTiming).finished;
// const ali3Promise = alice3.animate(aliceTumbling, aliceTiming).finished;

// ali1Promise.then(() => {
//   return ali2Promise;
// }).then(() => {
//   return ali3Promise;
// }).then(() => {
//   console.log("all finished!!!!!");
// });


