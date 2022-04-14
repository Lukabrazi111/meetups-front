const Notifications = (props) => {
    let statusHandler = '';
    let status = props.status;

    if (status === 'pending') {
        statusHandler = 'bg-gray-600';
    }

    if (status === 'success') {
        statusHandler = 'bg-green-600';
    }

    if (status === 'error') {
        statusHandler = 'bg-red-600';
    }

    return (
        <div
            className={`fixed bottom-0 left-0 px-6 transition-transform py-10 text-center text-2xl w-full text-white ${statusHandler}`}
        >
            {props.title}
        </div>
    );
};

export default Notifications;
