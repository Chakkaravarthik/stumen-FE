const localURL = `${import.meta.env.VITE_LOCAL_URL}/teachers`;

const getallteach = async () =>{
    const res = await fetch(localURL, {
        headers: {
            Authorization : localStorage.getItem('user_details'),
        }
    });
    return await res.json();
}

export {getallteach};