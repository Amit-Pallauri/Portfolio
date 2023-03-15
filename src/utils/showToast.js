import { toast } from "react-hot-toast";

export const showToast = (msg, delay) => {
  toast(msg, {
    duration: delay,
    position: "bottom-right",
    className: "toaster-custom",
  });
};
