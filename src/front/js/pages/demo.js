import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [mail, addMail] = useState("");
  const [password, addPassword] = useState("");
  const [confirm_password, addConfirmPassword] = useState("");

  return (
    <div>
      <div className="container p-5 mt-5 bg-white rounded w-50 ">
        <h2 className="mb-4">Nuevo Usuario</h2>
        <form>
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              onChange={(e) => addMail(e.target.value)}
            />
            <label class="form-label pt-2" for="form2Example1">
              Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              onChange={(e) => addPassword(e.target.value)}
            />
            <label class="form-label pt-2" for="form2Example2">
              Password
            </label>
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              onChange={(e) => addConfirmPassword(e.target.value)}
            />
            <label class="form-label pt-2" for="form2Example2">
              Confirm Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check"></div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-success btn-block mb-4"
            onClick={() => {
              actions.add(mail, password, confirm_password);
            }}
          >
            Registrar
          </button>

          <div class="text-center">
            <Link to="/">
              <button className="btn btn-danger">atras</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
