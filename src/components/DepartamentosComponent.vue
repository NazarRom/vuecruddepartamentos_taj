<template>
  <div>
    <h1>Departamentos CRUD</h1>
    <div v-if="status == false">
      <img src="../assets/images/load.gif" />
    </div>
    <div v-else>
      <table class="table table-bordered table-warning">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>LOCALIDAD</th>
            <th>DETALLES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dept in departamentos" :key="dept">
            <td>{{ dept.numero }}</td>
            <td>{{ dept.nombre }}</td>
            <td>{{ dept.localidad }}</td>
            <td>
              <router-link
              :to="'/detalles/'+dept.numero+'/'+dept.nombre+'/'+dept.localidad" class="btn btn-success">
              Details</router-link>
            
              <router-link
              :to="'/update/'+dept.numero" class="btn btn-warning">
              Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "../services/ServicesDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "DepartamentosComponent",
  data() {
    return {
      departamentos: [],
      status: false,
    };
  },
  mounted() {
    service.getDepartamentos().then((result) => {
      this.departamentos = result;
      this.status = true;
    });
  },
};
</script>

<style>
</style>