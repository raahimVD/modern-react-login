import React, { useContext, useState} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  ErrorText
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import MuiPhoneNumber from 'material-ui-phone-number';

export function MainForm(props) {
  const { switchToOTP } = useContext(AccountContext);
  const [phone, setphone] = useState('');
  const [isSubmit, setSubmit] = useState(true);
  const [isError, showError] = useState(false);
  const phoneChange = (e) => {
    setphone(e)
    phone.length == 11 && setSubmit(false)
    console.log(isSubmit,phone)
  }
  const submitPhone = () => {
    console.log(phone.length)
    phone.length == 15 ? switchToOTP() : showError(true)
  }
  return (
    <BoxContainer>
      {/* <FormContainer> */}
      <MuiPhoneNumber defaultCountry={'pk'} placeholder="mobile number" onChange={phoneChange}/>
        {/* <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" /> */}
      {/* </FormContainer> */}
      {isError && <ErrorText>Please enter a valid mobile number</ErrorText>}

      <Marginer direction="vertical" margin={10} />
      {/* <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToMain}>
          Signup
        </BoldLink>
      </MutedLink> */}
    <SubmitButton type="submit"  onClick={submitPhone}>Continue</SubmitButton>
    </BoxContainer>
  );
}
