import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import { Fragment } from "react";
import MainNavigation from "./main-nagivation";

const Layout = (props) => {

    return (
        <Fragment>
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;