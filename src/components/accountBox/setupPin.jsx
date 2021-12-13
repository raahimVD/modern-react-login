import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
    ErrorText,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import OtpInput from 'react-otp-input';

export function SetupPin(props) {
    const { switchToConfirmPin } = useContext(AccountContext);
    const [tPin, setTpin] = useState('');
    const [isError, showError] = useState(false);

    const handleChange = (tPin) => {
        setTpin(tPin)
    }
    const pinValid = () => {
        tPin.length == 4 ? switchToConfirmPin() : showError(true);
    }
    return (
        <BoxContainer>
            <OtpInput
                placeholder={'1234'}
                value={tPin}
                // containerStyle={{width : '100%'}}
                inputStyle={{ width: '35px', height: '45px' }}
                onChange={handleChange}
                numInputs={4}
                separator={<span>-</span>}
                isInputNum
            />
            {isError && <ErrorText>Please enter 4 digit T-Pin</ErrorText>}
            {/* <FormContainer> */}
            {/* <MuiPhoneNumber defaultCountry={'pk'} placeholder="mobile number" />, */}
            {/* <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" /> */}
            {/* </FormContainer> */}
            <Marginer direction="vertical" margin={40} />

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
            <SubmitButton type="" onClick={pinValid}>Save</SubmitButton>
        </BoxContainer>
    );
}
