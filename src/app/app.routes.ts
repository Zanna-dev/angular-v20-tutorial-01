import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { ResourceApi } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { LoginComp } from './pages/login-comp/login-comp';
import { LayoutComp } from './pages/layout-comp/layout-comp';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        redirectTo: 'login-com',
        pathMatch: 'full'
    },
    {
        path: 'login-com',
        component: LoginComp
    },
    {
        path: '',
        component: LayoutComp,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            }
        ]
    },
    // {
    //     path: 'login',
    //     component: Login
    // },
    // {
    //     path: '',
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'admin',
    //             component: Admin
    //         },
    //         {
    //             path: 'control-flow-statement',
    //             component: ControlFlow
    //         },
    //         {
    //             path: 'databinding',
    //             component: DataBinding
    //         },
    //         {
    //             path: 'signal',
    //             component: SignalEx
    //         },
    //         {
    //             path: 'attDirectives',
    //             component: AttDirective
    //         },
    //         {
    //             path: 'getApi',
    //             component: GetApi
    //         },
    //         {
    //             path: 'user',
    //             component: User
    //         },
    //         {
    //             path: 'reactive-user',
    //             component: ReactiveUser
    //         },
    //         {
    //             path: 'pipe-ex',
    //             component: PipeEx
    //         },
    //         {
    //             path: 'resource-api',
    //             component: ResourceApi
    //         },


    //     ]

    // },

];
