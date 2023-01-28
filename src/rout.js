import Login from "@/components/login";
import Field from "@/components/simpleupload";
import Select from "@/components/selection";

const routes = [{
        name: Select,
        component: Select,
        path: '/selection',
    },
    {
        name: Field,
        component: Field,
        path: '/upload',
    },

    {
        name: Login,
        component: Login,
        path: '/',
    },
    {
        name: Login,
        component: Login,
        path: '/login',
    }


]
export default routes