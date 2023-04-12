class MealsJum extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">MyMeals</h1>
              <p class="lead">MyMeals menyediakan artikel tentang makanan favorit kalian</p>              
              <p class="lead">Ayo temukan informasi tentang makanan favorit kalian DISINI!!!</p>
            </div>
          </div>`;
    }
}

customElements.define("meals-jumbotron", MealsJum);