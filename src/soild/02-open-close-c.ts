// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from 'axios';


export class HttpClient { 

    // async get(stringUrl: string) {
    //     const { data, status } = await axios.get(stringUrl);
    //     console.log('HttpClient: ', { status });
    //     return { data, status };
    // }


    async get(stringUrl: string) {
        const resp = await fetch(stringUrl);
        const data = await resp.json();
        console.log('HttpClient: ', { status: resp.status });
        return { data, status: resp.status };
    }
}