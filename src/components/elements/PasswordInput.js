import { useState } from "react";
import {
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

function PasswordInput({ inputLabel, selectorID, handleChange }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const showPassword = (e) => setPasswordShown(!passwordShown);

  return (
    <div>
      <FormLabel mt="1rem">{inputLabel}</FormLabel>
      <InputGroup>
        <Input
          id={selectorID}
          type={passwordShown ? "text" : "password"}
          onChange={handleChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={showPassword}>
            {passwordShown ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}

export default PasswordInput;
