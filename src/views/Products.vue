<template>
  <div>
    <div class="row mb-3">
      <div class="col-sm-2">
        <router-link :to="{ name: 'AddProduct' }" class="btn btn-primary"
          >Add Product</router-link
        >
      </div>
    </div>
    <div v-if="loading > 0">
      <div class="alert alert-info" role="alert">Loading...</div>
    </div>
    <table v-else class="table table-hover">
      <thead>
        <tr>
          <td>title</td>
          <td>description</td>
          <td>price</td>
          <td colspan="2">Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.node.hypi.id">
          <td>{{ product.node.title }}</td>
          <td>{{ product.node.description }}</td>
          <td>{{ product.node.price }}</td>
          <td>
            <router-link
              :to="{
                name: 'EditProduct',
                params: { id: product.node.hypi.id },
              }"
              class="btn btn-success"
              >Edit</router-link
            >
          </td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              @click.prevent="removeProduct(product.node.hypi.id)"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { useProductsQuery, deleteMutation } from '../generated/graphql';

export default {
  apollo: {
    products: useProductsQuery({
      variables: {
        arcql: '*',
      },
      loadingKey: 'loading',
      update: (data) => data.find.edges,
    }),
  },
  data(): Record<string, unknown> {
    return {
      products: null,
      loading: 0,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async removeProduct(productId) {
      const { success, data, errors } = await deleteMutation(
        this,
        {
          variables: {
            arcql: `hypi.id = '${productId}'`,
          },
        },
        this.$apollo,
      );
      if (errors) {
        alert('Failed to delete message');
      }
      if (success) {
        this.$router.push({ name: 'Products' });
        this.$router.go(0);
      }
    },
  },
};
</script>
