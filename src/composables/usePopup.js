import swal from "sweetalert";

export function usePopup() {
    function popup(title, message, icon = 'success') {
        return swal(title, message, icon);
    }

    return {
        popup
    };
}