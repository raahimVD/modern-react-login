import React, { useContext , useState} from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import OtpInput from 'react-otp-input';

export function ConfirmPin(props) {
    const { switchToPayment } = useContext(AccountContext);
    const [tPin, confirmTpin] = useState('');

    const handleChange = (tPin) =>{
        confirmTpin(tPin)
    }
    return (
        <BoxContainer>
            <OtpInput
                placeholder={'1234'}
                value={tPin}
                // containerStyle={{width : '100%'}}
                inputStyle={{width : '35px', height : '45px'}}
                onChange={handleChange}
                numInputs={4}
                separator={<span>-</span>}
                isInputNum
            />
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
            <SubmitButton type="" onClick={switchToPayment}>Confirm</SubmitButton>
        </BoxContainer>
    );
}
