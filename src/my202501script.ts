//import './assets/main.css'
import axios from "axios";

export const req = (argParams: any): Promise<Object> => {

    //const url: string = "https://ohashi-wake-dino-t-42.deno.dev/" 
    //const url: string = "http://httpbin.org/delay/3" 
    const url: string = "https://script.google.com/macros/s/AKfycbwbxYlwC78DOpSvZh9lz08mQi0XXJBNujwfp12yGsQ-VccPP2UTV4A3S23FTxCpb5rzmg/exec" 
    //const url: string = "http://localhost:8000/" 

    return axios.get(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            //'Access-Control-Allow-Origin': "*"
        },
        //params: argParams
        params: {
            mode: 'add',
            date: argParams.date,
            name: argParams.name,
            value: argParams.price,
            type: argParams.type,
            description: argParams.description
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