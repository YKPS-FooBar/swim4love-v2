import swal from 'sweetalert';

export function unknownResponse(data) {
    swal(
        "An unknown error occurred...",
        `The server responded with unhandled error message "${data.msg}"`,
        "error"
    );
}
