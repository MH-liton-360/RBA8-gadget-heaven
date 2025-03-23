const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('add-cart');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }

}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        console.log(id, 'already exist')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-cart', storedListStr)
    }
}


const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('add-wish');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }

}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id, 'already exist')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-wish', storedListStr)
    }
}



export { addToStoredCartList, addToStoredWishList, getStoredCartList }