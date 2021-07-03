<template>
  <div class="container">
    <div v-if="product" class="card">
      <div class="card-header">
        <h3>Edit Product</h3>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <label for="product-title" class="col-sm-2 col-form-label"
            >Title</label
          >
          <div class="col-sm-10">
            <input
              type="hidden"
              id="product-id"
              name="product-id"
              v-model="productId"
            />
            <input
              type="text"
              class="form-control"
              name="product-title"
              id="product-title"
              v-model="product.title"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="product-description" class="col-sm-2 col-form-label"
            >Description</label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="product-description"
              name="product-description"
              v-model="product.description"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <label for="product-price" class="col-sm-2 col-form-label"
            >Price</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="product-price"
              id="product-price"
              v-model="product.price"
            />
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="editProduct">
            Add Product
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-info" role="alert">
        Not such product with this id
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { useGetProductQuery } from '../generated/graphql';

export default {
  apollo: {
    product: useGetProductQuery({
      variables: { id: '01F9NNX7SHXSTAMV35282BZD83' },
      loadingKey: 'loading',
      update: (data) => data.get,
    }),
  },
  data(): Record<string, unknown> {
    return {
      productId: this.$route.params.id,
      product: '',
      loading: 0,
    };
  },
  methods: {
    async editProduct() {
      const productTitle = this.product.title;
      const productDescription = this.product.description.trim();
      const productPrice = this.product.price;
      return '';
    },
  },
};
</script>
