import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Login = lazy(()=> import('../components/user/Login'))

function LoginPage() {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
}

export default LoginPage;