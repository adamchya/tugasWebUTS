app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template: 
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Tambah ke Keranjang
          </button>
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <h2 v-if="inStock">Tersedia</h2>
          <h2 v-else>Tidak Tersedia </h2>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
  
          <div v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" id="variant-cam">
            {{variant.type}}
          </div>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
      return {
          product: 'A6600 APSC',
          brand: 'Sony',
          selectedVariant: 0,
          details: ['Mirrorless Digital Camera', 'Sony E-Mount', 'Sensor CMOS APS-C (23,5 x 15,6mm)'],
          variants: [
            { id: 122, type: 'Dengan Lensa', image: './assets/images/withlense.png', quantity: 0 },
            { id: 123, type: 'Tanpa Lensa', image: './assets/images/withoutlense.png', quantity: 50 },
          ],
          reviews: []
      }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
          this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
  })