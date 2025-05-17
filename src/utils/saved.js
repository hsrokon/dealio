import { createContext } from "react";
import { Bounce, toast } from "react-toastify";

export const SavedContext = createContext();

const toastAdded = () => {
    toast.success('Coupon saved!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
}

const toastRemoved = () => {
    toast.error('Coupon removed!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

//get local storage
const getSaved = (category) => {
    if (category==='Electronics') {
        const eleIdsStr = localStorage.getItem('Electronics')
        if (eleIdsStr) {
            const eleIds = JSON.parse(eleIdsStr)
            return eleIds;
        }
        return [];
    }
    if (category==='Food') {
        const foodIdsStr = localStorage.getItem('Food')
        if (foodIdsStr) {
            const foodIds = JSON.parse(foodIdsStr)
            return foodIds;
        }
        return [];
    }
    if (category==='Fashion') {
        const fashionIdsStr = localStorage.getItem('Fashion')
        if (fashionIdsStr) {
            const fashionIds = JSON.parse(fashionIdsStr)
            return fashionIds;
        }
        return [];
    }
    if (category==='Beauty') {
        const beautyIdsStr = localStorage.getItem('Beauty')
        if (beautyIdsStr) {
            const beautyIds = JSON.parse(beautyIdsStr)
            return beautyIds;
        }
        return [];
    }
    if (category==='Travel') {
        const travelIdsStr = localStorage.getItem('Travel')
        if (travelIdsStr) {
            const travelIds = JSON.parse(travelIdsStr)
            return travelIds;
        }
        return [];
    }

}

//save to local storage
const saveToLS = (id, category) => {
    if (category==='Electronics') {
        const eleSavedIds = getSaved('Electronics')
        if (eleSavedIds.includes(id)) {
            const updatedEleSavedIds = eleSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Electronics', JSON.stringify(updatedEleSavedIds))
            toastRemoved()
            return;
        }
        eleSavedIds.push(id)
        const eleSavedIdsStr = JSON.stringify(eleSavedIds)
        localStorage.setItem('Electronics',  eleSavedIdsStr)
        toastAdded()
    }
    if (category==='Food') {
        const foodSavedIds = getSaved('Food')
        if (foodSavedIds.includes(id)) {
            const updatedFoodSavedIds = foodSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Food', JSON.stringify(updatedFoodSavedIds))
            toastRemoved()
            return;
        }
        foodSavedIds.push(id)
        const foodSavedIdsStr = JSON.stringify(foodSavedIds)
        localStorage.setItem('Food',  foodSavedIdsStr)
        toastAdded()
    }
    if (category==='Fashion') {
        const fashionSavedIds = getSaved('Fashion')
        if (fashionSavedIds.includes(id)) {
            const updatedFashionSavedIds = fashionSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Fashion', JSON.stringify(updatedFashionSavedIds))
            toastRemoved()
            return;
        }
        fashionSavedIds.push(id)
        const fashionSavedIdsStr = JSON.stringify(fashionSavedIds)
        localStorage.setItem('Fashion',  fashionSavedIdsStr)
        toastAdded()
    }
    if (category==='Beauty') {
        const beautySavedIds = getSaved('Beauty')
        if (beautySavedIds.includes(id)) {
            const updatedBeautySavedIds = beautySavedIds.filter(ids => ids !==id);
            localStorage.setItem('Beauty', JSON.stringify(updatedBeautySavedIds))
            toastRemoved()
            return;
        }
        beautySavedIds.push(id)
        const beautySavedIdsStr = JSON.stringify(beautySavedIds)
        localStorage.setItem('Beauty',  beautySavedIdsStr)
        toastAdded()
    }
    if (category==='Travel') {
        const travelSavedIds = getSaved('Travel')
        if (travelSavedIds.includes(id)) {
            const updatedTravelSavedIds = travelSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Travel', JSON.stringify(updatedTravelSavedIds))
            toastRemoved()
            return;
        }
        travelSavedIds.push(id)
        const travelSavedIdsStr = JSON.stringify(travelSavedIds)
        localStorage.setItem('Travel',  travelSavedIdsStr)
        toastAdded()
    }
}

export { getSaved, saveToLS }