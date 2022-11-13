class HeroImage extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
          .hero-img {
              display: flex;
              align-items: center;
              height: auto;
              width: 100%;
              text-align: center;
              background-position: center;
          }
          
          .inner-hero {
              margin: 0 auto;
              max-width: 800px;
          }
          
          .hero-title {
              color: #fff;
              font-weight: 500;
              font-size: 36px;
          }
          
          .hero-tagline {
              color: #fff;
              margin-top: 16px;
              font-size: 18px;
              font-weight: 300;
          }
      </style>
          
      <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./heros/hero-image_1-small.jpg">
        <img class="hero-img" src="./heros/hero-image_1-large.jpg" width="450" alt="ini hero" />
      </picture>
      
      <div class="inner-hero"></div>
      </div>
          `;
  }
}

customElements.define('hero-img', HeroImage);
