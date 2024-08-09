import React, { Fragment } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Fragment>
        <MasterLayout>
        <div className="text-center py-5 border-b-2">
          <img src='notfound2.png' className="mx-auto w-96"  />
          <NavLink className="btn bg-amber-400 flex items-center text-white hover:bg-amber-500 border-none w-48 mx-auto text-lg hover:text-2xl transition-all " to="/"><IoIosArrowBack /><span>Go Back</span></NavLink>
         </div>
        </MasterLayout>
    </Fragment>
  )
};

export default NotFoundPage
