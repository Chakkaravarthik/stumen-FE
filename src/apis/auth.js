const URL = 'http://localhost:7000';

const usersignup = async (userdata) => {
    try {
        const res = await fetch(`${URL}/register`, {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        if (!res.ok) {
            const error = new Error(`HTTP error! status: ${res.status}`);
            error.status = res.status;
            throw error;
        }

        const result = await res.json();
        console.log('usersignup ok');
        return result;
    } catch (e) {
        console.log(e);
        return { error: e.message };
    }
};


const usersignin = async (userdata) =>{
    try{
        const res = await fetch(`${URL}/login`, { method: "POST",
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        return res.json();
    }catch(e){
        console.log(e);
        return {error : e.message};
    }
}

export {usersignup , usersignin};
