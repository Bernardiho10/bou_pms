import { MagicViewModel as MagicViewModel_1, AbstractCustomElement as AbstractCustomElement_1, MagicView as MagicView_1 } from './node_modules/@boudev/magicui/lib/cjs/index.js';
import data from './data/data.js';

class XtateViewModel extends MagicViewModel_1 {
    constructor(data) {
        super(data);
    }
}
class Carousel extends AbstractCustomElement_1 {
    constructor(id) {
        super();
        this.id = id;
    }
    // connectedCallback() {
    //     this.render([
    //         {
    //             "subheader": "NO.1 PROPERTY MANAGEMENT COMPANY IN NIGERIA",
    //             "header": "Manage your properties, tenants and rent collection with ease",
    //             "img": "./assets/img/property/property1.jpg"
    //         },
    //         {
    //             "subheader": "FULL TRANSPARENCY ACCOUNTABILITY AND NO HIDDEN COST",
    //             "header": "Take control of your Real Estate Portfolio",
    //             "img": "./assets/img/property/property2.jpeg"
    //         }
    //     ]);
    // }
    render(data) {
        if (data == null) {
            return;
        }
        console.log("rendering carousel...");
        this.innerHTML = '';
        let sliderContainer = document.createElement('div');
        sliderContainer.id = 'header-carousel';
        sliderContainer.classList.add(...['carousel', 'slide', 'carousel-fade', 'min-vh-100']);
        let parentSliderContainer = document.createElement('div');
        parentSliderContainer.classList.add(...['carousel-inner', 'vh-100']);
        data.forEach((slide, index) => {
            let slideElement = document.createElement('div');
            slideElement.classList.add(...['carousel-item', 'vh-100']);
            if (index === 0) {
                slideElement.classList.add('active');
            }
            slideElement.innerHTML = `
                <img class="w-100 vh-100" src="${slide.img}" alt="Image">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style="max-width: 900px;">
                        <h4 class="text-white text-uppercase mb-3 animated slideInDown">${slide.subheader}</h4>
                        <h2 class="display-4 text-white mb-md-4 animated zoomIn">${slide.header}</h2>
                        <a href="https://pms.bougroup.org/account/login.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Create free account / Login</a>
                        <a href="#service" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Learn More</a>
                    </div>
                </div>
            `;
            parentSliderContainer.appendChild(slideElement);
        });
        sliderContainer.appendChild(parentSliderContainer);
        // sliderContainer.insertAdjacentHTML('beforeend', btnHTML); 
        this.appendChild(sliderContainer);
    }
}
customElements.define('carousel-slider', Carousel);
class XtateView extends MagicView_1 {
    constructor(vm) {
        super(vm);
        this.Carousel = new Carousel("xtate-carousel");
        this.registerElement("bannerSlider", this.Carousel);
        this.registerElement("cta.cta_text", "cta_text");
        this.registerElement("statistics.clients", "client");
        this.registerElement("statistics.properties", "properties");
        this.registerElement("statistics.locations", "locations");
        this.registerElement("aboutSection.content", "about_content");
        this.registerElement("aboutSection.title", "about_title");
        this.registerElement("aboutSection.title", "about_title");
        // this.registerElement("cta.cta_number", "cta_number");
        // this.registerElement("cta.cta_number", "cta_number");
        // this.registerElement("cta.cta_number", "cta_number");
        // this.registerElement("cta.cta_number", "cta_number");
    }
}
const viewModel = new XtateViewModel(data);
const view = new XtateView(viewModel);
view.render();
