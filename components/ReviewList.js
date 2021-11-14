app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} Memberikan {{ review.rating }} Bintang
          <br/>
          "{{ review.review }}"
          <br/>
          <!-- solution -->
          Recommended: {{ review.recommend }}
          <!-- solution -->
        </li>
      </ul>
    </div>
  `
  })