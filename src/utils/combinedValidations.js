import Toast from 'react-native-simple-toast';
import * as Regex from 'utils/regex';

export const AgentSignupValidation = (
  firstName,
  email,
  contactNo,
  address,
  password,
  confirmPassword,
  city,
  state,
  postCode,
  profilePhoto,
  price,
  terms,
  ssn,
  routingNumber,
  accountNumber,
  IdPhoto,
  birthDay,
) => {
  if (!Regex.validateName(profilePhoto)) {
    Toast.show('Please enter a profile picture.');
    return false;
  } else if (!Regex.validateName(firstName)) {
    Toast.show('First name should be more than 3 letters.');
    return false;
  } else if (!Regex.validateEmail(email)) {
    Toast.show('Please enter a valid email address.');
    return false;
  } else if (!Regex.validateMobile(contactNo)) {
    Toast.show('Mobile number must contain 10 digits.');
    return false;
  } else if (!Regex.validateName(birthDay)) {
    Toast.show('You must be 18 or above to use this application.');
    return false;
  } else if (!Regex.validateName(city)) {
    Toast.show('Please enter a valid city name.');
    return false;
  } else if (!Regex.validatePrice(price)) {
    Toast.show('Please enter per hour cost between $15 to $40.');
    return false;
  } else if (!Regex.validatePassword(password)) {
    Toast.show('Password must be of 8 or more characters.');
    return false;
  } else if (!Regex.validatePassword(confirmPassword)) {
    Toast.show('Confirm Password must be of 8 or more characters.');
    return false;
  } else if (password != confirmPassword) {
    Toast.show('Password and confirm password does not match.');
    return false;
  } else if (!Regex.validateName(state)) {
    Toast.show('Please enter a valid state name.');
    return false;
  } else if (!Regex.validateName(postCode)) {
    Toast.show('Please enter a valid post code.');
    return false;
  } else if (!Regex.validateName(address)) {
    Toast.show('Please enter a valid address line 1.');
    return false;
  } else if (!Regex.validateSSN(ssn)) {
    Toast.show('Please enter last 4 digits of your social security number.');
    return false;
  } else if (!Regex.validateRouting(routingNumber)) {
    Toast.show('Please enter a valid routing number.');
    return false;
  } else if (!Regex.validateAcc(accountNumber)) {
    Toast.show('Please enter a valid account number.');
    return false;
  } else if (!Regex.validateName(IdPhoto)) {
    Toast.show('Please enter a identity proof.');
    return false;
  } else if (!terms) {
    Toast.show('Please accept aur terms and conditions to proceed.');
    return false;
  } else {
    return true;
  }
};

export const CustomerSignupValidation = (
  firstName,
  email,
  contactNo,
  password,
  confirmPassword,
  profilePhoto,
) => {
  if (!Regex.validateName(firstName)) {
    Toast.show('First name should be more than 3 letters.');
    return false;
  } else if (!Regex.validateEmail(email)) {
    Toast.show('Please enter a valid email address.');
    return false;
  } else if (!Regex.validateMobile(contactNo)) {
    Toast.show('Mobile number must contain 10 digits.');
    return false;
  } else if (!Regex.validatePassword(password)) {
    Toast.show('Password must be of 8 or more characters.');
    return false;
  } else if (!Regex.validatePassword(confirmPassword)) {
    Toast.show('Password must be of 8 or more characters.');
    return false;
  } else if (password != confirmPassword) {
    Toast.show('Password and confirm password does not match.');
    return false;
  } else {
    return true;
  }
};

export const LoginValidation = (email, password) => {
  if (!Regex.validateEmail(email)) {
    Toast.show('Please enter a valid email address.');
    return false;
  } else if (!Regex.validatePassword(password)) {
    Toast.show('Password must be of 8 or more characters.');
    return false;
  } else {
    return true;
  }
};

export const SendOTPValidation = (email, password) => {
  if (!Regex.validateEmail(email)) {
    Toast.show('Please enter a valid email address.');
    return false;
  } else {
    return true;
  }
};

export const ConfirmOTPValidation = (email, password) => {
  if (!Regex.validateOtp(email)) {
    Toast.show('OTP must be of 6 characters.');
    return false;
  } else {
    return true;
  }
};

export const ResetPasswordValidation = (password, confirmPassword) => {
  if (!Regex.validatePassword(password)) {
    Toast.show('Password must be of 8 or more characters.');
    return false;
  } else if (!Regex.validatePassword(confirmPassword)) {
    Toast.show('Password must be of 8 or more characters.');
    return false;
  } else if (password != confirmPassword) {
    Toast.show('Password and confirm password does not match.');
    return false;
  } else {
    return true;
  }
};

export const AgentUpdateValidation = (
  profilePhoto,
  firstName,
  contactNo,
  address,
  city,
  state,
  postCode,
  price,
  ssn,
  routingNumber,
  accountNumber,
  IdPhoto,
  birthDay,
) => {
  if (!Regex.validateName(profilePhoto)) {
    Toast.show('Please enter a profile picture.');
    return false;
  } else if (!Regex.validateName(firstName)) {
    Toast.show('First name should be more than 3 letters.');
    return false;
  } else if (!Regex.validateMobile(contactNo)) {
    Toast.show('Mobile number must contain 10 digits.');
    return false;
  }
  // else if (!Regex.validateName(birthDay)) {
  //   Toast.show('You must be 18 or above to use this application.');
  //   return false;
  // }
  else if (!Regex.validateName(city)) {
    Toast.show('Please enter a valid city name.');
    return false;
  } else if (!Regex.validatePrice(price)) {
    Toast.show('Please enter per hour cost between $15 to $40.');
    return false;
  } else if (!Regex.validateName(state)) {
    Toast.show('Please enter a valid state name.');
    return false;
  }
  //else if (!Regex.validateName(postCode)) {
  //   Toast.show('Please enter a valid post code.');
  //   return false;
  // } else if (!Regex.validateName(address)) {
  //   Toast.show('Please enter a valid address line 1.');
  //   return false;
  // } else if (!Regex.validateSSN(ssn)) {
  //   Toast.show('Please enter last 4 digits of your social security number.');
  //   return false;
  // } else if (!Regex.validateRouting(routingNumber)) {
  //   Toast.show('Please enter a valid routing number.');
  //   return false;
  // } else if (!Regex.validateAcc(accountNumber)) {
  //   Toast.show('Please enter a valid account number.');
  //   return false;
  // } else if (!Regex.validateName(IdPhoto)) {
  //   Toast.show('Please enter a identity proof.');
  //   return false;
  // }
  else {
    return true;
  }
};

export const CustomerUpdateValidation = (firstName, contactNo) => {
  if (!Regex.validateName(firstName)) {
    Toast.show('First name should be more than 3 letters.');
    return false;
  } else if (!Regex.validateMobile(contactNo)) {
    Toast.show('Mobile number must contain 10 digits.');
    return false;
  } else {
    return true;
  }
};

export const ChangePasswordValidation = (current, newPass, confirmPass) => {
  if (!Regex.validatePassword(current)) {
    Toast.show('Current password must be 8 or more characters.');
    return false;
  } else if (!Regex.validatePassword(newPass)) {
    Toast.show('New password must be 8 or more characters.');
    return false;
  } else if (!Regex.validatePassword(confirmPass)) {
    Toast.show('Confirm password must be 8 or more characters.');
    return false;
  } else if (newPass != confirmPass) {
    Toast.show('Passwords do not match.');
    return false;
  } else {
    return true;
  }
};

export const CardValidations = (cardNumber, cardYear, cardMonth, cardCvv) => {
  if (!Regex.validateCardNumber(cardNumber)) {
    Toast.show('Card number must be of 16 digits.');
    return false;
  } else if (!Regex.validateCardYear(cardYear)) {
    Toast.show('Please enter a valid year.');
    return false;
  } else if (!Regex.validateCardYear(cardMonth)) {
    Toast.show('Please enter a valid month.');
    return false;
  } else if (!Regex.validateCardCvv(cardCvv)) {
    Toast.show('Cvv must be of 3 digits.');
    return false;
  } else {
    return true;
  }
};

export const TourValidatior = (tourDetails, tourImages, cost) => {
  if (tourDetails.length <= 5) {
    Toast.show('Please add a proper discription of the property.');
    return false;
  } else if (!Regex.validateCardYear(cardYear)) {
    Toast.show('Please enter a valid year.');
    return false;
  } else if (!Regex.validateCardYear(cardMonth)) {
    Toast.show('Please enter a valid month.');
    return false;
  } else if (!Regex.validateCardCvv(cardCvv)) {
    Toast.show('Cvv must be of 3 digits.');
    return false;
  } else {
    return true;
  }
};
