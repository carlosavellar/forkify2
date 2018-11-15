// 68a8b8bf670780455d6b07de135e89f0
// https: //www.food2fork.com/api/search
// https://www.food2fork.com/api/get
import { elements } from './base';

export const getInput = () => elements.inputS.value;

const renderRecipe = recipe => {
    
    const markup = `<li>
                    <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}/p>
                        </div>
                    </a>
                </li>`;
    elements.resultList.insertAdjacentHTML("beforeend", markup);
            
}

export const renderResult = recipes => {
    debugger;
    window.r = recipes;
    recipes.forEach(renderRecipe);
}