import React from "react";
import { Button, buttonNgu } from "../components/Button";
import { StyleLink } from "../components/Link";
import { TextField } from "../components/TextField";
export default function DemoJss() {
  return (
    <div>
      <Button bgNe className="button-style">
        click em di
      </Button>
      <Button fontSize className="button-style">
        click em di
      </Button>
      <buttonNgu>cc</buttonNgu>
      <StyleLink>syne</StyleLink>
      <TextField inputColor="red" />
    </div>
  );
}
