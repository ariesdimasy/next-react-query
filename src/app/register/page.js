import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <div className="flex justify-center">
      <Card w={"40%"} className="">
        <CardHeader className="">
          <h3 className="text-2xl">Register</h3>
        </CardHeader>
        <hr></hr>
        <CardBody>
          <FormControl className="mb-5">
            <FormLabel> Name </FormLabel>
            <Input type="text" name="name" />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel> Email </FormLabel>
            <Input type="email" name="email" />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Role</FormLabel>

            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="text-center">
            <Button type="submit" colorScheme="blue" className="w-full">
              {" "}
              Register{" "}
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
