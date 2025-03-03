import axios from "axios";

// sending requests and receiving responses
const API_URL = "http://127.0.0.1:8000/api";

// Function to create a user
export const createUser = async (
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string
) => {
    const response = await axios.post(`${API_URL}/create_user/`, {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        password: password,
        confirm_password: confirmPassword,
    });
    return response.data;
}

// Function to log in a user
export const loginUSer = async (
    email: string,
    password: string,
) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, {
            email: email,
            password : password,
        });
        return response.data;
    } catch (error) {
        console.error("Login error", error);
        throw error;
    }
};
