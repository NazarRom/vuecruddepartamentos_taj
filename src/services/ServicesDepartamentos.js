import axios from "axios"
import Global from "@/Global"
export default class ServicesDepartamentos {
    getDepartamentos() {
      return new Promise(function(resolve){
        var request = "api/departamentos";
        var url = Global.urldepartamentos +request;
        var departamentos = [];
        axios.get(url).then(res=>{
            departamentos = res.data;
            resolve(departamentos);
        })
        })
    }
    //metodo que reciba un objeto departamento
    //desde la peticion
    insertDepartamento(departamento){
        return new Promise(function(resolve){
            var request ="api/departamentos";
            var url = Global.urldepartamentos + request;
            axios.post(url,departamento).then(res=>{
                resolve(res);
            })
        })
    } 
    //metodo para buscar departamento en api
    //recibimos el id del departamento
    findDepartamentos(id){
        return new Promise(function(resolve){
            var request = "api/departamentos/" + id;
            var url = Global.urldepartamentos +request;
            var departamento = {};
            axios.get(url).then(res=>{
                departamento = res.data;
                resolve(departamento);
            })
        })
    }
}