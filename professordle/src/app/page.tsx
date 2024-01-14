import Image from "next/image";
import { TextInput } from "../components/textinput";
import { Grid } from "../components/grid";
import "./styles.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid></Grid>
    </main>
  );
}
