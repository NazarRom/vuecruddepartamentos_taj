<template>
  <div>
    <h1>Insert</h1>
    <h1 style="color: red">{{ mensaje }}</h1>
    <form method="post" v-on:submit.prevent="insertarDepartamento()">
      <label>Numero: </label>
      <input
        type="number"
        class="form-control"
        v-model="departamento.numero"
      /><br />
      <label>Nombre: </label>
      <input
        type="text"
        class="form-control"
        v-model="departamento.nombre"
      /><br />
      <label>Localidad</label>
      <input
        type="text"
        class="form-control"
        v-model="departamento.localidad"
      /><br/>
      <button class="btn btn-success">Crear</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '../services/ServicesDepartamentos';
const services = new ServiceDepartamentos();
export default {
  name: "InsertDepartamento",
  data() {
    return {
      mensaje: "",
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
  methods: {
    insertarDepartamento() {
        services.insertDepartamento(this.departamento).then(res=>{
            console.log(res);
            this.mensaje="Insertado"
            this.$router.push("/")
        })
    }
  },
};
</script>

<style>
</style>