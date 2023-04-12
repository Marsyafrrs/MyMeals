class MealsFooter extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
          <small>Copyright &copy; Marsya Farras Nabilah 2023.</small>
        </div>`;
    }
}

customElements.define("meals-fotter", MealsFooter);