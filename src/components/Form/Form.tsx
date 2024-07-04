import { countries } from "../../data/countries";
import style from "./Form.module.css";

export default function Form() {
  return (
    <form className={style.form}>
      <div className={style.field}>
        <label htmlFor="city">Ciudad:</label>
        <input id="city" type="text" name="city" placeholder="Ciudad" />
      </div>

      <div className={style.field}>
        <label htmlFor="city">Pais:</label>
        <select>
          <option value="">-- Seleccione un pais</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={style.submit} type="submit" value="consultar clima" />
    </form>
  );
}
