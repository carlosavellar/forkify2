import Search from './models/Search';

const result = new Search("pizza");

result.getResults();


const state = {};
const controllSeach = () =>{
    const query = 'tomato';
    if (query) {
        try{    
            state.search = new Search(query);
            state.search.getResults();
        }catch(err){
            console.log(err);
        }
    }
}
document.querySelector('.search').addEventListener("submit", e=>{
    e.preventDefault();
    controllSeach();
});