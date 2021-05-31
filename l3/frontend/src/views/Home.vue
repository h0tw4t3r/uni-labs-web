<template>
 <Header />
  <div id="links"></div>
  <div class="row justify-content-md-center">
    <div class="col-3 mt-3 d-flex justify-content-center">
      <button id="add-item" type="button" class="btn btn-primary">Add Item</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
