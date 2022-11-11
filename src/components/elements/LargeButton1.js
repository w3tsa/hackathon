import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function LargeButton1({ text, path }) {
  return (
    <div>
      <Link to={path}>
        <Stack direction="vertical" spacing={4} align="center" justify="center">
          <Button rightIcon={<ArrowForwardIcon />} variant="outline">
            {text}
          </Button>
        </Stack>
      </Link>
    </div>
  );
}

export default LargeButton1;
