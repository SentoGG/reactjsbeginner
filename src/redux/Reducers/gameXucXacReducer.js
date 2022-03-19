const stateGameDefault = {
    youchoose : true, //true : tài, false : xỉu
    wintotal : 10,
    gametotal : 10,
    mangXucXac : [
        {pt : 6, img : './img/6.png'},
        {pt : 6, img : './img/6.png'},
        {pt : 6, img : './img/6.png'}
    ]
}

export const gameXucXacReducer = (state = stateGameDefault,action) => {
    switch(action.type) {
        default: return state;
    }
}