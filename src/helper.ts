import axios from "axios";
export const LoadAction = async (
  mobileNumber: number,
  recaptacToken: string
) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      countryId: 1,
      deviceId: navigator.userAgent,
      isMobile: false,
      raptchaToken: recaptacToken,
      isAndroidRequest: false,
      mobileCaptchaData: {
        projectId: "findanexpert-client",
        recaptchaAction: "LOGIN",
        recaptchaSiteKey: "6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK",
      },
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const SignInLoading = async (mobileNumber: any, password: string) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const SignIn = async (mobileNumber: any, password: string) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const UploadImage = async (
  userId?: any,
  fileInput?: any,
  environment?: string
) => {
  try {
    const form = new FormData();
    form.append("AllFilesToUpload", fileInput);
    const token = localStorage.getItem("token");
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserImage?UserId=${userId}&environment=${environment}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      data: form,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const VerificationAction = async (
  userId: any,
  userOTP: string | number,
  phone: any
) => {
  try {
    var data = JSON.stringify({
      // userId: userId,
      otpCode: userOTP,
      phone: phone,
    });

    var config = {
      method: "post",
      url: "https://apigateway-preprod.findanexpert.net/otp/verify",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const EmailVerificationAction = async (
  userId: any,
  userOTP: string | number,
  type: number | string
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      userOTP: userOTP,
      type: type,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/verifyEmailOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const ResendAction = async (userId: any, recaptchaToken?: any) => {
  try {
    const data = JSON.stringify({
      userId: userId,
      type: 1,
      isMobile: false,
      isCrossPlatForm: false,
      raptchaToken: recaptchaToken,
      isAndroidRequest: false,
      mobileCaptchaData: {
        projectId: "findanexpert-client",
        recaptchaAction: "LOGIN",
        recaptchaSiteKey: "6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK",
      },
    });
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/ResendMobileOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ResendEmailAction = async (userId: any, IsEmailOTP?: boolean) => {
  try {
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resendEmailOtp?UserId=${userId}&Type=1`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const PersonalVerifcationAction = async ({
  userId,
  firstName,
  lastName,
  genderId,
  imagePath,
  modifiedBy,
}: {
  userId: number;
  firstName: string;
  lastName: string;
  genderId: number;
  imagePath: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      genderId: genderId,
      imagePath: imagePath,
      modifiedBy: modifiedBy || 0,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserProfile",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const PasswordAction = async (
  userId: any,
  isRest?: boolean,
  password?: any,
  userOTP?: any
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      password: password,
      otp: userOTP,
      deviceId: navigator.userAgent,
    });

    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/${
        isRest == true ? "resetUserPassword" : "addUserPassword"
      }`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ForgetPasswordAction = async (mobileNumber: any) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/forgetPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const AddUserEmailAction = async ({
  userId,
  text,
  modifiedBy,
}: {
  userId: number;
  text: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      text: text,
      type: 1,
      modifiedBy: modifiedBy,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserEmails",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const ForgotPasswordAction = async (mobileNumber: number) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      countryId: 1,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const getUserDetail = async (id: number) => {
  try {
    var config = {
      method: "get",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/getUserById?Id=${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const UploadUserImage = async (userId?: any, fileInput?: any) => {
  try {
    const form = new FormData();
    form.append("AllFilesToUpload", fileInput);
    const environment = "prepord";
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/changeUserImage?UserId=${userId}&environment=${environment}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: form,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const updateBasicProfile = async (
  id: number,
  lastname: string,
  firstname: string
) => {
  try {
    var config = {
      method: "get",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateBasicProfile?UserId=${id}&FirstName=${firstname}&LastName=${lastname}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const updateEmails = async (
  id: number,
  text: string,
  type: number,
  ModifiedBy: any
) => {
  try {
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateEmails?UserId=${id}&text=${text}&type=${type}&ModifiedBy=${ModifiedBy}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const updateMobile = async (id: number, text: string) => {
  try {
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateMobile?UserId=${id}&text=${text}&type=2`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
