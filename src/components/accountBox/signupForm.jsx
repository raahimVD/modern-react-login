import React, { useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  SmallText,
  ErrorText
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import InputMask from "react-input-mask";

export function SignupForm(props) {
  const { switchToSetupPin } = useContext(AccountContext);
  const [isError, showError] = useState(false);
  const [name, setName] = useState('');
  const [cnic, setCNIC] = useState('');

  const nameValidation = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    showError(false)
  }
  const CNICValidation = (e) => {
    console.log(e.target.value)
    setCNIC(e.target.value)
    showError(false);
  }
  const submitSignup = () => {
    console.log(cnic.length, name);
    (cnic.length != 15 || name == '') ? showError(true) : switchToSetupPin()
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" onChange={nameValidation} />
        <Marginer direction="vertical" margin={10} />
        <InputMask mask="99999-9999999-9" class="sc-eCImPb joqyUW" placeholder="CNIC" onChange={CNICValidation} />
        <Marginer direction="vertical" margin={10} />
        {/* <Input type="text" data-inputmask="'mask': '99999-9999999-9'"  placeholder="XXXXX-XXXXXXX-X" placeholder="CNIC" /> */}
        {/* <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" /> */}
      </FormContainer>
      <SmallText>Enter your 13 digit CNIC number</SmallText>
      {isError && <ErrorText>Please enter your name and valid CNIC</ErrorText>}
      <Marginer direction="vertical" margin={40} />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        By continuing, you agree to our
        <BoldLink href="#"
        // onClick={switchToSignin}
        >
          terms of use
        </BoldLink>
        and
        <BoldLink href="#"
        // onClick={switchToSignin}
        >
          privacy policy
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit" onClick={submitSignup}>continue</SubmitButton>
    </BoxContainer>
  );
}
