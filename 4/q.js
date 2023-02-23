/*
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-22 15:09:19
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-23 10:47:42
 */
const arr = [
  { uid: 56, name: "小a" },
  { uid: 74, name: "小q" },
  { uid: 74, name: "小f" },
  { uid: 45, name: "小g" },
  { uid: 22, name: "小p" },
];
// //map 1
// function qc(arr,id) {
//     const map=new Map()
//     arr.forEach(item=>{
//     map.set(item[id],item)
// })
//     return  Array.from(map.values())
// }
// console.log(qc(arr,"uid"));

// map2
function qc(arr, id) {
  // const map = new Map();
  let hash={}
  // return arr.filter(item => !map.has(item[id]) && map.set(item[id],1));
  return arr.filter(item=> !hash[item[id]] && (hash[item[id]]=1)
  )
}
console.log(qc(arr,"uid"));

// // reduce
// /**
//  * @description:去重函数
//  * @param {array} arr 去重的数组
//  * @param {string} id    指定去重的字段
//  * @return {array}
//  */
// function qc(arr, id) {
//   let hash = {};
//   return arr.reduce((arr1, item) => {
//     hash[item[id]] ? "": (hash[item[id]] = 1) && arr1.push(item)
//     return arr1
//   },[]);
// }
// console.log(qc(arr,"uid"));