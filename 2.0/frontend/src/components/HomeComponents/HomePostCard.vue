<template>
  <div class="post-card">
    <div class="card">
        <div class="card-title">
          <h2>POR QUE O BURRO VALE MENOS QUE BURRO ?</h2>
        </div>
        <div class="card-body">
          <p>Um preconceito que permanece até os dias de hoje.</p>
          <a href="">Ler artigo</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePostCard',
};
</script>

<style>
  .card {
  box-shadow: 0px 0px 6px -2px rgb(0 0 0 / 50%);
  margin-bottom: 20px;
  min-height: 100px;
  padding-top: 15px;
  padding-left: 10px;

}

 .card .card-title h2{
  font-size: 1.5rem;
  color: black;
  text-transform: uppercase;
}

.card .card-body {
  font-size: 1.4rem;
  color: #888;
  margin: 8px 0;
}

.card-body p {
  margin-bottom: 10px;
}

.card-body  a {
  color: black;
  transition: 0.3;
}

 .card-body a:hover {
  color: var(--menu-color);
  border-bottom: 2px solid var(--menu-color);
  font-weight: bold ;

}
</style>
