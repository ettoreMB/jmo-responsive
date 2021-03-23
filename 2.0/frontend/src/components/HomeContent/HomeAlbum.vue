<template>
   <div class="photos-album">

      <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/IMG_4534.jpg"
          alt="">
        </a>
      </div>

      <div class="photo">
      <a href="">
      <img src="@/assets/images/graphic/uploads/galeria/n-Shop.jpg"
          alt=""
          >
        </a>
      </div>

      <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/Jumentinho-Monarca.jpg"
          alt=""
          >
        </a>
      </div>

      <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/IMG_1545.jpg-vendido.jpg"
          alt=""
          >
        </a>
      </div>

       <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/vendido2_o.jpg"
          alt=""
          >
        </a>
      </div>

      <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/IMG_1307.jpg-site.jpg"
          alt=""
          >
        </a>
      </div>

      <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/IMG_1850.jpg-shop-2.jpg"
          alt=""
          >
        </a>
      </div>

      <div class="photo">
        <a href="">
          <img src="@/assets/images/graphic/uploads/galeria/IMG_1545.jpg-vendido.jpg"
          alt=""
          >
        </a>
      </div>

    </div>
</template>

<script>
export default {
  name: 'HomeAlbum',
};
</script>

<style>
  .photos-album {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px
}

.photos-album .photo {
  max-height: 145px;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 50%);
  overflow: hidden;

}

.photos-album .photo  a img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
