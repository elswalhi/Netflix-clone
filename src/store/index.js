import { configureStore ,createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import { apiKey ,baseUrl } from "../utils/constance";
import axios from "axios";
const initialState={
    movies:[],
    generesLoaded:false,
    generes:[]

}
const arrayOfMovieData=(array,moviesArray,genres)=>{
    array.forEach((movie) => {
        const moviesGeners=[];
        movie.genre_ids.forEach((genre=>{
            const name = genres.find(({id})=>id===genre)
            if(name){
                moviesGeners.push(name.name)
            }
        }))
        if(movie.backdrop_path){
            moviesArray.push({
                id:movie.id,
                name:movie?.original_name? movie.original_name : movie.original_title,
                image:movie.backdrop_path,
                genres:moviesGeners.slice(0,3)
            })
        }
    });
}
const getMovieData = async (api,genres,paging =false)=>{
    const moviesArray=[];
    for(let i =1 ; moviesArray.length<80&&i<10;i++){
       const {data:{results}}= await axios.get(`${api}${paging? `&page=${i}` : ""} `)
        arrayOfMovieData(results,moviesArray,genres)
    }
    return moviesArray;
}

export const fetchMovies=createAsyncThunk("netflix/trending",async({type},myTunk)=>{
    const {netflix:{generes}} =myTunk.getState();
    return getMovieData(`${baseUrl}/trending/${type}/week?api_key=${apiKey}`,generes,true);
 })

export const getGeneres = createAsyncThunk("netflix/generes",async()=>{
   const {data:{genres}}=  await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
//    console.log(genres);
   return genres;
})

const NetflixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getGeneres.fulfilled ,(state,action)=>{
            state.generes=action.payload;
            state.generesLoaded=true;
        });
        builder.addCase(fetchMovies.fulfilled ,(state,action)=>{
            state.movies=action.payload;
        });
    }
});
export const store = configureStore({
    reducer:{
        netflix:NetflixSlice.reducer
    }
});