<template>
  <div class='container'>
    <div class='card'>
      <div class='card-header'>
        <h3>Add Product</h3>
      </div>
      <div class='card-body'>
        <div class='row mb-3'>
          <label for='product-title' class='col-sm-2 col-form-label'>Title</label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              name='product-title' id='product-title'
              v-model='title'
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='product-description' class='col-sm-2 col-form-label'>Description</label>
          <div class='col-sm-10'>
              <textarea class='form-control'
              id='product-description'
              name='product-description'
              v-model='description'
              rows='3'></textarea>
          </div>
        </div>
        <div class='row mb-3'>
          <label for='product-price' class='col-sm-2 col-form-label'>Price</label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              name='product-price' id='product-price'
              v-model='price'
            />
          </div>
        </div>
        <div class='form-group'>
          <button class='btn btn-primary' @click='addProduct'>
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateProductsMutation } from '../generated/graphql';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      title: '',
      description: '',
      price: 0,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async addProduct() {
      const productTitle = this.title.trim();
      const productDescription = this.description.trim();
      const productPrice = this.price;

      const { success, errors } = await updateProductsMutation(
        this,
        {
          variables: {
            values: {
              Product: [
                {
                  title: productTitle,
                  description: productDescription,
                  price: productPrice,
                },
              ],
            },
          },
        },
        this.$apollo,
      );
      if (errors) {
        // eslint-disable-next-line no-alert
        alert('Failed to create product');
      }
      if (success) {
        this.$router.push({ name: 'Products' });
        this.$router.go(0);
      }
    },
  },
};
</script>
