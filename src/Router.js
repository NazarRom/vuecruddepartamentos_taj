import {createRouter,createWebHistory} from 'vue-router';
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import InsertDepartamento from './components/InsertDepartamento.vue'
import DetallesDepartamento from './components/DetallesDepartamento.vue'
import UpdateDepartamento from './components/UpdateDepartamento.vue'
import DeleteDepartamento from './components/DeleteDepartamento.vue'
const routes = [
    {
        path:"/",component: DepartamentosComponent
    },
    {
        path:"/insert",component:InsertDepartamento
    },
    {
        path:"/detalles/:numero/:nombre/:localidad",
        component:DetallesDepartamento
    },
    {
        path:"/update/:id",component:UpdateDepartamento
    },
    {
        path:"/delete/:id",component:DeleteDepartamento
    }
    
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router;