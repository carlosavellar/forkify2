import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, createLoader, clearLoader} from './views/base';
const state = {};

const controllSeach = async () =>{
    console.log(searchView.getInput);
    const query = searchView.getInput();
    
    if (query) {
        createLoader(elements.resultsSidebar);
        try{    
            searchView.clearResults();
            // console.log(`${searchView.getInput()} --`);
            state.search = new Search(query);

            await state.search.getResults();

            searchView.renderResult(state.search.result);
            clearLoader();

        }catch(err){
            console.log(err);
        }
    }
}
document.querySelector('.search').addEventListener("submit", e => {
    e.preventDefault();1
    controllSeach();
});