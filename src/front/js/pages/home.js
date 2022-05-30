import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container p-5 mt-5 bg-white rounded w-50 ">
      <form>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label pt-2" for="form2Example1">
            Email
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label pt-2" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check"></div>
          </div>
        </div>

        <button type="button" class="btn btn-success btn-block mb-4">
          Entrar
        </button>

        <div class="text-center">
          <Link to="/demo">
            <button className="btn btn-primary">Registrar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
