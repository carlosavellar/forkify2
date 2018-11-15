// const inputS = document.querySelector('.search__field');
// const resultList = document.querySelector('.results__list');
// const btn = document.querySelector('.search__btn');
// export const elements = {
//     inputS,
//     resultList,
//     btn
// }

export const elements = {
     inputS: document.querySelector('.search__field'),
     resultList: document.querySelector('.results__list'),
     btn: document.querySelector('.search__btn'),
     resultsSidebar: document.querySelector('.results'),
}

export const elementStrings = {
     loader: "loader"
}

export const createLoader = parent =>{
     const loader = `<div class='${elementStrings.loader}'>
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>`;
        parent.insertAdjacentHTML("afterbegin", loader);
}
export const clearLoader = () => {
     const loader = document.querySelector(`.${elementStrings.loader}`); 
     if(loader) loader.parentNode.removeChild(loader);
}