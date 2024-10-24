//import './assets/main.css'
import axios from "axios";

const nameMap: {[key: string]: string} = {
    "alice": "Aさん",
    "bob": "Bさん",
    "charlie": "Cさん"
}
export const getName = (name: string): string => {
    if (name in nameMap) {
        return nameMap[name];
    } else {
        return "none";
    }
}

export const getTypeText = (type: string, dueDate: string): string => {
    if (type === "onboard") {
        return "在隊";
    }else if (type === "night"){
        return dueDate + ""
    }else if (type === "morning"){
        return dueDate + ""
    } else {
        return "none";
    }
}


export const req = (mode: string, name: string, value: string): Promise<Object> => {

    const url: string = "https://ohashi-wake-dino-t-42.deno.dev/" 
    //const url: string = "http://localhost:8000/" 

    return axios.get(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            //'Access-Control-Allow-Origin': "*"
        },
        params: {
            mode: mode,
            name: name,
            value: value
        }
    })  // GETメソッドを呼び出す
    .then((res) => {  // レスポンスを受け取ったらthenを実行する

        return res.data
    })
    .catch((error) => {  // エラーコードが返ってきた場合
        console.log(error);  // エラーコードを表示
        return {result: 'GET request error'}
    });
}