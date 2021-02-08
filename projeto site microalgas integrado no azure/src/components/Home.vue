<template>
  <div class="home">
    <div class="quadros">
      <div id="quadro" v-for="cerveja in dados" :key="cerveja.id">
        <div>
          <h3>{{ cerveja.name }}</h3>
          <p>{{ cerveja.street }}</p>
          <p>{{ cerveja.city }} {{ cerveja.state }} - {{ cerveja.phone }}</p>
          <p>{{ cerveja.country }}</p>
        </div>
        <div>
          <hr />
          <span v-if="cerveja.brewery_type == 'micro'" class="micro">
            {{ cerveja.brewery_type }}
          </span>
          <span v-if="cerveja.brewery_type === 'regional'" class="regional">
            {{ cerveja.brewery_type }}
          </span>
          <span v-if="cerveja.brewery_type === 'contract'" class="contract">
            {{ cerveja.brewery_type }}
          </span>
          <span v-if="cerveja.brewery_type === 'brewpub'" class="brewpub">
            {{ cerveja.brewery_type }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dados: Array,
  },
  created: function () {
    // console.log(this.dados);
  },
};
</script>

<style scoped>
.home {
  max-width: 77%;
  margin: auto;
}
h3 {
  /* margin: 0; */
  margin-left: 15px;
}
p {
  margin: 0;
  margin-left: 15px;
}
.quadro h3 {
  padding-top: 15px;
}
.quadros {
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
#quadro {
  max-width: 230px;
  box-shadow: 5px 5px 5px rgba(66, 66, 66, 0.123);
  height: 217px;
  margin-top: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}


hr {
  background: gray;
  max-height: 100%;
}
.micro {
  background: #00d1b1;
  color: white;
  border-radius: 3px;
  margin-left: 15px;
  padding: 0 4px;
}
.regional {
  background: #3173dc;
  color: white;
  border-radius: 3px;
  margin-left: 15px;
  padding: 0 4px;
}
.contract {
  background: #353535;
  color: white;
  border-radius: 3px;
  margin-left: 15px;
  padding: 0 4px;
}
.brewpub {
  background: #FEDC57;
  color: white;
  border-radius: 3px;
  margin-left: 15px;
  padding: 0 4px;
}
</style>