export const filedsValidations = (field)=>{
    // debugger
    field = field.toLowerCase()
    switch (field) {
        case "first name" || "last name":
            return {
                minLength: {
                    value: 3,
                    message: `${field} must be at least 3 characters`,
                  },
                  maxLength: {
                    value: 15,
                    message: `${field} must not exceed 15 characters`,
                  },
                  pattern: {
                    value: /^[A-Za-z0-9 ]+$/, // alphanumeric only
                    message: `${field} should not contain special characters`,
                  },
            }

        case "contact_no":
            return {
                minLength: {
                    value: 10,
                    message: `${field} must be at least 10 characters`,
                },
                maxLength: {
                    value: 10,
                    message: `${field} must not exceed 10 characters`,
                },
                pattern: {
                    value: /^[0-9]{10}$/,  // only digits, exactly 10
                    message: `${field} must be a 10 digit number`,
                },
                }
        case "password":
            return {
                minLength: {
                    value: 8,
                    message: `${field} must be at least 8 characters`,
                },
                maxLength: {
                    value: 15,
                    message: `${field} must not exceed 15 characters`,
                },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: `${field} must be at least 8 characters, include uppercase, lowercase, number, and special character`,
                },
                }
        case "email":
        return {
            minLength: {
                value: 8,
                message: `${field} must be at least 8 characters`,
            },
            maxLength: {
                value: 50,
                message: `${field} must not exceed 15 characters`,
            },
            pattern: {
               value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: `${field} must be a valid email address`,
            },
            }
        default:
            break;
    }

}