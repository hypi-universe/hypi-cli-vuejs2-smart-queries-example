<template>
  <div class='container'>
    <div v-if='loading > 0'>
      <div class='alert alert-info' role='alert'>Loading...</div>
    </div>
    <div v-if='loading > 0'>
      <div class='alert alert-info' role='alert'>Loading...</div>
    </div>
    <div v-if='product' class='card'>
      <div class='card-header'>
        <h3>Edit Product</h3>
      </div>
      <div class='card-body'>
        <div class='row mb-3'>
          <label for='product-title' class='col-sm-2 col-form-label'
            >Title</label
          >
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              name='title'
              id='title'
              v-model='product.title'
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='product-description' class='col-sm-2 col-form-label'
            >Description</label
          >
          <div class='col-sm-10'>
            <textarea
              class='form-control'
              id='description'
              name='description'
              v-model='product.description'
              rows='3'
            ></textarea>
          </div>
        </div>
        <div class='row mb-3'>
          <label for='product-price' class='col-sm-2 col-form-label'
            >Price</label
          >
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              name='price'
              id='price'
              v-model='product.price'
            />
          </div>
        </div>
        <div class='form-group'>
          <button class='btn btn-primary' @click='editProduct(product)'>
            Save Product
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class='alert alert-info' role='alert'>
        Not such product with this id
      </div>
    </div>
  </div>
</template>

<script>
import {
  GetProductDocument,
  updateProductsMutation,
} from '../generated/graphql';
import IProduct from '../interfaces/product.interface';

export default {
  apollo: {
    product: {
      query: GetProductDocument,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      loadingKey: 'loading',
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      update: (data) => data.get,
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      productId: this.$route.params.id,
      product: { title: '', description: '', price: 0 },
      loading: 0,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async editProduct(product) {
      const { success, data, errors } = await updateProductsMutation(
        this,
        {
          variables: {
            values: {
              Product: [
                {
                  hypi: {
                    id: this.$route.params.id,
                  },
                  title: product.title.trim(),
                  description: product.description.trim(),
                  price: product.price,
                },
              ],
            },
          },
        },
        this.$apollo,
      );
      if (errors) {
        alert('Failed to update product');
      }
      if (success) {
        this.$router.push({ name: 'Products' });
        this.$router.go(0);
      }
    },
  },
};
</script>
