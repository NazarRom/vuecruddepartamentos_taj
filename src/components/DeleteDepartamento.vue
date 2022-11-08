<template>
  <div>
    <h1>del</h1>
  </div>
</template>

<script>
import ServicesDepartamentos from '../services/ServicesDepartamentos'
const services = new ServicesDepartamentos();
export default {
name:"DeleteDepartamento",
mounted(){
    var id = this.$route.params.id;
    services.deleteDepartamento(id).then(result=>{
        console.log(result);
        this.$router.push("/")
    })
}
}
</script>

<style>

</style>