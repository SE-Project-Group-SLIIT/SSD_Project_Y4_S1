import { axiosInstance } from '../../api';
const TOKEN_KEY = 'isLoggedIn';
const BASE_PATH = '/user';

//signIn API Call
export let signin = async (email, password) => {
    try {
        let value = await axiosInstance.post(BASE_PATH+'/signin', {
            email: email,
            password: password,
        })
        console.log("data",value.data)
        if (value.success === true){
            setAccessToken(value.data.token)
            setAccountStatus(value.data.isActive)
            localStorage.setItem('userId', value.data.userId);
            localStorage.setItem('Permissions', JSON.stringify(value.data.permissions));
            localStorage.setItem(TOKEN_KEY,true);
        }
        return value;
    } catch (error) {
        return error
    }
}

//signUp API Call
export let signUp = async (email, password,companyName) => {
    try {
        let value = await axiosInstance.post('/company_signup', {
            email: email,
            password: password,
            company_name: companyName,
        })
        return value;
    } catch (error) {
        return error
    }
}

//signUp New User API Call
export let signUpNewUser = async (userId, firstName, lastName, position, password) => {
    try {
        let value = await axiosInstance.post('/join_new_user', {
            user_id: userId,
            first_name: firstName,
            last_name: lastName,
            position: position,
            password: password
        })
        return value;
    } catch (error) {
        return error
    }
}

//get New User Invitation Details API Call
export let getNewUserInvitationDetails = async (userId) => {
    try {
        let value = await axiosInstance.post('/get_new_user_invitation_details', {
            user_id: userId,
        })
        return value;
    } catch (error) {
        return error
    }
}

// //Forgot Password Email API Call
// export let forgotPasswordEmail = async (email) => {
//     try {
//         let value = await axiosInstance.post('/send_password_reset_email', {
//             email: email,
//         })
//         return value;
//     } catch (error) {
//         return error
//     }
// }

// //Reset Password API Call (Forgot Password)
// export let resetPassword = async (email, password,code) => {
//     try {
//         let value = await axiosInstance.post('/reset_password', {
//             email: email,
//             new_password:password,
//             code: code,
//         })
//         return value;
//     } catch (error) {
//         return error
//     }
// }

// //Send Email verification Token For Activation
// export let verifyVerificationCode = async (code) => {
//     try {
//         let value = await axiosInstance.post('/email_verification_for_activation', {
//             code: code,
//         })
//         return value;
//     } catch (error) {
//         return error
//     }
// }

//Send Email verification Token For Activation
export let resendVerificationCode = async (code) => {
    try {
        let value = await axiosInstance.post('/send_email_verification_for_activation', {
            code: code,
        })
        return value;
    } catch (error) {
        return error
    }
}



//set Access Token
export let setAccessToken = (value) => {
    return localStorage.setItem('token',value);
}

//get Access Token 
export let getAccessToken = () => {
    return localStorage.getItem('token');
}

//get User Id 
export let getUserId = () => {
    return localStorage.getItem('userId');
}

//set Account Status
export let setAccountStatus = (value) => {
    return localStorage.setItem('activated', value);
}

//get Account Status
export let getAccountStatus = () => {
    return localStorage.getItem('activated');
}
//get Account permission
export let getAccountPermission = () => {
    return localStorage.getItem('Permissions');
}

//delete Access Token
export let logout = () => {
    return localStorage.clear();
}


//Check user is logged in function
export let isLogin = () => {
    return localStorage.getItem(TOKEN_KEY) ? true : false;
}

//get email address
export let getEmailAddress = () => {
    return localStorage.getItem('email');
}
