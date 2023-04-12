class MealsNav extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="index.html">
              MyMeals
            </a>
          </nav>`;
    }
}

customElements.define("meals-nav", MealsNav);