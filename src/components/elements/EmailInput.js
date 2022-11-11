import { FormLabel, Input } from "@chakra-ui/react";

function EmailInput({ inputLabel, selectorID, handleChange }) {
  return (
    <div>
      <FormLabel mt="1rem" htmlFor="email">
        {inputLabel}
      </FormLabel>
      <Input id={selectorID} type="email" onChange={handleChange} />
    </div>
  );
}

export default EmailInput;
