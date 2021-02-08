<template>
  <div id="app">
    <Navbar />
    <div class="select">
      <select id="select" v-model="selectType">
        <option value="">Filtrar</option>
        <option value="micro">Micro</option>
        <option value="regional">Regional</option>
        <option value="contract">Contract</option>
        <option value="brewpub">Brewpub</option>
      </select>

      <button @click="filtrar">Filtrar</button>
    </div>

    <div class="main" v-for="cer in filtroCerveja" :key="cer.id">
      <Home :dados="filtroCerveja" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import axios from "axios";

export default {
  data() {
    return {
      dadosCerveja: [],
      filtroCerveja: [],
      selectType: ""
    };
  },
  created: function () {
    axios.get("https://api.openbrewerydb.org/breweries").then((res) => {
      // console.log(res.data);
      this.dadosCerveja = res.data;
      // console.log(this.dadosCerveja);
      this.filtroCerveja = res.data;
      // console.log(this.selectType)
    });
  },
  methods: {
    filtrar: function(){
      if(this.selectType == "") {
        this.filtroCerveja = this.dadosCerveja;
      } else if(this.selectType == 'micro') {
        this.filtroCerveja = this.dadosCerveja.filter(cer => cer.brewery_type == this.selectType);
      } else if(this.selectType == 'regional') {
        this.filtroCerveja = this.dadosCerveja.filter(cer => cer.brewery_type == this.selectType)
        } else if(this.selectType == 'contract') {
        this.filtroCerveja = this.dadosCerveja.filter(cer => cer.brewery_type == this.selectType)
      } else {
        this.filtroCerveja = this.dadosCerveja.filter(cer => cer.brewery_type == this.selectType)
      }
      console.log(this.selectType)
    }
  },
  name: "App",
  components: {
    Home,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body {
  margin: 0;
  background: #faf5f5;
}
.select {
  width: 77%;
  margin: auto;
  margin-top: 20px;
}
.select > button {
  margin-left: 5px;
  background: #353535;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 4px;
  border: 0;
  border-radius: 3px;
}
</style>
