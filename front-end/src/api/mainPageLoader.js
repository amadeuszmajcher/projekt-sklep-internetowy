import { redirect } from "react-router-dom";
import { BACK_END_URL } from "../constants/api";

export function mainPageLoader({ params }) {
  if (params.type) {
    return fetch(`${BACK_END_URL}/${params.type}`);
  } else {
    return redirect("/phone");
  }
}
