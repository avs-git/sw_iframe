const handleMessage = (event) => {
    console.log('!!!!! event', event);
}

window.addEventListener('message', handleMessage)