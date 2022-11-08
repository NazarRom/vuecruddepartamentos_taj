<template>
  <div>
    <h1>Update</h1>
    <div style="width:500px;margin:0 auto" v-if="departamento">
        <form v-on:submit.prevent="updateDepartamento()">
            <label>Número: </label>
            <input type="hidden"
            v-model="departamento.numero"/><br/>

             <label>Nombre: </label>
            <input type="text"
            v-model="departamento.nombre"/><br/>

             <label>Localidad: </label>
            <input type="text"
            v-model="departamento.localidad"/><br/>
            <button class="btn btn-success">Modificar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServicesDepartamentos from '../services/ServicesDepartamentos'
const services = new ServicesDepartamentos();
export default {
name:"UpdateDepartamento",
data(){
    return{
        departamento: null,
        id:0
    }
},
mounted(){
    this.id = this.$route.params.id
    services.findDepartamentos(this.id).then(result=>{
        this.departamento = result;
    })
},
methods:{
    updateDepartamento(){
        services.updateDepartamento(this.departamento).then(result=>{
            console.log(result)
            this.$router.push("/");
        })
    }
}
}
</script>

<style>

</style>