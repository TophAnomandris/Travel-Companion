import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '9717d15d45msh95b878416567885p1fc81bjsnbbde1707a61d'
  }
};


export async function getPlacesData(){
    try{
        const {data: { data }} = await axios.get(URL, options)

        return data
    }catch(error){
        console.log(error)
    }
}