import '../component/mymeal-list.js';
import '../component/mymeal-search.js';
import  DataSource from '../data/database.js';

const search = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meals-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.meals = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};


export default search;