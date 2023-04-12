class mealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="${this._meal.idMeal}" class="col-md-4 my-5">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
          <div class="card-body">
            <h5 class="card-title">${this._meal.strMeal}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this._meal.strCategory}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${this._meal.strArea}</h6>
            <p class="card-text">${this._meal.strInstructions}</p>
          </div>
          </div>
        </div>`;
    }
}

customElements.define("meal-item", mealItem);