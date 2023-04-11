import { Notyf } from "notyf";

// show toast functionality using notyf third-party library
export const showToast = ({ type, message }) => {
    const toast = new Notyf({
        dismissible: true,
        duration: 3000,
        position: {
            x: "right",
            y: "top",
        },
        types: [{
                type: "success",
                background: "#3dc663",
                ripple: true,
                dismissible: true,
            },
            {
                type: "error",
                background: "#ec3d3d",
                ripple: true,
                dismissible: true,
            },
        ],
    });
    toast[type](message);
};