<template>
  <div class="product-detail">
    <div class="product-images">
      <img :src="selectedImage" alt="" class="main-image"/>
      <div class="thumbnail-images">
        <img
          v-for="(image, index) in product.images"
          :key="index"
          :src="image"
          @click="selectImage(image)"
          class="thumbnail"
          :class="{ 'active': selectedImage === image }"
        />
      </div>
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price | currency }}</p>
      <p class="description">{{ product.description }}</p>
      <button @click="addToCart" class="btn">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: '',
      product: {
        name: 'Sample Product',
        description: 'This is a detailed description of the product.',
        price: 99.99,
        images: [
          'https://via.placeholder.com/400x300?text=Product+Image+1',
          'https://via.placeholder.com/400x300?text=Product+Image+2',
          'https://via.placeholder.com/400x300?text=Product+Image+3'
        ]
      }
    }
  },
}
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.product-images {
  width: 50%;
}

.main-image {
  width: 100%;
  height: auto;
}

.thumbnail-images {
  display: flex;
  margin-top: 10px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail.active {
  border-color: blue;
}

.product-info {
  width: 40%;
}

.price {
  font-size: 24px;
  color: #f60;
}

.btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #218838;
}
</style>


