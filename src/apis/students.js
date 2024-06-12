const localURL = `${import.meta.env.VITE_LOCAL_URL}/students`;

const getallstu = async () =>{
    const res = await fetch(localURL);
    return await res.json();
}

export {getallstu};