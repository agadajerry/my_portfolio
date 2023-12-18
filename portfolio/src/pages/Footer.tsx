
import moment from "moment"
export default function Footer(){

   return (
      <footer className="footer text-center border p-2">
    <p>&copy; {moment(new Date()).format("YYYY")}, Idoko Agada Jerry</p>
  </footer>
   )
}